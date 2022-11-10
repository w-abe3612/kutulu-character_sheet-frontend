import React, { useEffect, useState } from 'react'
import { useFormContext } from "react-hook-form";

type Props = {
    label: string
    name: string
    setClass: string
    default:string
    required: any
}

const InputText: React.FC<Props> = (props): JSX.Element => {

    const { register, formState, setValue } = useFormContext();
    const errorMessage:any = formState.errors[props.name]?.message ? formState.errors[props.name]?.message : '';

    useEffect(()=> {
        setValue( props.name, props.default !== ''? props.default: '' )
    },[props])

    return (
        <div className="m-systemUseInputText" >
            <div className="input-group">
                <label className="input-label" >{props.label}</label>
                <div className="input-wrap" >
                    <input
                        type="text"
                        className="input-text"
                        { ...register(props.name, props.required)}
                    />
                </div>
                { errorMessage && <span className="error-message" >{ errorMessage }</span>}
            </div>
        </div>
    )

}

export default InputText