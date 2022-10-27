import React, { useEffect, useState,useCallback } from 'react'
import { inputTextInfoPropsType } from '../../../type'
import { useFormContext,useController } from "react-hook-form";
import {useDropzone} from 'react-dropzone'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark,faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'

type Props = inputTextInfoPropsType



const ViewProfileIcon:React.FC = () :JSX.Element => {
    const resetIcon = (e:React.MouseEvent<HTMLElement>) => {
        console.log('test')
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

const InputImgFile: React.FC = (): JSX.Element => {
    const { register, formState,setValue } = useFormContext();
    const onDrop =  useCallback( (acceptedFiles:any) => {
        if ( acceptedFiles ) {
            const reader = new FileReader()
            reader.onload = () => {
            const binaryStr = reader.result
            //setValue('img_upload_base64',binaryStr)
        }
        reader.readAsDataURL(acceptedFiles![0])
        }
    }, [])
    
    const {getRootProps, getInputProps} = useDropzone({onDrop})

    return (
        <div className="m-inputImgFile" >
            <div {...getRootProps({
                className:'input-dropzone'
            })}>
                <input {...getInputProps()} />
                <FontAwesomeIcon 
                    className="m-faCloudArrowUp"
                    icon={ faCloudArrowUp } 
                />
                <p className="input-description" >Drop file here</p>
            </div>
      </div>
    )
}



const ProfileIcon:React.FC<Props> = ( props ) : JSX.Element => {
    let section:any
    // 
    if ( true ) {
        section = <ViewProfileIcon />
    } else {
        section = <InputImgFile />
    }

    return (
        <div className="m-ProfileIcon" >
            { section }
        </div>
    )
}

export default ProfileIcon