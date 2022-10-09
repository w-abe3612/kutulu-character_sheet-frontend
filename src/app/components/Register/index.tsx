import React, { useEffect,useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../reducers/hooks'
import {
    Navigate,
    useLocation
} from "react-router-dom";
import { systemStateType,registerStatesType } from '../../reducers/types';
import InputRegister from './inputRegister'
import CompleteRegister from './completeRegister';
import ConfirmRegister from './confirmRegister';
import Verify from './verifyRegister';


type Props = {
    urlNest: string
}

const Register: React.FC<Props> = ({ urlNest }): JSX.Element => {
    const dispatch = useAppDispatch()
    const systemState: systemStateType     = useAppSelector((state: any) => state.systemState)
    const registerState:registerStatesType = useAppSelector((state: any) => state.registerState)

    let result = <></>

    if ( systemState.isLoggedIn === true ) {
        return <Navigate to={"/user/" + systemState.userId } replace={true} />
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

    return result
}

export default Register;