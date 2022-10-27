export interface characterInfoType {
    player_name:string
    player_character:string
    image_path:string
    image_name:string
    public_page_token:string
    public_flg:number
}

const initialCharacterInfo: characterInfoType = {
    player_name:'',
    player_character:'',
    image_path:'',
    image_name:'',
    public_page_token:'',
    public_flg:1
}

export default initialCharacterInfo