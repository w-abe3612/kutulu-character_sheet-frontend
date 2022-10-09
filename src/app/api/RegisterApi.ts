import axios from 'axios'

axios.defaults.withCredentials = true;

const register = async ({name,email,password,password_confirmation}:{name:string,email:string,password:string,password_confirmation:string}) => {
    const { data } = await axios.post<any>(
        `http://localhost:80/api/v1/registration`,
        {name,email,password,password_confirmation},
        {headers: {
            'Content-Type': 'application/json'
  }}
    )
    return data 
}

const verify = async (token:string) => {
    const { data } = await axios.post<any>(
        `http://localhost:80/api/v1/verify`,
        {token},
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