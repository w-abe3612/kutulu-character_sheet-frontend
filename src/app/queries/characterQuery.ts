import * as api from "../api/characterApi"
import {  useMutation } from "react-query"
import { toast } from 'react-toastify'


const useCharacters  = () => {
    return api.getCharacters() 
}

const useCharactorInfo = (id:any) => {
    return api.getCharacterInfo(id)
}

const useKutuluInfo = (id:any) => {
    return api.getKutuluInfo(id)
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
    let response:any = useMutation( (id:any)=> api.deleteCharacter(id) , {
        onSuccess: (user) => {
            toast.success("キャラクターを削除しました。")
        },
        onError:(e) => {
            toast.error("キャラクターの削除に失敗しました。")
        },
    })
    return response
}

const useCreateCharacter = () => {
    let response:any = useMutation( (infos:any)=> api.createCharacter(infos) , {
        onSuccess: (user) => {
            toast.success("キャラクターを作成しました。")
        },
        onError:(e) => {
            toast.error("キャラクターの作成に失敗しました。")
        },
    })
    return response
}

const useEditCharacter = () => {
    let response:any = useMutation( (infos:any)=> api.updateCharacter(infos) , {
        onSuccess: (user) => {
            toast.success("キャラクターを編集しました。")
        },
        onError:(e) => {
            toast.error("キャラクターの編集に失敗しました。")
        },
    })
    return response
}


export {
    useCharactorInfo,
    useFlavorInfos,
    useAbilityValues,
    useSpecialzedSkills,
    useKutuluInfo,
    useCharacters,
    useCreateCharacter,
    useEditCharacter,
    useDeleteCharacter
}