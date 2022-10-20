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
import Dashboard from './Dashboard'
import CharacterEdit from './CharacterEdit'
import CharacterView from './CharacterView'
import UserConfig from './UserConfig'
import NotFoundPage from './NotFoundPage'
import Header from './Header'
import RedirectOnLogout from './Commons/redirectOnLogout'

import axios from 'axios'

/*
const Router = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="register" >
                        <Route index element={<Register urlNest="input" />} />
                        <Route path="verify" element={<Register  urlNest="verify" />} />
                        <Route path="confirm" >
                            <Route index element={<Register urlNest="confirm" />} />
                            <Route path="complete" element={<Register urlNest="complete"/>} />
                        </Route>
                    </Route>

                    <Route path="user">
                        <Route path=":id" element={<RedirectOnLogout children={<Dashboard />} />} />
                        <Route path=":id" >
                            <Route path="config" element={<RedirectOnLogout children={<UserConfig />} />} />
                            <Route path="create" element={<RedirectOnLogout children={<Character />} />} />
                            <Route path="edit" >
                                <Route path=":charactorId" element={<RedirectOnLogout children={<CharacterEdit />} />} />
                            </Route>
                            <Route path="view" >
                                <Route path=":charactorId" element={<CharacterView />} />
                            </Route>
                        </Route>
                    </Route>
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}*/

const Router = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="register" >
                        <Route index element={<Register urlNest="input" />} />
                        <Route path="verify" element={<Register  urlNest="verify" />} />
                        <Route path="confirm" >
                            <Route index element={<Register urlNest="confirm" />} />
                            <Route path="complete" element={<Register urlNest="complete"/>} />
                        </Route>
                    </Route>

                    <Route path="user">
                        <Route path=":id" element={<RedirectOnLogout children={<Dashboard />} />} />
                        <Route path=":id" >
                            <Route path="config" element={<RedirectOnLogout children={<UserConfig />} />} />
                            <Route path="create" element={<Character />} />
                            <Route path="view" >
                                <Route path=":charactorId" element={<CharacterView />} />
                            </Route>
                            <Route path="edit" >
                                <Route path=":charactorId" element={<RedirectOnLogout children={<CharacterEdit />} />} />
                            </Route>
                        </Route>
                    </Route>
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default Router