import * as api from "../api/characterApi"
import {
    useNavigate
} from "react-router-dom";
import { AxiosError } from 'axios'
import { useQuery, useMutation, useQueryClient } from "react-query"
import { useAppDispatch } from '../reducers/hooks'


/*
const useCharacters = (id:number) => {
    return useQuery('character', (id) => api.getCharacters)
}
*/
const useCreateCharacter = () => {
    //const dispatch = useAppDispatch()
    const navigate = useNavigate();
    const queryClient = useQueryClient()
    let a:any = useMutation( api.createCharacter , {
        onSuccess: (user) => {
            console.log(user)
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
    //useCharacters,
    useCreateCharacter
}