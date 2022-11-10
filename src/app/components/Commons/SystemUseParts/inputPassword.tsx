import React, { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../../reducers/hooks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons'

type Props = {
    label: string
    name: string
    register: any
    required: any
    error: any
}


const InputPassword: React.FC<Props> = (props): JSX.Element => {
    const [viewPassword, setView] = React.useState(false);

    const handleView = (e:React.MouseEvent<HTMLElement>) => {
        e.preventDefault;
        setView(!viewPassword)
    }

    return (
        <div className="m-systemUseInputPassword" >
            <div className="input-group">
                <label className="input-label">{props.label}</label>
                <div className="input-wrap" >
                    <input
                        type={ viewPassword ?'text':'password' }
                        className="input-password"
                        {...props.register(props.name, props.required)}
                    />
                    <button
                        className="password-view"
                        type="button"
                        onClick={(e)=>{handleView(e)}}
                        >
                        <FontAwesomeIcon icon={ viewPassword ? faEyeSlash: faEye }/>
                    </button>
                </div>
                {props.error && <span className="input-error">{props.error.message}</span>}
            </div>
        </div>)
}

export default InputPassword