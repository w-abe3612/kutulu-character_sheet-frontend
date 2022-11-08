import React,{useEffect} from 'react';
import {
    useNavigate
} from "react-router-dom";
import { useAppDispatch } from '../../../reducers/hooks'
import { setFormState } from '../../../reducers/registerSlice';

const CompleteRegister: React.VFC = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate();

    useEffect(()=> {
        setTimeout(() => {
            dispatch(setFormState({formState:'input'}))
            navigate("/")
        }, 5000)
    },[0])

    return (
        <div>Complete</div>
    )
}

export default CompleteRegister;