import React, { useEffect } from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    RouteProps
} from "react-router-dom";
import Character from './Character'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import Dashboard from './Dashboard'
import CharacterEdit from './CharacterEdit'
import CharacterView from './CharacterView'
import NotFoundPage from './NotFoundPage'



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
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/user/:userId" element={<Dashboard />} />
                <Route path="/user/:userId/create" element={<Character />} />
                <Route path="/user/:userId/edit/:charactorId" element={<CharacterEdit />} />
                <Route path="/user/:userId/view/:charactorId" element={<CharacterView />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router