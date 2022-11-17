import axios from 'axios'
import { useAppSelector, useAppDispatch } from '../reducers/hooks'

axios.defaults.withCredentials = true;

const viewCharacterInfo = async (userPageToken: string, characterPageToken: string) => {
    const { data } = await axios.get<any>(
        `http://localhost:80/api/v1/character_infos/view`,
        {
            params: {
                userPageToken: userPageToken,
                characterPageToken: characterPageToken
            }
        })

    return data
}
const viewKutuluInfo = async (userPageToken: string, characterPageToken: string) => {
    const { data } = await axios.get<any>(
        `http://localhost:80/api/v1/kutulu_info/view`,
        {
            params: {
                userPageToken: userPageToken,
                characterPageToken: characterPageToken
            }
        })

    return data
}
const viewFlavorInfos = async (userPageToken: string, characterPageToken: string) => {
    const { data } = await axios.get<any>(
        `http://localhost:80/api/v1/flavor_infos/view`,
        {
            params: {
                userPageToken: userPageToken,
                characterPageToken: characterPageToken
            }
        })

    return data
}
const viewAbilityValues = async (userPageToken: string, characterPageToken: string) => {
    const { data } = await axios.get<any>(
        `http://localhost:80/api/v1/ability_values/view`,
        {
            params: {
                userPageToken: userPageToken,
                characterPageToken: characterPageToken
            }
        })

    return data
}
const viewSpecialzedSkills = async (userPageToken: string, characterPageToken: string) => {
    const { data } = await axios.get<any>(
        `http://localhost:80/api/v1/specialzed_skills/view`,
        {
            params: {
                userPageToken: userPageToken,
                characterPageToken: characterPageToken
            }
        })

    return data
}

// まだ使わないかも
const viewOtherUserInfo = async (userPageToken: string, characterPageToken: string) => {
    return ''
}

//page
const getCharacters = async (page: number) => {
    const { data } = await axios.get<any>(`http://localhost:80/api/v1/characters`, {
        params: {
            page: page
        }
    })
    return data
}
const getCharacterInfo = async (id: any) => {
    const { data } = await axios.get<any>(
        `http://localhost:80/api/v1/character_infos`,
        {
            params: {
                character_id: id
            }
        })
    return data
}

const getKutuluInfo = async (id: any) => {
    const { data } = await axios.get<any>(
        `http://localhost:80/api/v1/kutulu_info`,
        {
            params: {
                character_id: id
            }
        })
    return data
}

const getFlavorInfos = async (id: any) => {
    const { data } = await axios.get<any>(
        `http://localhost:80/api/v1/flavor_infos`,
        {
            params: {
                character_id: id
            }
        })
    return data
}

const getAbilityValues = async (id: any) => {
    const { data } = await axios.get<any>(
        `http://localhost:80/api/v1/ability_values`,
        {
            params: {
                character_id: id
            }
        })
    return data
}

const getSpecialzedSkills = async (id: any) => {
    const { data } = await axios.get<any>(
        `http://localhost:80/api/v1/specialzed_skills`,
        {
            params: {
                character_id: id
            }
        })
    return data
}

const deleteCharacter = async (id: any) => {
    const { data } = await axios.post<any>(
        `http://localhost:80/api/v1/character/delete`,
        { character_id: id },
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
    return data
}

const createCharacter = async (info: any) => {
    const { data } = await axios.post<any>(
        `http://localhost:80/api/v1/character/create`,
        info,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
    return data
}

const updateCharacter = async (info: any) => {
    const { data } = await axios.post<any>(
        `http://localhost:80/api/v1/character/edit`,
        info,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
    console.log(data)
    return data
}

export {
    viewCharacterInfo,
    viewKutuluInfo,
    viewFlavorInfos,
    viewAbilityValues,
    viewSpecialzedSkills,
    getCharacterInfo,
    getFlavorInfos,
    getAbilityValues,
    getSpecialzedSkills,
    getKutuluInfo,
    deleteCharacter,
    getCharacters,
    createCharacter,
    updateCharacter
}