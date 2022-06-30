import React, { useEffect, useState } from 'react'
import { useLogin , useLogout} from "../../queries/AuthQuery"
import { useAppSelector, useAppDispatch } from '../../reducers/hooks'
import {
    Navigate,
    useLocation
} from "react-router-dom";
import { setLoggedIn } from '../../reducers/systemStateSlice';
import { systemStateType } from '../../reducers/types';


const Login: React.VFC = () => {
    const login = useLogin()
    const logout = useLogout()
    const dispatch = useAppDispatch()
    const [ email, setEmail ]       = useState('admin@test.com')
    const [ password, setPassword ] = useState('123456789')

    let systemState: systemStateType = useAppSelector((state: any) => state.systemState)
    
    /*
    useEffect(() => {
        let setstate = {
            isPage:'login'
        }
    })*/

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        login.mutate({ email, password })


    }

    const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        logout.mutate()


    }

    return (
        <div className="m-login">
            { systemState.isLoggedIn === true && (
                <Navigate to={"/user/" + systemState.userId } replace={true} />
            )}
            <div className="m-login__inner">
                <h2 className="m-section_title">ログイン</h2>
                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <label>メールアドレス</label>
                        <input
                            type="email"
                            className="input"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label>パスワード</label>
                        <input
                            type="password"
                            className="input"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
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