import React, { useEffect, useState } from 'react'
import { inputTextInfoPropsType } from '../../../type'
import { useFormContext } from "react-hook-form";

type Props = inputTextInfoPropsType

const InputTextInfo: React.FC<Props> = ( props ): JSX.Element => {
    const { register, formState } = useFormContext();
    const errorMessage:any = formState.errors[props.name]?.message ? formState.errors[props.name]?.message : '';

    return (
        <div className="m-inputTextInfo">
            <div className={`input-group ${ props.setClass && props.setClass }`} >
                <label className="input-title">{props.label}</label>
                <div className="input-content" >
                    <input
                        type="text"
                        className="input-text"
                        {...register(props.name, props.required)}
                    />
                </div>
            </div>
            { errorMessage && <span className="error-message" >{ errorMessage }</span>}
        </div>
    )
}

export default InputTextInfo