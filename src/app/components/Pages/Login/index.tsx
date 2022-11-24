import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler,FormProvider } from "react-hook-form";
import { useLogin, useLogout } from "../../../queries/AuthQuery"
import { useAppSelector, useAppDispatch } from '../../../reducers/hooks'
import {
    Navigate,
    useLocation
} from "react-router-dom";
import { systemStateType, statesType } from '../../../config/type';
import InputText from '../../Commons/SystemUseParts/inputText';
import InputPassword from '../../Commons/SystemUseParts/inputPassword';
import Header from '../../Commons/Header'
import NormalWrap from '../../Commons/Layout/normalSectionWrap'
import { SystemUseSubmitButton } from '../../Commons/SystemUseParts/submitButton'


//todo 実際に運用フェーズに入ったら攻撃されるだろうから、rechapture入れる
const Login: React.FC = () => {
    const [submitDisabled, setSubmitDisabled] = useState(false);
    const login = useLogin()

    let systemState: systemStateType = useAppSelector((state: statesType) => state.systemState)
    const methods = useForm();

    // todo エラーが出るので一旦確認
    const onSubmit = (data: any) => {
        setSubmitDisabled(true)
        login.mutate({ email: data.email, password: data.password })

        setTimeout(() => {
            setSubmitDisabled(false);
        }, 3000);
    }

    return (
        <>
            <Header />
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
        </>
    )
}

export default Login