import React from 'react';
import ReactDOM from 'react-dom';
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppSelector, useAppDispatch } from '../../reducers/hooks'
import {
    useNavigate
} from "react-router-dom";
import { registerStatesType } from '../../reducers/types';
import { setFormState, setrRegisterInputs,setVerifyFlg } from '../../reducers/registerSlice';
import { useRegister } from "../../queries/RegisterQuery"

const ConfirmRegister: React.VFC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    const register = useRegister()
    const registerState:registerStatesType = useAppSelector((state: any) => state.registerState)
    const { handleSubmit, formState: { errors } } = useForm();
    const onSubmit = () => {
        register.mutate(
            { 
                name:registerState.username,
                email:registerState.email,
                password:registerState.password,
                password_confirmation:registerState.confirmation
            }
        )

        localStorage.setItem('test', 'test');
    }
/*
    const handleComplete = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(setFormState({formState:'complete'}))

        return navigate("/register/confirm/complete")
    }


    const onSubmit = (data:any) => {
        dispatch(setFormState({formState:'confirm'}))
        dispatch(setrRegisterInputs({
            username:data.username,
            email:data.email,
            password:data.password,
            confirmation:data.confirmation
        }))

        return navigate("/register/confirm")
    }*/

    const handleReInput = () => {
        dispatch(setFormState({formState:'input'}))

        return navigate("/register")
    }
    return (
        <div className="m-login">
        <div className="m-login__inner">
            <h2 className="m-section_title">新規ユーザー登録</h2>
            <div className="input-group">
                <label>ユーザーネーム</label>
                <div>{registerState.username}</div>
            </div>
            <div className="confirm-group">
                <label>メールアドレス</label>
                <div>{registerState.email}</div>
            </div>
            <div className="input-group">
                <label>パスワード</label>
                <div>{registerState.password}</div>
            </div>
            <div className="input-group">
                <label>パスワード再入力</label>
                <div>{registerState.confirmation}</div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <button type="button" value="reinput" className="btn" onClick={handleReInput} >戻る</button>
                <button type="submit" value="complete" className="btn">登録</button>
            </form>
        </div>
    </div>
    )
}

export default ConfirmRegister;