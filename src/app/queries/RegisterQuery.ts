import * as api from "../api/RegisterApi"
import {  useMutation } from "react-query"
import { useAppDispatch } from '../reducers/hooks'
import {
    useNavigate
} from "react-router-dom";
import { toast } from 'react-toastify'

const useRegister = () => {

    let response:any = useMutation( api.register , {
        onSuccess: (user) => {
            toast.success("ユーザーを仮登録しました。")
        },
        onError:(e) => {
            toast.error("ユーザー仮登録に失敗しました。")
        },
    })
    return response
}

const useVerify = () => {
    const navigate = useNavigate()

    let response:any = useMutation( api.verify , {
        onSuccess: (user) => {
            toast.success("ユーザーを登録しました。")
            return navigate("/")
        },
        onError:(e) => {
            toast.error("ユーザー登録に失敗しました。")
        },
    })
    return response
}

export {
    useRegister,
    useVerify
}