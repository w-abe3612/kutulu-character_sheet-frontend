import axios from 'axios'

axios.defaults.withCredentials = true;

const getUser = async () => {
    let data: any
    data = await axios.get<any>('http://localhost:80/api/v1/user')

    return data
}

const login = async ({ email, password, reCaptureToken }: { email: string, password: string, reCaptureToken:string }) => {
    const { data } = await axios.get("http://localhost:80/sanctum/csrf-cookie").then( async (res) => {
         return await axios.post<any>(
            `http://localhost:80/api/v1/login`,
            { email, password, reCaptureToken }
        )
    })
    console.log(data)
    return data
}



const logout = async () => {
    const { data } = await axios.post<any>(`http://localhost:80/api/v1/logout`)
    return data
}

export {
    getUser,
    login,
    logout,
}