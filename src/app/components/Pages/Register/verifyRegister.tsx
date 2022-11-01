import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import { useLocation } from "react-router-dom"
import { useVerify  } from "../../../queries/RegisterQuery"
import { useAppSelector, useAppDispatch } from '../../../reducers/hooks'
import { setFormState, setrRegisterInputs,setVerifyFlg } from '../../../reducers/registerSlice';
import {registerStatesType,statesType} from '../../../config/type'

const Verify: React.FC = () => {
    const verify = useVerify()
    const location = useLocation()
    const dispatch = useAppDispatch()
    const registerState:registerStatesType = useAppSelector((state: statesType) => state.registerState)

    useEffect(()=> {
        const searchParams = new URLSearchParams(location.search)
        searchParams.get('token')
        verify.mutate({token:searchParams.get('token')})
    }, [0])

    return (
        <div>Verify</div>
    )
}

export default Verify;