import axios from 'axios'

axios.defaults.withCredentials = true;

const getCharacters = async ( userId:number | null) => {
    const { data } = await axios.get<any>(`http://localhost:80/api/v1/characters/${userId}`)
    return data 
}

export {
    getCharacters
}