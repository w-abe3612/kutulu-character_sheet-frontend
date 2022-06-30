import React, { useState } from 'react'
import { useLogin , useLogout} from "../../queries/AuthQuery"
import {
    Navigate,
    useLocation
} from "react-router-dom";



const Login: React.VFC = () => {
    const login = useLogin()
    const logout = useLogout()
    const [ email, setEmail ]       = useState('admin@test.com')
    const [ password, setPassword ] = useState('123456789')



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
            <button onClick={handleLogout} className="btn">ログアウト</button>
        </div>
    )
}

export default Login