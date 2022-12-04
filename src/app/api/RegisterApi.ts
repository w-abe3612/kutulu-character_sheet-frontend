//import useAxios from 'useAxios'
import useAxios from '../config/axiosConfig'

const register = async ({name,email,password,password_confirmation,reCaptureToken}:{name:string,email:string,password:string,password_confirmation:string,reCaptureToken:string}) => {
    const { data } = await useAxios.post<any>(
        `http://localhost:80/api/v1/registration`,
        {name,email,password,password_confirmation,reCaptureToken},
        {headers: {
            'Content-Type': 'application/json'
        }}
    )
    return data 
}

//{ email, password, reCaptureToken }: { email: string, password: string, reCaptureToken:string }
//{token,reCaptureToken}: {token:string,reCaptureToken:string}
const verify = async ({token,reCaptureToken}: {token:string,reCaptureToken:string}) => {
    const { data } = await useAxios.post<any>(
        `http://localhost:80/api/v1/verify`,
        {token, reCaptureToken},
        {headers: {
            'Content-Type': 'application/json'
        }}
    )
    return data 
}

export {
    register,
    verify
}