import * as api from "../api/AuthAPI"
import { useQuery, useMutation } from "react-query"
import { toast } from 'react-toastify';


const useUser = () => {
    return useQuery('users', api.getUsers)
}


const useLogin = () => {

    return useMutation( api.login , {
        onSuccess: (user)=>{

            console.log(user)
        },
        onError:(e) => {
            console.log(e)
        }
    })
}

const useLogout = () => {

    return useMutation( api.logout , {
        onSuccess: (user)=>{
            console.log(user)
        },
        onError:() => {
            toast.error('ログアウトに失敗しました')
        }
    })
}

export {
    useUser,
    useLogin,
    useLogout
}