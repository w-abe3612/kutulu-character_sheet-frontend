import * as api from "../api/characterApi"
import {
    useNavigate
} from "react-router-dom";
import { AxiosError } from 'axios'
import { useQuery, useMutation, useQueryClient } from "react-query"
import { useAppSelector,useAppDispatch } from '../reducers/hooks'
import { setDashboard2Users } from '../reducers/dashboardIndex';



const useCharacters  = () => {
    return api.getCharacters() 
}

const useCharactorInfo = (id:any) => {
    return api.getCharacterInfo(id)
}

const useFlavorInfos = (id:any) => {
    return api.getFlavorInfos(id)
}

const useAbilityValues = (id:any) => {
    return api.getAbilityValues(id)
}

const useSpecialzedSkills = (id:any) => {
    return api.getSpecialzedSkills(id)
}


const useDeleteCharacter  = () => {
    let a:any = useMutation( (id:any)=> api.deleteCharacter(id) , {
        onSuccess: (user) => {
        },
        onError:(e) => {
        },
    })
    return a
}

const useCreateCharacter = () => {
    let a:any = useMutation( (infos:any)=> api.createCharacter(infos) , {
        onSuccess: (user) => {
        },
        onError:(e) => {
        },
    })
    return a
}


export {
    useCharactorInfo,
    useFlavorInfos,
    useAbilityValues,
    useSpecialzedSkills,
    useCharacters,
    useCreateCharacter,
    useDeleteCharacter
}