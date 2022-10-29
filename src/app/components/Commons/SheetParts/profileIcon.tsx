import React, { useEffect, useState,useCallback } from 'react'
import { useFormContext,useController } from "react-hook-form";
import {useDropzone} from 'react-dropzone'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark,faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'
import { useAppDispatch } from 'app/reducers/hooks';
import {deleteImages,setbase64} from '../../../reducers/characterInfosSlice'


const ViewProfileIcon:React.FC<any> = (props) :JSX.Element => {
    const resetIcon = (e:React.MouseEvent<HTMLElement>) => {
        props.changeImage()
    }

    return (
        <div className="m-viewProfileIcon">
            <figure className="image-inner" >
                <img 
                    className="image-img"
                    src="https://img.game8.jp/5753768/888b9fbc031bb1254039ad2e925c1109.png/show" alt="" />
            </figure>
            <button 
                type="button"
                className="m-deleteIcon"
                onClick={ resetIcon }
            >
                <FontAwesomeIcon 
                    icon={ faXmark } 
                    className="m-faXmark"
                />
            </button>
        </div>
    )
}

const InputImgFile: React.FC<any> = (props): JSX.Element => {

    return (
        <div className="m-inputImgFile" >
            <div {...props.getRootProps({
                className:'input-dropzone'
            })}>
                <input {...props.getInputProps()} />
                <FontAwesomeIcon 
                    className="m-faCloudArrowUp"
                    icon={ faCloudArrowUp } 
                />
                <p className="input-description" >Drop file here</p>
            </div>
      </div>
    )
}

interface isssss{
    image_path:string
    image_name:string
    img_upload_base64:string
}

type Props = isssss

const ProfileIcon:React.FC<Props> = ( props ) : JSX.Element => {
    const dispatch = useAppDispatch()
    const { register, formState,setValue } = useFormContext();
    const onDrop =  useCallback( (acceptedFiles:any) => {
        if ( acceptedFiles ) {
            const reader = new FileReader()
            reader.onload = () => {
                const binaryStr = reader.result
                setValue('img_upload_base64',binaryStr)
                dispatch(setbase64({img_upload_base64:binaryStr}))
            }
        reader.readAsDataURL(acceptedFiles![0])
        }
    }, [])


    useEffect(()=>{
        setValue('image_path',props.image_path ?props.image_path:'' )
        setValue('image_name',props.image_name ? props.image_name:'')
    },[props])

    const changeImageHandler = (e:React.MouseEvent<HTMLElement>) => {
        dispatch(deleteImages())
    }

    
    const {getRootProps, getInputProps} = useDropzone({onDrop})

    let section:any

    // 入力済の画像の存在もしくは入力したbase64
    if ( ( props.image_path && props.image_name ) || props.img_upload_base64 ) {
        section = <ViewProfileIcon 
            changeImage = {changeImageHandler}
        />
    } else {
        section = <InputImgFile 
            getRootProps = {getRootProps}
            getInputProps = {getInputProps}
        />
    }

    return (
        <div className="m-charCharactorIcon">
            <div className="m-ProfileIcon" >
                { section }
                <input type="hidden" />
                <input type="hidden" />
                <input type="hidden" />
            </div>
        </div>
    )
}

export default ProfileIcon