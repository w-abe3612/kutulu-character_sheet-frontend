import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { useAppSelector } from '../../../reducers/hooks'
import type { systemStateType, statesType } from '../../../config/type'
import { useLogout } from "../../../queries/AuthQuery"
import HamburgerButton from './hamburgerButton'

const UnderBar: React.FC = (): JSX.Element => {
    let result: JSX.Element = <></>
    const systemState: systemStateType = useAppSelector((state: statesType) => state.systemState)
    const logout = useLogout()

    const logoutHandler = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault;
        logout.mutate()
    }

    const sidebarHandler = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault;
    }

    if ( systemState.userId !== null
        && systemState.userName !== ''
        && systemState.public_page_token !== '' ) {

        result = (
            <div className="m-inner-bottom">
                <nav className="m-inner-bottom__inner" >
                    <ul className="m-menu">
                        <li><Link to="/">トップへ戻る</Link></li>
                        <li ><Link to={'/user/' + systemState.userId + '/kutulu/'} >ダッシュボード</Link></li>
                        <li ><Link to={'/user/' + systemState.userId + '/kutulu/create'} >新規作成</Link></li>
                    </ul>

                    <div className="m-config-nav">
                        <button
                            className="m-logout-btn"
                            onClick={(e) => { logoutHandler(e) }} >
                            <FontAwesomeIcon icon={faArrowRightFromBracket} />
                        </button>
                    </div>
                    <HamburgerButton />
                </nav>
            </div>
        )
    }
    return ( result )
}

export default UnderBar;