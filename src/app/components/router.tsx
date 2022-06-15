import React, { useEffect } from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    RouteProps
} from "react-router-dom";
import Character from './Character'


import axios from 'axios'

// react router 6 からSWITCHが動かない
// https://qiita.com/kyo212/items/c5810261b8a449f43bfa

const Router = () => {
/*
リダイレクト方法がv5とv6で違ってしまっている
↓ここら辺に書いてありあそう
https://gist.github.com/mjackson/b5748add2795ce7448a366ae8f8ae3bb
    const GuardRoute = (props: RouteProps) => {
        if (!isAuth) return () => { <Redirect to="/login" /> }
        return <Route {...props} />
    }
    const LoginRoute = (props: RouteProps) => {
        if (isAuth) return <Navigate to="/" />
        return <Route {...props} />
    }
*/

// 404ページの作り方なんもわからん
//多分下記で解決？
//https://reffect.co.jp/react/react-router-6
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<Character />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default Router