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

const initialKutuluInfo:kutuluInfoType  = {
    character_title:'',
    injury_value:0,
    ability_value_max:13,
    ability_value_total:0,
    specialized_skill_max:10,
    specialized_skill_total:0,
    possession_item:'',
    character_preference:'',
}

export default initialKutuluInfo