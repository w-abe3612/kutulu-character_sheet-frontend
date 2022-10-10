import React from 'react';
import ReactDOM from 'react-dom';
import { useLocation } from "react-router-dom"
import { useVerify  } from "../../queries/RegisterQuery"
import { registerStatesType } from '../../reducers/types';
import { useAppSelector, useAppDispatch } from '../../reducers/hooks'
import { setFormState, setrRegisterInputs,setVerifyFlg } from '../../reducers/registerSlice';

const Verify: React.FC = () => {
    const verify = useVerify()
    const location = useLocation()
    const dispatch = useAppDispatch()
    const registerState:registerStatesType = useAppSelector((state: any) => state.registerState)
    const verifyReg = () => {
        const searchParams = new URLSearchParams(location.search)
        searchParams.get('token')
        verify.mutate({token:searchParams.get('token')})
    }

    let cat = localStorage.getItem("test");
    console.log('test1')
    console.log(cat)
    if (cat === 'test') {
        verifyReg()
        console.log('test2')
        console.log(cat)
        localStorage.removeItem("test");
    }

    return (
        <div>Verify</div>
    )
}

export default Verify;