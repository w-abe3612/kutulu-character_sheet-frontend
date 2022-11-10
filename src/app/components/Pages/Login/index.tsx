import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { useLogin, useLogout } from "../../../queries/AuthQuery"
import { useAppSelector, useAppDispatch } from '../../../reducers/hooks'
import {
    Navigate,
    useLocation
} from "react-router-dom";
import { systemStateType, statesType } from '../../../config/type';
import InputText from '../../Commons/SystemUseParts/inputText';
import InputPassword from '../../Commons/SystemUseParts/inputPassword';
import { Header } from '../../Commons/Header'
import NormalWrap from '../../Commons/Layout/normalSectionWrap'
import { SystemUseSubmitButton } from '../../Commons/SystemUseParts/submitButton'


//todo 実際に運用フェーズに入ったら攻撃されるだろうから、rechapture入れる
const Login: React.FC = () => {
    const login = useLogin()

    let systemState: systemStateType = useAppSelector((state: statesType) => state.systemState)
    const { register, handleSubmit, formState: { errors } } = useForm();

    // todo エラーが出るので一旦確認
    const onSubmit = (data: any) => {
        login.mutate({ email: data.email, password: data.password })
    }

    return (
        <>
            <Header />
            {systemState.isLoggedIn === '1' && (
                <Navigate to={"/user/" + systemState.userId + '/kutulu/'} replace={true} />
            )}
            <NormalWrap  
                title="ログイン"
                setClass='is-login-page'
            >
                <form  autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                    <InputText
                        label="メールアドレス"
                        name="email"
                        register={register}
                        required={{
                            required: '「メールアドレス」は必須です。',
                            maxLength: {
                                value: 254,
                                message: '254文字以下で入力してください。'
                            },
                            pattern: {
                                value: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]{2,})*$/,
                                message: '「メールアドレス」のパターンではありません。'
                            }
                        }}
                        error={errors.email}
                    />
                    <InputPassword
                        label="パスワード"
                        name="password"
                        register={register}
                        required={{
                            required: '「パスワード」は必須です。',
                            maxLength: {
                                value: 254,
                                message: '254文字以下で入力してください。'
                            },
                            pattern: {
                                value: /[A-Za-z0-9]/,
                                message: '半角英数字で入力してください。'
                            }
                        }}
                        error={errors.password}
                    />
                    <SystemUseSubmitButton text="ログイン"/>
                </form>
            </NormalWrap>
        </>
    )
}

export default Login