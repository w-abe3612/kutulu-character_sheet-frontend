export const getCharacterId4Url = (isPage:string):number => {
    let result:number = 0

    if ( isPage === 'edit') {
        const path:string = location.pathname
        const matchs:null | Array<string> = path.match(/edit\/([0-9].*)\//u)
        
        result = matchs !== null ?Number(matchs![1]):0
    }

    return result
}




/*
const createCharacter = async ( info:any ) => {
    const { data } = await axios.post<any>(
        `http://localhost:80/api/v1/character/create`,
        info,
        {headers: {
            'Content-Type': 'multipart/form-data'
        }}
    )
    return data 
}

*/