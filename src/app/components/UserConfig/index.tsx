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

const UserConfig: React.FC = ( props ) => {

// ここで分岐させる

    return (
        <SectionWrap title="ユーザー情報設定画面">
            <PreferenceList />
        </SectionWrap>
    )
}

export default UserConfig;