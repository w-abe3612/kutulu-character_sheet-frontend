import * as api from "../api/CharacterInfoApi"

import { AxiosError } from 'axios'
import { useQuery} from "react-query"


const useCharacters = (userId:number | null) => {
    let data = useQuery('characters', (characters:any) => api.getCharacters(userId))
    console.log(data)
    return data
}

export {
    useCharacters
}