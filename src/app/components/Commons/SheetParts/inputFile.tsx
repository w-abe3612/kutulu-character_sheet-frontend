import React, { useEffect, useState } from 'react'
import { inputTextInfoPropsType } from '../../../type'
import { useFormContext,useController } from "react-hook-form";

type Props = inputTextInfoPropsType

const convertBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader()
        fileReader.readAsDataURL(file)
        fileReader.onload = () => {
            resolve(fileReader.result)
        }
        fileReader.onerror = (error) => {
            reject(error)
        }
    })
}



const InputImgFile: React.FC<Props> = ( props ): JSX.Element => {
    const { register, formState,setValue,getValues } = useFormContext();
    //const inputRef = useRef<HTMLInputElement>(null);
    const onChangehandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = event.target;
        if(files) {
            const base64:any = await convertBase64(files![0])
            //const src = base64.replace(/^data:\w+\/\w+;base64,/, '')
            setValue(props.name,base64 )
        }
    };

    return (
        <div className="m-inputImgFile">
            <div className={`input-group ${ props.setClass && props.setClass }`} >
                <label className="input-title">{props.label}</label>
                <div className="input-content" >
                    <input
                        type="file"
                        className="input-file"
                        accept="image/*"
                        onChange={(e) => onChangehandler(e)}
                    />
                    <input
                        type="hidden"
                        {...register(props.name)}
                    />
                </div>
            </div>

        </div>
    )
}

export default InputImgFile

/*
<input
        {...props}
        type="file"
        onChange={onInputChange}
        ref={mergeRefs([ref, inputRef])}
      />
*/