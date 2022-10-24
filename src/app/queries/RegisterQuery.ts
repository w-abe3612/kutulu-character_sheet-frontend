import * as api from "../api/RegisterApi"
import { useQuery, useMutation } from "react-query"
import { toast } from 'react-toastify';
import { useAppDispatch } from '../reducers/hooks'

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
    const dispatch = useAppDispatch()

    let a:any = useMutation( api.verify , {
        onSuccess: (user) => {
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