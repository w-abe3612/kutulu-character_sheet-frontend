import React from 'react';
import { Link } from "react-router-dom";
import { useAppSelector } from '../../../reducers/hooks'
import type { systemStateType, statesType } from '../../../config/type'

const SideMenu: React.FC = () => {
    let result: JSX.Element = <></>
    const systemState: systemStateType = useAppSelector((state: statesType) => state.systemState)

    if (systemState.userId !== null
        && systemState.userName !== ''
        && systemState.public_page_token !== '') {

        result = (
            <div
                className="m-toggle_menu"
            >
                <div className="m-toggle_menu__inner">
                    <p className="m-user"><p>ようこそ</p>{ systemState.userName } <span>さん</span></p>
                    <nav className="m-nav">
                        <ul className="m-menu">
                            <li><Link to="/">トップへ戻る</Link></li>
                            <li ><Link to={'/user/' + systemState.userId + '/kutulu/'} >ダッシュボード</Link></li>
                            <li ><Link to={'/user/' + systemState.userId + '/kutulu/create/'} >新規作成</Link></li>
                            <li id="logout">Logout</li>
                        </ul>
                    </nav>

                </div>
            </div>

        )
    }

    return ( result )
}

export default SideMenu;
