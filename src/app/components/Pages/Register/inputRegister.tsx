import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppSelector, useAppDispatch } from '../../../reducers/hooks'
import {
    useNavigate
} from "react-router-dom";
import { setFormState, setrRegisterInputs } from '../../../reducers/registerSlice';
import InputText from '../../Commons/SystemUseParts/inputText';
import InputPassword from '../../Commons/SystemUseParts/inputPassword'
import { statesType,registerStatesType,systemStateType } from '../../../config/type'

const InputRegister: React.FC = () => {
    const dispatch = useAppDispatch()
    const systemState: systemStateType = useAppSelector((state:statesType) => state.systemState)
    const registerState:registerStatesType = useAppSelector((state:statesType) => state.registerState)

    const navigate = useNavigate();
    // 初期化
    dispatch(setFormState({formState:'input'}))

    const { register, watch, handleSubmit, formState: { errors } } = useForm();

    // todo 一旦後回し
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
                    <InputPassword
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
                    <InputPassword
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