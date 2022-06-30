import React from 'react';

import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from '../../reducers/hooks'


const Header: React.FC = () => {

    return (
        <div className='m-header' >
            <div className="m-header__inner">
                <div className="m-inner-top">
                    <div className="m-header-logo">
                        <Link to="/"><img /></Link>
                    </div>
                    <ul className="m-menu">
                        {/*
                            ログイン前
                        */}
                        <li className="m-register"><Link to="/register">新規登録</Link></li>
                        <li className="m-login"><Link to="/login">ログイン</Link></li>
                    </ul>
                </div>
                <div className="m-inner-bottom">
                    <ul className="m-">
                        <li><Link to="/">トップへ戻る</Link></li>
                        <li ><Link to="/">ダッシュボード</Link></li>
                        <li ><Link to="/">新規作成</Link></li>
                    </ul>

                    <div>
                        <div><Link to="/">トップへ戻る</Link></div>
                        <div><Link to="/">トップへ戻る</Link></div>
                    </div>
                </div>
                <div className="">
                    {/*
                        viewモード時
                    */}
                </div>
                <div className="">
                    {/*
                        sp時
                    */}
                </div>
            </div>
        </div>
    )
}

export default Header;


