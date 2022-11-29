import React, { useEffect } from 'react';
import {
    useLocation,
    useNavigate
} from "react-router-dom"
import { useVerify } from "../../../queries/RegisterQuery"
import NormalWrap from '../../Commons/Layout/normalSectionWrap'
import { useReCaptcha } from '../../../config/reCaptcha'


const Verify: React.FC = () => {
    const recaptcha = useReCaptcha();
    const verify = useVerify()
    const location = useLocation()
    const navigate = useNavigate()

    const hasToken = ():boolean => {
        const searchParams = new URLSearchParams(location.search)
        return searchParams.get('token')? true: false
    }

    const getToken = () => {
        const searchParams = new URLSearchParams(location.search)
        return searchParams.get('token')? searchParams.get('token'): ''
    }

    useEffect(() => {
        // トークンが無い場合リダイレクトされる
        if (hasToken()) {
            recaptcha.execute({ action: "submit" }).then((reCaptureToken) => {
                verify.mutate({ token: getToken(), reCaptureToken: reCaptureToken })
            })
        } else {
            navigate('../../')
        }
    }, [0])

    return (
        <NormalWrap
            title="ご登録ありがとうございます"
            setClass='is-thanks-verify'
        >
            <div className="inner-text">
                <p className='text'>登録が完了されました、これよりログインが可能になります。</p>

                <p className='text'>久遠に臥したるもの死することなく<br />
                    怪異なる永劫の内には死すら終焉を迎えん</p>

                <p className='text'>深宇宙の冒涜的な真実をご堪能ください。</p>
            </div>
        </NormalWrap>
    )
}

export default Verify;