import * as api from "../api/character"

import { AxiosError } from 'axios'
import { useQuery} from "react-query"


const useCharacter = (id:number) => {
    return useQuery('character', (id) => api.getCharacter)
}

export {
    useCharacter 
}