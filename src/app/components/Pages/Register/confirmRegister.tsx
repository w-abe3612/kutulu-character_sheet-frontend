import React from 'react';
import ReactDOM from 'react-dom';
import { useForm } from "react-hook-form";
import { useAppSelector, useAppDispatch } from '../../../reducers/hooks'
import {
    useNavigate
} from "react-router-dom";
import { setFormState, setrRegisterInputs, setVerifyFlg } from '../../../reducers/registerSlice';
import { useRegister } from "../../../queries/RegisterQuery"
import { registerStatesType, statesType } from '../../../config/type'
import { SystemUseConfirmationButton } from '../../Commons/SystemUseParts/submitButton'
import ConfirmInputedText from '../../Commons/SystemUseParts/confirmInputedText'
import ConfirmInputedPassword from '../../Commons/SystemUseParts/confirmInputedPassword'
import NormalWrap from '../../Commons/Layout/normalSectionWrap'

const ConfirmRegister: React.VFC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    const register = useRegister()
    const registerState: registerStatesType = useAppSelector((state: statesType) => state.registerState)
    const { handleSubmit, formState: { errors } } = useForm();
    const onSubmit = () => {
        /*
        register.mutate(
            { 
                name:registerState.username,
                email:registerState.email,
                password:registerState.password,
                password_confirmation:registerState.confirmation
            }
        )*/

        dispatch(setFormState({ formState: 'complete' }))
        return navigate("/register/confirm/complete/")
    }

    const handleReInput = (e:React.MouseEvent<HTMLElement>) => {
        dispatch(setFormState({ formState: 'input' }))

        return navigate("/register")
    }
    return (
        <NormalWrap
            title="確認画面"
            setClass=''
        >
            <ConfirmInputedText
                label="ユーザーネーム"
                value={registerState.username}
            />
            <ConfirmInputedText
                label="メールアドレス"
                value={registerState.email}
            />
            <ConfirmInputedPassword
                label="パスワード"
                value={registerState.password}
            />
            <form onSubmit={handleSubmit(onSubmit)}>
                <SystemUseConfirmationButton
                    submitText="登録"
                    returnText="戻る"
                    handleReturn={ handleReInput }
                />
            </form>
        </NormalWrap>
    )
}

export default ConfirmRegister;