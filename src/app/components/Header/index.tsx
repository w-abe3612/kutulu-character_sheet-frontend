import React,{useEffect, useState} from 'react';

import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from '../../reducers/hooks'
import { systemStateType } from '../../type/';
import { useLogout } from "../../queries/AuthQuery"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faArrowRightFromBracket, faArrowRightToBracket, faAddressCard } from '@fortawesome/free-solid-svg-icons'
//todo webpackでコンパイルしている為か、公式のチュートリアルの方法でBabel Macrosが動かない

const Header: React.FC = () => {
    let systemState: systemStateType = useAppSelector((state: any) => state.systemState)
    const [toggleFlg, setToggleFlg] = useState(false)
let ae = systemState.isLoggedIn
    const fonc: any = (e: React.MouseEvent<HTMLInputElement>):void => {
        e.preventDefault()

        toggleFlg
        setToggleFlg(!toggleFlg )
    }

    const a: any = (systemState: systemStateType): void => {
        let result: any = <></>
        if (ae === '1') {
            result = (
                <div className="m-login-user">{systemState.userName} <span>さん</span></div>
            )
        } else {
            result = (
                <ul className="m-menu">
                    <li className="m-register-btn">
                        <Link className="is-se" to="/register"><FontAwesomeIcon icon={faAddressCard} /></Link>
                        <Link className="is-def" to="/register">新規登録</Link>
                    </li>
                    <li className="m-login-btn">
                        <Link className="is-se" to="/login"><FontAwesomeIcon icon={faArrowRightToBracket} /></Link>
                        <Link className="is-def" to="/login">ログイン</Link>
                    </li>
                </ul>
            )
        }

        return (result)
    }

    const b: any = (systemState: systemStateType): void => {
        let result: any = <></>

        const logout = useLogout()
        const handleLogout = (e: React.MouseEvent<HTMLElement>) => {
            e.preventDefault()
            logout.mutate()
        }

        if (systemState.isLoggedIn === '1') {
            result = (
                <div className="m-inner-bottom">
                    <nav className="m-inner-bottom__inner" >
                        <ul className="m-menu">
                            <li><Link to="/">トップへ戻る</Link></li>
                            <li ><Link to={'/user/' + systemState.userId} >ダッシュボード</Link></li>
                            <li ><Link to={'/user/' + systemState.userId + '/create'} >新規作成</Link></li>
                        </ul>

                        <div className="m-config-nav">
                            <div className="m-config-btn" ><Link to={"/user/" + systemState.userId + "/config"}><FontAwesomeIcon icon={faGear} />ユーザー設定</Link></div>
                            <button
                                className="m-logout-btn"
                                onClick={handleLogout} >
                                <FontAwesomeIcon icon={faArrowRightFromBracket} />
                            </button>
                        </div>
                        {
                            /*
                                sp時に表示される
                            */
                        }
                        <button
                            className="m-content__hamburger_btn"
                            type="button"
                            data-toggle={toggleFlg}
                            onClick={fonc}
                        >
                            <div data-position="top" ></div>
                            <div data-position="mid" ></div>
                            <div data-position="bottom" ></div>
                        </button>
                    </nav>
                </div>
            )
        }
        return (result)
    }

    const c: any = (systemState: systemStateType): void => {
        let result: any = <></>
        if (systemState.isLoggedIn === '1') {
            result = (
                <div
                    className="m-toggle_menu"
                    data-toggle={toggleFlg}
                >
                    <div className="m-toggle_menu__inner">
                        <p className="m-user">Hello, Tyler McGinnis</p>
                        <nav className="m-nav">
                            <ul className="m-menu">
                                <li><Link to="/">トップへ戻る</Link></li>
                                <li ><Link to={'/user/' + systemState.userId} >ダッシュボード</Link></li>
                                <li ><Link to={'/user/' + systemState.userId + '/create'} >新規作成</Link></li>
                                <li id="logout">Logout</li>
                            </ul>
                        </nav>

                    </div>
                </div>
            )
        }
        return (result)
    }

    return (
        <>
            <div className='m-header' >
                <div className="m-header__inner">
                    <div className="m-inner-top">
                        <div className="m-inner-top__inner">
                            <div className="m-header-logo">
                                <Link to="/"><img /></Link>
                            </div>
                            {a(systemState)}
                        </div>
                    </div>
                    {b(systemState)}
                </div>
            </div>
            {c(systemState)}
        </>
    )
}

export default Header;


