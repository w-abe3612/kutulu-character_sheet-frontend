import React, { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../../reducers/hooks'

interface inputPropsType {
    label:string
    name:string
    register:any
    required:any
    error:any
}

type Props = inputPropsType


const InputText: React.FC<Props> = ( props ):JSX.Element => (
    <div className="input-group">
    <label>{props.label}</label>
    {console.log(typeof props.register)}
        <input
            type="text"
            className="input"
            {...props.register( props.name, props.required  )}
        />
        {props.error && <span>{props.error.message}</span>}
    </div>
)

export default InputText