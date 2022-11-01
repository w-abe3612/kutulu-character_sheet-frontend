import React, { useEffect, useState,useCallback } from 'react'
import { useFormContext,useController } from "react-hook-form";
import {useDropzone} from 'react-dropzone'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark,faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'
import { useAppDispatch } from 'app/reducers/hooks';
import {resetImages,setbase64} from '../../../reducers/characterInfosSlice'

type Props = {
    image_path:string
    image_name:string
    img_upload_base64:string
}

const ViewProfileIcon:React.FC<Props> = ( props ) : JSX.Element => {

    return (
        <div className="m-charCharactorIcon">
            <div className="m-ProfileIcon" >
            </div>
        </div>
    )
}

export default ViewProfileIcon

