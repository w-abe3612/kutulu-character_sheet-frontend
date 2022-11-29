// InputTextInfoのProps
export interface inputTextInfoPropsType {
    label: string
    name: string
    setClass: string
    default: string
    required: any
}

// テキストエリアのProps
export interface sentenceTextAreaType {
    name: string
    value: string
    setClass: string
    setValueAction: any
}

// システムに関わる変数、
export interface systemStateType {
    loading: boolean
    success: boolean
    error: string | null
    userId: number | null | string
    userName: string
    public_page_token: string | null
}

// ヘッダーメニューに拘るstate
// todo今のページを追跡
export interface navigationInfoType {
    sidebarState: boolean
}

// 新規登録に使われるStates
export interface registerStatesType {
    formState: string,
    verifyFlg: boolean,
    username: string,
    email: string,
    password: string,
    confirmation: string
}

// キャラクターインフォ
export interface characterInfoType {
    loading: boolean
    success: boolean
    error: string | null
    player_name: string
    player_character: string
    image_path: string
    image_name: string
    img_upload_base64: string
    public_page_token: string
    public_flg: number
    character_type:number
}

// クトゥルーコアインフォ
export interface kutuluInfoType {
    loading: boolean
    success: boolean
    error: string | null
    character_title: string
    injury_value: number
    ability_value_max: number
    ability_value_total: number
    specialized_skill_max: number
    specialized_skill_total: number
    possession_item: string
    character_preference: string
}

// 
export interface abilityValueType {
    loading: boolean
    success: boolean
    error: string | null
    infos: Array<{
        skill_name: string
        skill_param: string
        skill_value: number
        skill_type: number
        skill_order: number
    }>
}

// 
export interface specializedSkillType {
    loading: boolean
    success: boolean
    error: string | null
    infos: Array<{
        skill_name: string
        skill_param: string
        skill_value: number
        skill_order: number
    }>
}

// 
export interface flavorInfoType {
    loading: boolean
    success: boolean
    error: string | null
    infos: Array<{
        flavor_info_name: string
        flavor_info_param: string
        flavor_info_value: string
        flavor_info_order: number
    }>
}

export interface dashboardIndexType {
    loading: boolean
    success: boolean
    error: string | null
    paginate: {
        current_page: number
        from: number
        to: number
        total: number
        per_page: number
        last_page: number
    }
    datas: Array<{
        id: number
        image_name: string
        image_path: string
        player_character: string
        public_page_token: string
        character_type: number
        updated_at: string
    }>
}

// 全てのState
export interface statesType {
    systemState: systemStateType
    characterInfo: characterInfoType
    kutuluInfo: kutuluInfoType
    abilityValues: abilityValueType
    dashboard: dashboardIndexType
    flavorInfo: flavorInfoType
    specializedSkill: specializedSkillType
    registerState: registerStatesType
    navigationInfo: navigationInfoType
}

// 
export interface setCheckedActionType {
    value: number,
    name: string
}

// 
export interface setInputTextActionType {
    value: string,
    name: string
}

