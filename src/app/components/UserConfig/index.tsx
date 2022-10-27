import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    RouteProps,
    useLocation
} from "react-router-dom";
import SectionWrap from "../Commons/Layout/sectionWrap"
import PreferenceList from "./preferenceList"
import Header from '../Header'

const UserConfig: React.FC = ( props ) => {

// ここで分岐させる

    return (
        <>
            <Header />
            <SectionWrap title="ユーザー情報設定画面">
                <PreferenceList />
            </SectionWrap>
        </>
    )
}

export default UserConfig;