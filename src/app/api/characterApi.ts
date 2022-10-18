import axios from 'axios'

axios.defaults.withCredentials = true;
/*
const getCharacters = async ( id:number ) => {
    const { data } = await axios.get<any>(`http://localhost:80/api/v1/characters/${id}`)
    return data 
}
*/
const createCharacter = async ( infos:any) => {
    const { data } = await axios.post<any>(
        `http://localhost:80/api/v1/character/create`,
        {    
            player_name:infos.player_name,
            player_character:infos.player_character,
            character_title:infos.character_title,
            injury_value:infos.injury_value,
            image_path:infos.image_path,
            image_name:infos.image_name,
            possession_item:infos.possession_item,
            character_preference:infos.character_preference,
        },
        {headers: {
            'Content-Type': 'application/json'
        }}
    )
    return data 
}

export {
    //getCharacters,
    createCharacter
}