import React, { useEffect } from 'react';
import {
    useNavigate
} from "react-router-dom";
import { useAppSelector, useAppDispatch } from '../../../reducers/hooks'
import { setFormState, clearRegisterInputs } from '../../../reducers/registerSlice';
import { useRegister } from "../../../queries/RegisterQuery"
import { registerStatesType, statesType } from '../../../config/type'
import NormalWrap from '../../Commons/Layout/normalSectionWrap'
import { useReCaptcha } from '../../../config/reCaptcha'

const CompleteRegister: React.FC = () => {
    const recaptcha = useReCaptcha();
    const dispatch = useAppDispatch()
    const registerState: registerStatesType = useAppSelector((state: statesType) => state.registerState)
    const navigate = useNavigate();
    const register = useRegister()

    useEffect(() => {
        recaptcha.execute({ action: "submit" }).then((reCaptureToken) => {
            register.mutate(
                {
                    name: registerState.username,
                    email: registerState.email,
                    password: registerState.password,
                    password_confirmation: registerState.confirmation,
                    reCaptureToken:reCaptureToken
                }
            )
        })

        setTimeout(() => {
            dispatch(setFormState({ formState: 'input' }))
            dispatch(clearRegisterInputs())
            navigate("/")
        }, 5000)
    }, [0])

    return (
        <NormalWrap
            title="ご登録ありがとうございます"
            setClass='is-thanks-complete'
        >
            <div className="inner-text">
                <p className="text">ご登録ありがとうございます。</p>
                <p className="text">まだ、仮登録となっております、メールにて登録ページの案内がございますので、そのリンクを踏んでいただき初めて完了となります。</p>
            </div>
        </NormalWrap>
    )
}

export default CompleteRegister;