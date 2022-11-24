import React, { useEffect, useState } from 'react';

import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from '../../../reducers/hooks'
import { systemStateType } from '../../../config/type';
import MainBar from './mainBar'
import UnderBar from './underBar'
import SideMenu from './sideMenu'


const Header: React.FC = () => {
    const sidebarHandler = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault;
    }

    return (
        <header className='m-header' >
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

