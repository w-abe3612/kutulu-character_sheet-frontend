import React, { useEffect } from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import { CharacterCreate, CharacterEdit } from './Pages/Character'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Dashboard from './Pages/Dashboard'
import CharacterView from './Pages/CharacterView'
import UserConfig from './Pages/UserConfig'
import NotFoundPage from './Pages/NotFoundPage'
import RedirectOnLogout from './Commons/redirectOnLogout'
import PrivacyPolicy from './Pages/privacyPolicy'


const Router = () => {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="register" >
                        <Route index element={<Register urlNest="input" />} />
                        <Route path="verify" element={<Register urlNest="verify" />} />
                        <Route path="confirm" >
                            <Route index element={<Register urlNest="confirm" />} />
                            <Route path="complete" element={<Register urlNest="complete" />} />
                        </Route>
                    </Route>
                    <Route path="user">
                        <Route path=":id" >
                            <Route path="kutulu" element={<RedirectOnLogout children={<Dashboard />} />} />
                            <Route path="kutulu"  >
                                <Route path="config" element={<RedirectOnLogout children={<UserConfig />} />} />
                                <Route path="create" element={<RedirectOnLogout children={<CharacterCreate />} />} />
                                <Route path="edit" >
                                    <Route path=":charactorId" element={<RedirectOnLogout children={<CharacterEdit />} />} />
                                </Route>
                            </Route>
                        </Route>
                        <Route path=":publicUserPageToken" >
                            <Route path="kutulu">
                                <Route path="view" >
                                    <Route path=":publicCharacterPageToken" element={<CharacterView />} />
                                </Route>
                            </Route>
                        </Route>
                    </Route>
                    <Route path="policy" element={<PrivacyPolicy/>} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
export default Router