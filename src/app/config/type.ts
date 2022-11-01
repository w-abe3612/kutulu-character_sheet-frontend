// InputTextInfoのProps
export interface inputTextInfoPropsType {
    label: string
    name: string
    setClass: string
    default:string
    required: any
    setValueAction:any
}

// テキストエリアのProps
export interface sentenceTextAreaType {
    name: string
    value: string
    setClass: string
    setValueAction:any
}

// システムに関わる変数、
export interface systemStateType {
    isPage: string
    isLoggedIn: string
    userId: number | null | string
    userName: string
    public_page_token: string | null
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

// 
export interface abilityValueType {
    skill_name: string
    skill_param: string
    skill_value: number
    skill_type: number
    skill_order: number
}

// 
export interface specializedSkillType {
    skill_name: string
    skill_param: string
    skill_value: number
    skill_order: number
}

// 
export interface flavorInfoType {
    flavor_info_name: string
    flavor_info_param: string
    flavor_info_value: string
    flavor_info_order: number
}

export interface dashboardIndexType {
    id:number
    image_name:string
    image_path:string
    player_character:string
    public_page_token:string
    updated_at:string
}

// 全てのState
export interface statesType {
    systemState: systemStateType
    characterInfo: characterInfoType
    kutuluInfo: kutuluInfoType
    abilityValues: Array<abilityValueType>
    dashboard: Array<dashboardIndexType>
    flavorInfo: Array<flavorInfoType>
    specializedSkill: Array<specializedSkillType>
    registerState: registerStatesType 
}

// 
export interface setCheckedActionType {
    value: number,
    name:string
}

// 
export interface setInputTextActionType {
    value: string,
    name:string
}

