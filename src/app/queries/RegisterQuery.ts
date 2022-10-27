import * as api from "../api/RegisterApi"
import { useQuery, useMutation } from "react-query"
import { toast } from 'react-toastify';
import { useAppDispatch } from '../reducers/hooks'
import {
    useNavigate
} from "react-router-dom";

const useRegister = () => {
    const dispatch = useAppDispatch()

    let a:any = useMutation( api.register , {
        onSuccess: (user) => {
        },
        onError:(e) => {
        },
    })
    return a
}

const useVerify = () => {
    const navigate = useNavigate()

    let a:any = useMutation( api.verify , {
        onSuccess: (user) => {
            return navigate("/")
        },
        onError:(e) => {
        },
    })
    return a
}

export {
    useRegister,
    useVerify
}