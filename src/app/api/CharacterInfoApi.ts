import axios from 'axios'

const getCharacter = async ( id:number ) => {
    const { data } = await axios.get<any>(`http://localhost:80/api/v1/character/${id}`)
    return data 
}

export {
    getCharacter
}