import * as api from "../api/characterApi"
import {
    useNavigate
} from "react-router-dom";
import { AxiosError } from 'axios'
import { useQuery, useMutation, useQueryClient } from "react-query"
import { useAppDispatch } from '../reducers/hooks'
import { setDashboard2Users,getDashboard2Users } from '../reducers/dashboardIndex';


// そもreduserがあるから、react-queryいならない可能性
const useCharacters  = () => {
    return api.getCharacters() 
}

const useCreateCharacter = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient()
    let a:any = useMutation( api.createCharacter , {
        onSuccess: (user) => {
            queryClient.invalidateQueries('infos')
            navigate("/user/3/edit") 
        },
        onError:(e) => {
            console.log(e)
        },
    })
    return a
}


export {
    useCharacters,
    useCreateCharacter
}