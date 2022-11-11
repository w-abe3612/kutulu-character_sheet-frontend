import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket, faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { useAppSelector } from '../../../reducers/hooks'
import type { systemStateType, statesType } from '../../../config/type'

const MainBar: React.FC = (): JSX.Element => {
    let result: JSX.Element = <></>
    const systemState: systemStateType = useAppSelector((state: statesType) => state.systemState)
    console.log(systemState)

    if (systemState.userId !== null
        && systemState.userName !== ''
        && systemState.public_page_token !== '') {
        result = (
            <div className="m-login-user">{ systemState.userName } <span>さん</span></div>
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
    return ( result )
}
export default MainBar;

/*
const a: any = (systemState: systemStateType): void => {
    console.log(systemState)
    //undefined パターンがある
    let result: any = <></>
    if ( systemState.userId !== null  
        && systemState.userName !== '' 
        && systemState.public_page_token !== '' ) {

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
*/

