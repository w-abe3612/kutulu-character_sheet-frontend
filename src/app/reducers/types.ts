export interface characterInfoType {
    player_name:string
    player_character:string
    character_title:string
    injury_value:number
    image_path:string
    image_name:string
    ability_value_max:number
    ability_value_total:number
    specialized_skill_max:number
    specialized_skill_total:number
    possession_item:string
    character_preference:string
}

export interface abilityValueType {
    skill_name: string
    skill_param: string
    skill_value: number
    skill_type: number
    skill_order: number
}