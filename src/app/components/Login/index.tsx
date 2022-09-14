import React, { useEffect, useState } from 'react'
import { useLogin , useLogout} from "../../queries/AuthQuery"
import { useAppSelector, useAppDispatch } from '../../reducers/hooks'
import {
    Navigate,
    useLocation
} from "react-router-dom";
import { setLoggedIn } from '../../reducers/systemStateSlice';
import { systemStateType } from '../../reducers/types';
import InputText from '../Commons/inputText';

const Login: React.VFC = () => {
    const login = useLogin()
    const logout = useLogout()
    const dispatch = useAppDispatch()
    const [ email, setEmail ]       = useState('admin@test.com')
    const [ password, setPassword ] = useState('123456789')

    let systemState: systemStateType = useAppSelector((state: any) => state.systemState)

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        login.mutate({ email, password })
    }

    const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        logout.mutate()
    }

    const handleInputEmail = ( e: React.ChangeEvent<HTMLInputElement> ) => {
        e.preventDefault()
        setEmail(e.target.value)
    }

    const handleInputPassword = ( e: React.ChangeEvent<HTMLInputElement> ) => {
        e.preventDefault()
        setPassword(e.target.value)
    }

    return (
        <div className="m-login">
            { systemState.isLoggedIn === true && (
                <Navigate to={"/user/" + systemState.userId } replace={true} />
            )}
            <div className="m-login__inner">
                <h2 className="m-section_title">ログイン</h2>
                <form onSubmit={handleLogin}>
                    <InputText
                        label="メールアドレス"
                        name="email"
                        value={email}
                        default=""
                        onChange={(e)=>handleInputEmail(e)}
                    />

                    <InputText
                        label="パスワード"
                        name="password"
                        value={password}
                        default=""
                        onChange={(e)=>handleInputPassword(e)}
                    />

                    <div>
                        <p></p>
                    </div>
                    <button type="submit" className="btn">ログイン</button>
                </form>
            </div>
        </div>
    )
}

export default Login