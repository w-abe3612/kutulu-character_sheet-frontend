export const getCharacterId4Url = (isPage:string):number => {
    let result:number = 0

    if ( isPage === 'edit') {
        const path:string = location.pathname
        const matchs:null | Array<string> = path.match(/edit\/([0-9].*)\//u)
        
        result = matchs !== null ?Number(matchs![1]):0
    }

    return result
}
