import React from 'react';
import { Header } from '../../Commons/Header'
import NormalWrap from '../../Commons/Layout/normalSectionWrap'

const NotFoundPage: React.FC = () => {
    return (
        <div>
            <Header />
            <NormalWrap
                title="404"
                setClass='is-404'
            >
                <div className="inner-text">
                    <p className="text">ページが存在していません。</p>
                    <p className="text">え？以前にページが存在していた？</p>
                    <p className="text">気のせいでしょう...</p>
                    <p className="text">そう、気のせいです</p>
                    <p className="text">気のせいです</p>
                    <p className="text">気のせいです気のせいです気のせいです気のせいです気のせいです気のせいです気のせいです気のせいです気のせいです気のせいです気のせいです気のせいです気のせいです気のせいです気のせいです気のせいです気のせいです気のせいです</p>
                </div>
            </NormalWrap>

        </div>
    )
}

export default NotFoundPage;