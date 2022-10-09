import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppSelector, useAppDispatch } from '../../reducers/hooks'
import {
    useNavigate
} from "react-router-dom";
import { setFormState, setrRegisterInputs } from '../../reducers/registerSlice';
import { systemStateType} from '../../reducers/types';
import InputText from '../Commons/inputText';
import ConfirmRegister from './confirmRegister';


interface registerStatesType {
    username:string,
    email:string,
    password:string,
    confirmation:string
}

interface rT {
    label:string
    register:any
}

const InputRegister: React.VFC = () => {
    const dispatch = useAppDispatch()
    const systemState: systemStateType = useAppSelector((state: any) => state.systemState)
    const registerState:registerStatesType = useAppSelector((state: any) => state.registerState)
    const [ username, setUsername ]         = useState('')
    const [ email, setEmail ]               = useState('')
    const [ password, setPassword ]         = useState('')
    const [ confirmation, setConfirmation ] = useState('')

    const navigate = useNavigate();
    // 初期化
    dispatch(setFormState({formState:'input'}))

    const handleConfirm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(setFormState({formState:'confirm'}))
        dispatch(setrRegisterInputs({
            username:username,
            email:email,
            password:password,
            confirmation:confirmation
        }))

        // フロントエンドバリテーションを用意する
        return navigate("/register/confirm")
    }
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data:any) => {
        console.log(errors )
      };
    const handleInputEmail = ( e: React.ChangeEvent<HTMLInputElement> ) => {
        e.preventDefault()
        setEmail(e.target.value)
    }

    const handleInputPassword = ( e: React.ChangeEvent<HTMLInputElement> ) => {
        e.preventDefault()
        setPassword(e.target.value)
    }

    const handleInputName = ( e: React.ChangeEvent<HTMLInputElement> ) => {
        e.preventDefault()
        setUsername(e.target.value)
    }

    const handleInputConfirmation = ( e: React.ChangeEvent<HTMLInputElement> ) => {
        e.preventDefault()
        setConfirmation(e.target.value)
    }
/*
    const Input = ({ label, register }:rT) => (
        <>
          <label>{label}</label>
          <input {...register(label, { required: '必須項目です', })} />
        </>
      );
*/
    const Input =({label,name,required}:{label:string,name:string,required:any}) => (
        <div className="input-group">
        <label>{label}</label>
        <input
            type="text"
            className="input"
            {...register(name, { required })}
        />
    </div>
    );
    return (
        <div className="m-login">
            <div className="m-login__inner">
                <h2 className="m-section_title">新規ユーザー登録</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input label="ユーザーネーム" reg={register( 'username',{required:'test'})} />


                    <div>
                        <p></p>
                    </div>
                    <button type="submit" className="btn">登録</button>
                </form>
            </div>
        </div>
    )
}

export default InputRegister;