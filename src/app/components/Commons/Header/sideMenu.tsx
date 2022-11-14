import React from 'react';
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../../../reducers/hooks'
import type { systemStateType, statesType } from '../../../config/type'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { useLogout } from "../../../queries/AuthQuery"
import { setSidebarState } from '../../../reducers/navigationInfoSlice'

const SideMenu: React.FC = () => {
    let result: JSX.Element = <></>
    const dispatch = useAppDispatch()
    const systemState: systemStateType = useAppSelector((state: statesType) => state.systemState)
    const navigationInfo: any = useAppSelector((state: statesType) => state.navigationInfo)
    const logout = useLogout()

    const logoutHandler = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault;
        dispatch(setSidebarState())
        logout.mutate()
    }

    const sidebarHandler = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault
        dispatch(setSidebarState())
    }

    if (systemState.userId !== null
        && systemState.userName !== ''
        && systemState.public_page_token !== '') {

        result = (
            <div
                className="m-side-menu"
                data-open={navigationInfo.sidebarState}
            >
                <div className="menu-inner">
                    <p className="user-welcome"><p>ようこそ</p><span className="user-name">{systemState.userName}</span> <span>さん</span></p>
                    <nav className="link-navigation">
                        <ul className="navigation-menu">
                            <li className="left-triangle-btn">
                                <div className="paper-fold"></div>
                                <Link onClick={(e)=>{ sidebarHandler(e) }}
                                to="/">トップへ戻る</Link>
                            </li>
                            <li className="right-triangle-btn">
                                <Link onClick={(e)=>{ sidebarHandler(e) }}
                                to={'/user/' + systemState.userId + '/kutulu/'} >ダッシュボード</Link>
                            </li>
                            <li className="left-triangle-btn">
                                <div className="paper-fold"></div>
                                <Link onClick={(e)=>{ sidebarHandler(e) }}
                                to={'/user/' + systemState.userId + '/kutulu/create/'} >新規作成</Link>
                            </li>
                            <li className="is-logout">
                                <button
                                    className="side-logout-btn"
                                    onClick={(e) => { logoutHandler(e) }} >
                                    <FontAwesomeIcon icon={faArrowRightFromBracket} />
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

        )
    }

    return (result)
}

export default SideMenu;
