import React, { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../../reducers/hooks'
import {
    Navigate,
} from "react-router-dom";
import { systemStateType, registerStatesType } from '../../../config/type';
import InputRegister from './inputRegister'
import CompleteRegister from './completeRegister';
import ConfirmRegister from './confirmRegister';
import Verify from './verifyRegister';
import MainLayout from '../../Commons/Layout/mainLayout'
//recaptureを入れる
import { useReCaptcha } from '../../../config/reCaptcha'

type Props = {
    urlNest: string
}

const Register: React.FC<Props> = ({ urlNest }): JSX.Element => {
    const recaptcha = useReCaptcha();
    const dispatch = useAppDispatch()
    const systemState: systemStateType     = useAppSelector((state: any) => state.systemState)
    const registerState:registerStatesType = useAppSelector((state: any) => state.registerState)

    let result = <></>

    useEffect(()=>{
        recaptcha.load();
    },[0])

    if ( systemState.userId !== null  
            && systemState.userName !== '' 
            && systemState.public_page_token !== '' ) {
        return <Navigate to={"/user/" + systemState.userId + '/kutulu/'} replace={true} />
    }

    if ( urlNest === 'input' ) {
        result = <InputRegister />
    } else if(urlNest === 'verify') {
        result = <Verify />
    } else if( urlNest === 'confirm' && registerState.formState === 'confirm' ) {
        result = <ConfirmRegister />
    } else if( urlNest === 'complete' && registerState.formState === 'complete' ) {
        result = <CompleteRegister />
    } else {
        return <Navigate to="/register" replace={true} />
    }

    return (
        <MainLayout setClass='' >
            {result}
        </MainLayout>
    )
}

export default Register;