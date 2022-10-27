import axios from 'axios'
import { User } from "../reducers/types"

axios.defaults.withCredentials = true;


const getUsers = async () => {
    const { data } = await axios.get<User>('http://localhost:80/api/v1/user')
    return data 
}

const login = async ({email,password}:{email:string,password:string}) => {
    const { data } = await axios.post<User>(
        `http://localhost:80/api/v1/login`,
        {email,password}
    )
    console.log(data)
    return data 
}

const logout = async () => {
    const { data } = await axios.post<User>(`http://localhost:80/api/v1/logout`)
    return data 
}
//http://localhost:80/api/v1/character_infos/1

export {
    getUsers,
    login,
    logout,
}