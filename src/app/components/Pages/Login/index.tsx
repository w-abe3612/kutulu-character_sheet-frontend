import React, { useState, useEffect } from 'react'
import { useForm, FormProvider } from "react-hook-form";
import { useLogin } from "../../../queries/AuthQuery"
import { useAppSelector } from '../../../reducers/hooks'
import {
    Navigate
} from "react-router-dom";
import { systemStateType, statesType } from '../../../config/type';
import InputText from '../../Commons/SystemUseParts/inputText';
import InputPassword from '../../Commons/SystemUseParts/inputPassword';
import NormalWrap from '../../Commons/Layout/normalSectionWrap'
import { SystemUseSubmitButton } from '../../Commons/SystemUseParts/submitButton'
import MainLayout from '../../Commons/Layout/mainLayout'
import { useReCaptcha } from '../../../config/reCaptcha'

// todo submitボタンを一時停止する
const Login: React.FC = () => {
    const recaptcha = useReCaptcha();
    const [submitDisabled, setSubmitDisabled] = useState(false);
    const login = useLogin()

    useEffect(()=>{
        recaptcha.load();
    },[0])

    let systemState: systemStateType = useAppSelector((state: statesType) => state.systemState)
    const methods = useForm();

    const onSubmit = (data: any) => {
        setSubmitDisabled(true)
        recaptcha.execute({ action: "submit" }).then((token) => {
            login.mutate({ email: data.email, password: data.password, reCaptureToken:token })
        })

        setTimeout(() => {
            setSubmitDisabled(false);
        }, 3000);
    }

    return (
        <MainLayout setClass='' >
            { ( systemState.userId !== null  
                && systemState.userName !== '' 
                && systemState.public_page_token !== '' ) && (
                <Navigate to={"/user/" + systemState.userId + '/kutulu/'} replace={true} />
            )}
            <NormalWrap
                title="ログイン"
                setClass='is-login-page'
            >
                <FormProvider {...methods} >
                    <form autoComplete="off" onSubmit={methods.handleSubmit(onSubmit)}>
                        <InputText
                            label="メールアドレス"
                            name="email"
                            setClass=''
                            default=''
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
                        />
                        <InputPassword
                            label="パスワード"
                            name="password"
                            setClass=''
                            default=''
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
                        />
                        <SystemUseSubmitButton text="ログイン" />
                    </form>
                </FormProvider>
            </NormalWrap>
        </MainLayout>
    )
}

export default Login