import * as api from "../api/AuthAPI"
import { useQuery, useMutation } from "react-query"
import { toast } from 'react-toastify';
import { useAppDispatch } from '../reducers/hooks'
import { setLoggedIn } from '../reducers/systemStateSlice'

const useUser = () => {
    return useQuery('users', api.getUsers)
}

const useLogin = () => {
    // 何故か変数にuseMutationの返り値を渡すとうまくいく、returnに渡すとうまくいかない
    const dispatch = useAppDispatch()


    let a:any = useMutation( api.login , {
        onSuccess: (user) => {
            //console.log(user)
            let loggedinflg = {
                isLoggedIn:true,
                userId: user.id,
                userName: user.name
            }
            // この間にエラー時判定が入るはず
            dispatch(setLoggedIn(loggedinflg))
        },
        onError:(e) => {
            //console.log(e)

            

        },
    })
    return a
}

const useLogout = () => {
    const dispatch = useAppDispatch()


    return useMutation( api.logout , {
        onSuccess: (user)=>{
            let loggedinflg = {
                isLoggedIn:false
            }
            // この間にエラー時判定が入るはず
            dispatch(setLoggedIn(loggedinflg))
            localStorage.clear();
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