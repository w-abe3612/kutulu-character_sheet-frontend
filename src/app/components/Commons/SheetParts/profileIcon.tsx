import React, { useEffect, useState, useCallback } from 'react'
import { useFormContext, useController } from "react-hook-form";
import { useDropzone } from 'react-dropzone'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'
import { useAppDispatch } from 'app/reducers/hooks';
import { resetImages, setbase64 } from '../../../reducers/characterInfosSlice'
import { toast } from 'react-toastify'
import Compressor from 'compressorjs'


type viewProps = {
    changeImage: any
    viewIcon: string
}

const ViewProfileIcon: React.FC<viewProps> = (props): JSX.Element => {
    const resetIcon = (e: React.MouseEvent<HTMLElement>) => {
        props.changeImage()
    }

    return (
        <div className="m-viewProfileIcon">
            <figure className="image-inner" >
                <img
                    className="image-img"
                    src={props.viewIcon} alt="" />
            </figure>
            <button
                type="button"
                className="m-deleteIcon"
                onClick={resetIcon}
            >
                <FontAwesomeIcon
                    icon={faXmark}
                    className="m-faXmark"
                />
            </button>
        </div>
    )
}

type inputProps = {
    getRootProps: any
    getInputProps: any
}

const InputImgFile: React.FC<inputProps> = (props): JSX.Element => {

    return (
        <div className="m-inputImgFile" >
            <div {...props.getRootProps({
                className: 'input-dropzone'
            })}>
                <input {...props.getInputProps()} />
                <FontAwesomeIcon
                    className="m-faCloudArrowUp"
                    icon={faCloudArrowUp}
                />
                <p className="input-description" >Drop file here</p>
            </div>
        </div>
    )
}


type mainProps = {
    image_path: string
    image_name: string
    img_upload_base64: string
}

const ProfileIcon: React.FC<mainProps> = (props): JSX.Element => {
    let section: JSX.Element
    let IconImage:any

    const dispatch = useAppDispatch()
    const { register, setValue } = useFormContext();

    const convertBase64 = (File: any) => {
        const reader = new FileReader()
        reader.onload = () => {
            const binaryStr = reader.result
            setValue('img_upload_base64', binaryStr)
            dispatch(setbase64({ img_upload_base64: binaryStr }))
        }
        reader.readAsDataURL(File)
    }


    const onDrop = useCallback((acceptedFile: any): void => {
        if (!acceptedFile || 0 >= acceptedFile.length) {
            return;
        }

        if (acceptedFile) {

            if (acceptedFile[0].size >= 10485760) {
                toast.error('ファイルサイズが大きすぎます。')
                dispatch(resetImages())

                // 画像データが2MB以上の場合
            } else if (acceptedFile[0].size >= 2097152) {
                toast.error('ファイルサイズが大きすぎる為、圧縮を行います。')

                new Compressor(acceptedFile[0], {
                    quality: 0.8,
                    convertSize: 2097152,
                    success(result) {
                        convertBase64(result)
                    },
                    error(err) {
                        toast.error('ファイル圧縮に失敗しました。')
                    },
                })
            } else {
                convertBase64(acceptedFile[0])
            }
        }
    }, [])

    useEffect(() => {
        setValue('image_path', props.image_path ? props.image_path : '')
        setValue('image_name', props.image_name ? props.image_name : '')
    }, [props])

    const changeImageHandler = (e: React.MouseEvent<HTMLElement>) => {
        dispatch(resetImages())
    }

    const { getRootProps, getInputProps } = useDropzone({
        maxFiles: 1,
        accept: {
            'image/jpeg': [],
            'image/png': []
        },
        onDrop
    })

    // todo edit画面で得られた画像が本当に存在するかチェックも入れたい
    if (props.img_upload_base64 !== '') {
        IconImage = props.img_upload_base64
    } else if (props.img_upload_base64 === ''
        && (props.image_path === ''
            && props.image_name === '')) {
        IconImage = props.image_path + props.image_name
    }
    

    if ((props.image_path && props.image_name) || props.img_upload_base64) {
        section = <ViewProfileIcon
            changeImage={changeImageHandler}
            viewIcon={IconImage}
        />
    } else {
        section = <InputImgFile
            getRootProps={getRootProps}
            getInputProps={getInputProps}
        />
    }

    return (
        <div className="m-charCharactorIcon">
            <div className="m-ProfileIcon" >
                {section}
                <input type="hidden" {...register( 'img_upload_base64' )} />
            </div>
        </div>
    )
}

export default ProfileIcon