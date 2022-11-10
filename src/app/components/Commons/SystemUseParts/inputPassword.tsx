import React, { useEffect,useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { useFormContext } from "react-hook-form";

type Props = {
    label: string
    name: string
    setClass: string
    default:string
    required: any
}

const InputPassword: React.FC<Props> = (props): JSX.Element => {
    const [viewPassword, setView] = useState(false);

    const handleView = (e:React.MouseEvent<HTMLElement>) => {
        e.preventDefault;
        setView(!viewPassword)
    }

    const { register, formState, setValue } = useFormContext();
    const errorMessage:any = formState.errors[props.name]?.message ? formState.errors[props.name]?.message : '';

    useEffect(()=> {
        setValue( props.name, props.default !== ''? props.default: '' )
    },[props])

    return (
        <div className="m-systemUseInputPassword" >
            <div className="input-group">
                <label className="input-label">{props.label}</label>
                <div className="input-wrap" >
                    <input
                        type={ viewPassword ?'text':'password' }
                        className="input-password"
                        { ...register(props.name, props.required)}
                    />
                    <button
                        className="password-view"
                        type="button"
                        onClick={(e)=>{handleView(e)}}
                        >
                        <FontAwesomeIcon icon={ viewPassword ? faEyeSlash: faEye }/>
                    </button>
                </div>
                { errorMessage && <span className="error-message" >{ errorMessage }</span>}
            </div>
        </div>)
}

export default InputPassword