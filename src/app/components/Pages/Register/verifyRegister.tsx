import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom"
import { useVerify } from "../../../queries/RegisterQuery"
import NormalWrap from '../../Commons/Layout/normalSectionWrap'

const Verify: React.FC = () => {
    const verify = useVerify()
    const location = useLocation()
/*
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search)
        searchParams.get('token')
        verify.mutate({ token: searchParams.get('token') })
    }, [0])
*/
    return (
        <NormalWrap
            title="ご登録ありがとうございます"
            setClass='is-thanks-verify'
        >
            <div className="inner-text">
                <p className='text'>登録が完了されました、これよりログインが可能になります。</p>

                <p className='text'>久遠に臥したるもの死することなく<br/>
                怪異なる永劫の内には死すら終焉を迎えん</p>

                <p className='text'>深宇宙の冒涜的な真実をご堪能ください。</p>
            </div>
        </NormalWrap>
    )
}

export default Verify;