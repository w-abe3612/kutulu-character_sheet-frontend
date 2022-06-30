import React, { useEffect } from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    RouteProps,
    useLocation
} from "react-router-dom";
import Character from './Character'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import ForgetPassword from './ForgetPassword'
import Dashboard from './Dashboard'
import CharacterEdit from './CharacterEdit'
import CharacterView from './CharacterView'
import UserConfig from './UserConfig'
import NotFoundPage from './NotFoundPage'
import Header from './Header'

import axios from 'axios'

const Router = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Routes>
                    
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/register" element={<ForgetPassword />} />
                    <Route path="/user/:userId" element={<Dashboard />} />
                    <Route path="/user/:userId/create" element={<Character />} />
                    <Route path="/user/:userId/edit/:charactorId" element={<CharacterEdit />} />
                    <Route path="/user/:userId/view/:charactorId" element={<CharacterView />} />
                    <Route path="/user/:userId/config" element={<UserConfig />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default Router