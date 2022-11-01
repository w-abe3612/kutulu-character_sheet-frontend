import React, { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../../reducers/hooks'

type Props = {
    label:string
    name:string
    register:any
    required:any
    error:any
}

const InputPassword: React.FC<Props> = ( props ):JSX.Element => (
    <div className="input-group">
    <label>{props.label}</label>
        <input
            type="password"
            className="input"
            {...props.register( props.name, props.required  )}
        />
        {props.error && <span>{props.error.message}</span>}
    </div>
)

export default InputPassword