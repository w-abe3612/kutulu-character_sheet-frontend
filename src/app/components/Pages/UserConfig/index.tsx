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
import SectionWrap from "../../Commons/Layout/sectionWrap"
import PreferenceList from "./preferenceList"
import Header from '../../Commons/Header'

const UserConfig: React.FC = ( props ) => {

    return (
        <>
            <Header />
            <SectionWrap title="プライバシー・ポリシー"
                    setClass=''
                    description=''>
                <PreferenceList />
            </SectionWrap>
        </>
    )
}

export default UserConfig;