import React, { useEffect, useState } from 'react';

import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from '../../../reducers/hooks'
import { systemStateType, statesType } from '../../../config/type';
import MainBar from './mainBar'
import UnderBar from './underBar'
import SideMenu from './sideMenu'


const Header: React.FC = () => {
    let headerClass = ''
    const systemState: systemStateType = useAppSelector((state: statesType) => state.systemState)
    const sidebarHandler = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault;
    }

    if ( systemState.userId !== null
        && systemState.userName !== ''
        && systemState.public_page_token !== '' ) {
            headerClass = 'm-header is-loggedin'
    } else {
        headerClass = 'm-header'
    }

    return (
        <header className={ headerClass } >
            <div className="m-header__inner">
                <div className="m-inner-top">
                    <div className="m-inner-top__inner">
                        <div className="m-header-logo">
                            <Link to="/"><img /></Link>
                        </div>
                        <MainBar />
                    </div>
                </div>
                <UnderBar />
            </div>
            <SideMenu/>
        </header>
    )
}

export default Header;

