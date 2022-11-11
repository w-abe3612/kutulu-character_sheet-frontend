import * as api from "../api/AuthAPI"
import { useQuery, useMutation } from "react-query"
import { toast } from 'react-toastify';
import { useAppDispatch } from '../reducers/hooks'
import { setLoggedIn,setLogout } from '../reducers/systemStateSlice'


const  useCheckLoggedIn = () => {
    return api.getUser()
}

const useLogin = () => {
    // 何故か変数にuseMutationの返り値を渡すとうまくいく、returnに渡すとうまくいかない
    const dispatch = useAppDispatch()

    let response:any = useMutation( api.login , {
        onSuccess: (user) => {
            const loggedinflg = {
                userId: user.id,
                userName: user.name,
                public_page_token: user.public_page_token
            }

            // ログインの情報を保持する
            dispatch(setLoggedIn(loggedinflg))
            toast.success("ログインしました。")
        },
        onError:(e) => {
            toast.error("ログインに失敗しました。")
        },
    })
    return response
}

const useLogout = () => {
    const dispatch = useAppDispatch()

    return useMutation( api.logout , {
        onSuccess: (user)=>{
            // この間にエラー時判定が入るはず
            dispatch(setLogout())
            toast.success("ログアウトしました。")
        },
        onError:() => {
            toast.error("ログアウトに失敗しました。")
        }
    })
}

export {
    useCheckLoggedIn,
    useLogin,
    useLogout
}