import React, { useEffect, useState,useCallback } from 'react'
import { useFormContext,useController } from "react-hook-form";
import {useDropzone} from 'react-dropzone'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark,faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'
import { useAppDispatch } from 'app/reducers/hooks';
import {resetImages,setbase64} from '../../../reducers/characterInfosSlice'


type viewProps = {
    changeImage:any
    viewIcon:string
}

const ViewProfileIcon:React.FC<viewProps> = (props) :JSX.Element => {
    const resetIcon = (e:React.MouseEvent<HTMLElement>) => {
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

type inputProps = {
    getRootProps:any
    getInputProps:any
}

const InputImgFile: React.FC<inputProps> = (props): JSX.Element => {

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


type mainProps = {
    image_path:string
    image_name:string
    img_upload_base64:string
}

const ProfileIcon:React.FC<mainProps> = ( props ) : JSX.Element => {
    let section:JSX.Element
    let IconImage:string

    const dispatch = useAppDispatch()
    const { register, formState, setValue } = useFormContext();
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

    useEffect(()=> {
        setValue('image_path',props.image_path ?props.image_path:'./img/' )
        setValue('image_name',props.image_name ? props.image_name:'dammyUser.png')
    },[props])

    const changeImageHandler = (e:React.MouseEvent<HTMLElement>) => {
        dispatch(resetImages())
    }

    // edit時の
    const {getRootProps, getInputProps} = useDropzone({onDrop})

    // todo edit画面で得られた画像が本当に存在するかチェックも入れたい
    if ( props.img_upload_base64 !== '' ) {
        IconImage = props.img_upload_base64
    } else if( props.img_upload_base64 === '' 
                && ( props.image_path === '' 
                    && props.image_name === '' ) ) {
        IconImage = props.image_path + props.image_name
    }

    if ( ( props.image_path && props.image_name ) || props.img_upload_base64 ) {
        section = <ViewProfileIcon 
            changeImage = {changeImageHandler}
            viewIcon = {props.img_upload_base64}
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