import * as api from "../api/AuthAPI"
import { useQuery, useMutation } from "react-query"
import { toast } from 'react-toastify';
import { useAppDispatch } from '../reducers/hooks'
import { setLoggedIn,setLogout } from '../reducers/systemStateSlice'

const useCheckLoggedIn = () => {
    return api.getUsers()
}

const useLogin = () => {
    // 何故か変数にuseMutationの返り値を渡すとうまくいく、returnに渡すとうまくいかない
    const dispatch = useAppDispatch()

    let a:any = useMutation( api.login , {
        onSuccess: (user) => {
            const loggedinflg = {
                isLoggedIn:'1',
                userId: user.id,
                userName: user.name,
                public_page_token: user.public_page_token
            }

            // ログインの情報を保持する
            dispatch(setLoggedIn(loggedinflg))
        },
        onError:(e) => {
            console.log(e)
        },
    })
    return a
}

const useLogout = () => {
    const dispatch = useAppDispatch()


    return useMutation( api.logout , {
        onSuccess: (user)=>{
            // この間にエラー時判定が入るはず
            dispatch(setLogout())
        },
        onError:() => {
        }
    })
}

export {
    useCheckLoggedIn,
    useLogin,
    useLogout
}