import React, { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../../reducers/hooks'

type Props = {
    label: string
    name: string
    register: any
    required: any
    error: any
}

const InputPassword: React.FC<Props> = (props): JSX.Element => (
    <div className="m-systemUseInputPassword" >
        <div className="input-group">
            <label className="input-label">{props.label}</label>
            <input
                type="password"
                className="input-password"
                {...props.register(props.name, props.required)}
            />
            {props.error && <span className="input-error">{props.error.message}</span>}
        </div>
    </div>
)

export default InputPassword