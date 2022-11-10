import React, { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../../reducers/hooks'

interface inputPropsType {
    label: string
    name: string
    register: any
    required: any
    error: any
}

type Props = inputPropsType


const InputText: React.FC<Props> = (props): JSX.Element => (
    <div className="m-systemUseInputText" >
        <div className="input-group">
            <label className="input-label" >{props.label}</label>
            <div className="input-wrap" >
                <input
                    type="text"
                    className="input-text"
                    {...props.register(props.name, props.required)}
                />
            </div>
            {props.error && <span className="input-error">{props.error.message}</span>}
        </div>
    </div>
)

export default InputText