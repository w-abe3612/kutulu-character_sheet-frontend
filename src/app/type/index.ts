// InputTextInfoのProps
export interface inputTextInfoPropsType {
    label: string
    name: string
    setClass: string
    default:string
    required: any
}

// テキストエリアのProps
export interface sentenceTextAreaType {
    name: string
    value: string
    setClass: string
}

// システムに関わる変数、
export interface systemStateType {
    isLoggedIn: string
    isPage: string
    userId: number | null | string
    userName: string
}

// 新規登録に使われるStates
export interface registerStatesType {
    formState:string,
    verifyFlg:boolean,
    username:string,
    email:string,
    password:string,
    confirmation:string
}

// キャラクターインフォ
export interface characterInfoType {
    player_name:string
    player_character:string
    image_path:string
    image_name:string
    img_upload_base64:string
    public_page_token:string
    public_flg:number
}

// クトゥルーコアインフォ
export interface kutuluInfoType {
    character_title:string
    injury_value:number
    ability_value_max:number
    ability_value_total:number
    specialized_skill_max:number
    specialized_skill_total:number
    possession_item:string
    character_preference:string
}