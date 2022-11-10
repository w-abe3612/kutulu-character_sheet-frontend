import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
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

    const { register, watch, handleSubmit, formState: { errors } } = useForm();

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
            <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                <InputText
                    label="ユーザーネーム"
                    name="username"
                    register={register}
                    required={{
                        required: '「ユーザーネーム」は必須です。',
                        maxLength: {
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
                        minLength: {
                            value: 8,
                            message: '8文字以上で入力してください。'
                        },
                        pattern: {
                            value: /[A-Za-z0-9]/,
                            message: '半角英数字で入力してください。'
                        }
                    }}
                    error={errors.password}
                />
                <InputPassword
                    label="パスワード再入力"
                    name="confirmation"
                    register={register}
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
                            if (watch('password') != val) {
                                return "同じパスワードを入力してください。"
                            }
                        }
                    }}
                    error={errors.confirmation}
                />

                <div className="register-description">
                    <p>登録することで、<Link className="" to={'/policy'}>利用規約、プライバシーポリシー</Link>、に同意するものとします。</p>
                </div>
                <SystemUseSubmitButton 
                    text="確認"
                />
            </form>
        </NormalWrap>
    )
}

export default InputRegister;