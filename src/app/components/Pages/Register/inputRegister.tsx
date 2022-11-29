import React from 'react'
import { useForm, FormProvider } from "react-hook-form";
import { useAppSelector, useAppDispatch } from '../../../reducers/hooks'
import {
    useNavigate,
    Link,
} from "react-router-dom";
import { setFormState, setrRegisterInputs } from '../../../reducers/registerSlice';
import InputText from '../../Commons/SystemUseParts/inputText';
import InputPassword from '../../Commons/SystemUseParts/inputPassword'
import { statesType, registerStatesType, systemStateType } from '../../../config/type'
import NormalWrap from '../../Commons/Layout/normalSectionWrap'
import { SystemUseSubmitButton } from '../../Commons/SystemUseParts/submitButton'

const InputRegister: React.FC = () => {
    const dispatch = useAppDispatch()
    const systemState: systemStateType = useAppSelector((state: statesType) => state.systemState)
    const registerState: registerStatesType = useAppSelector((state: statesType) => state.registerState)

    const navigate = useNavigate();
    dispatch(setFormState({ formState: 'input' }))

    const methods= useForm();

    // todo 一旦後回し
    const onSubmit = (data: any) => {

        dispatch(setFormState({ formState: 'confirm' }))
        dispatch(setrRegisterInputs({
            username: data.username,
            email: data.email,
            password: data.password,
            confirmation: data.confirmation
        }))

        return navigate("/register/confirm")
    }

    return (
        <NormalWrap
            title='新規ユーザー登録'
            setClass='is-register-page'
        >
            <FormProvider {...methods} >
                <form autoComplete="off" onSubmit={methods.handleSubmit(onSubmit)}>
                    <InputText
                        label="ユーザーネーム"
                        name="username"
                        setClass=''
                        default={registerState.username}
                        required={{
                            required: '「ユーザーネーム」は必須です。',
                            maxLength: {
                                value: 254,
                                message: '254文字以下で入力してください。'
                            }
                        }}
                    />
                    <InputText
                        label="メールアドレス"
                        name="email"
                        setClass=''
                        default={registerState.email}
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
                        default={registerState.password}
                        required={{
                            required: '「パスワード」は必須です。',
                            maxLength: {
                                value: 254,
                                message: '254文字以下で入力してください。'
                            },
                            minLength: {
                                value: 8,
                                message: '8文字以上で入力してください。'
                            },
                            pattern: {
                                value: /[A-Za-z0-9]/,
                                message: '半角英数字で入力してください。'
                            }
                        }}
                    />
                    <InputPassword
                        label="パスワード再入力"
                        name="confirmation"
                        setClass=''
                        default={registerState.confirmation}
                        required={{
                            required: '「パスワード再入力」は必須です。',
                            maxLength: {
                                value: 254,
                                message: '254文字以下で入力してください。'
                            },
                            minLength: {
                                value: 8,
                                message: '8文字以上で入力してください。'
                            },
                            pattern: {
                                value: /[A-Za-z0-9]/,
                                message: '半角英数字で入力してください。'
                            },
                            validate: (val: string) => {
                                if (methods.watch('password') != val) {
                                    return "同じパスワードを入力してください。"
                                }
                            }
                        }}
                    />

                    <div className="register-description">
                        <p>登録することで、<Link className="" to={'/policy'} target="_blank" rel="noopener noreferrer" >利用規約、プライバシーポリシー</Link>、に同意するものとします。</p>
                    </div>
                    <SystemUseSubmitButton
                        text="確認"
                    />
                </form>
            </FormProvider>
        </NormalWrap>
    )
}

export default InputRegister;