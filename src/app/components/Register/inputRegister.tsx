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
    formState:string,
    verifyFlg:boolean,
    username:string,
    email:string,
    password:string,
    confirmation:string
}

const InputRegister: React.VFC = () => {
    const dispatch = useAppDispatch()
    const systemState: systemStateType = useAppSelector((state: any) => state.systemState)
    const registerState:registerStatesType = useAppSelector((state: any) => state.registerState)

    const navigate = useNavigate();
    // 初期化
    dispatch(setFormState({formState:'input'}))

    const { register, watch, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data:any) => {
        dispatch(setFormState({formState:'confirm'}))
        dispatch(setrRegisterInputs({
            username:data.username,
            email:data.email,
            password:data.password,
            confirmation:data.confirmation
        }))

        return navigate("/register/confirm")
    }

    return (
        <div className="m-login">
            <div className="m-login__inner">
                <h2 className="m-section_title">新規ユーザー登録</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <InputText 
                        label="ユーザーネーム" 
                        name="username" 
                        register={register} 
                        required={{
                            required:'「ユーザーネーム」は必須です。',
                            maxLength : {
                                value: 254,
                                message: '254文字以下で入力してください。'
                            }
                        }}
                        error={errors.username}
                    />
                    <InputText 
                        label="メールアドレス" 
                        name="email" 
                        register={register} 
                        required={{required:'「メールアドレス」は必須です。',
                        maxLength : {
                            value: 254,
                            message: '254文字以下で入力してください。'
                        },
                        pattern:{
                            value: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]{2,})*$/,
                            message: '「メールアドレス」のパターンではありません。'
                        }}}
                        error={errors.email}
                    />
                    <InputText 
                        label="パスワード" 
                        name="password" 
                        register={register} 
                        required={{required:'「パスワード」は必須です。',
                        maxLength : {
                            value: 254,
                            message: '254文字以下で入力してください。'
                        },
                        pattern:{
                            value: /[A-Za-z0-9]/,
                            message: '半角英数字で入力してください。'
                        }}}
                        error={errors.password}
                    />
                    <InputText 
                        label="パスワード再入力" 
                        name="confirmation" 
                        register={register} 
                        required={{required:'「パスワード再入力」は必須です。',
                        maxLength : {
                            value: 254,
                            message: '254文字以下で入力してください。'
                        },
                        pattern:{
                            value: /[A-Za-z0-9]/,
                            message: '半角英数字で入力してください。'
                        },
                        validate: (val: string) => {
                          if (watch('password') != val) {
                            return "同じパスワードを入力してください。"
                          }
                        }}}
                        error={errors.confirmation}
                    />
                    
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