import axios from 'axios'
import { User } from "../reducers/types"

axios.defaults.withCredentials = true;


const getUsers = async () => {
    const { data } = await axios.get<User>('api/user')
    return data 
}

const login = async ({email,password}:{email:string,password:string}) => {
    const { data } = await axios.post<User>(
        `http://localhost:80/api/login`,
        {email,password}
    )
    return data 
}

/*
別オリジンの際のCsrf対策を行う
const getCsrf = async () => {
    const { data } = await axios.get<any>('http://localhost:80/api/sanctum/csrf-cookie')
    return data
}
*/

const logout = async () => {
    const { data } = await axios.post<User>(`http://localhost:80/api/logout`)
    return data 
}
//http://localhost:80/api/v1/character_infos/1

export {
    getUsers,
    login,
    logout,
}