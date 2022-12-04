//import useAxios from 'useAxios'
import useAxios from '../config/axiosConfig'



const getUser = async () => {
    let data: any
    data = await useAxios.get<any>('/api/v1/user')

    return data
}

const login = async ({ email, password, reCaptureToken }: { email: string, password: string, reCaptureToken:string }) => {
    const { data } = await useAxios.get("/sanctum/csrf-cookie").then( async (res) => {
         return await useAxios.post<any>(
            `/api/v1/login`,
            { email, password, reCaptureToken }
        )
    })
    console.log(data)
    return data
}



const logout = async () => {
    const { data } = await useAxios.post<any>(`/api/v1/logout`)
    return data
}

export {
    getUser,
    login,
    logout,
}