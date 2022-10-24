import { useAppSelector, useAppDispatch } from '../reducers/hooks'
import { setAbilityValues } from '../reducers/abilityValuesSlice'
import { setCharacterInfo } from '../reducers/characterInfosSlice'
import { setFlavorInfoValue } from '../reducers/flavorInfosSlice'
import { setSpecializedSkill } from '../reducers/specializedSkillsSlice'
import { useCreateCharacter } from '../queries/CharacterQuery'

export const submithandler = () => {
    const create = useCreateCharacter()
    const dispatch = useAppDispatch()
    
    const __datas:any = {
        datas:{},
        states:{}
    }
    const __property:any = {
        datas:{},
        purpose:'create',
        sendValues:{
            characterInfo:{},
            flavorInfo:{},
            abilityValues:{},
            specializedSkill:{},
        },
        states:{
            characterInfo:{},
            flavorInfo:{},
            abilityValues:{},
            specializedSkill:{},
        }
    }

    const __private = {
        characterInfo:(data:any)=>{
            let result:any
            const submitedCharactorinfo:any = [{
                player_name:data.player_name,
                player_character:data.player_character,
                character_title:data.character_title,
                injury_value:data.injury_value,
                image_path:'aaa',
                image_name:'aaa',
                ability_value_max:13,
                ability_value_total:0,
                specialized_skill_max:10,
                specialized_skill_total:0,
                possession_item:'fewaf',
                character_preference:'fewaf',
            }]
            __property.sendValues.characterInfo = submitedCharactorinfo
        },
        flavorInfo:(data:any)=>{
            let result:any = []
            let stateFlavorInfo = __property.states.flavorInfo
            const submitedFlaverInfo:any = {
                occupation:data.occupation,
                age:data.age,
                sex:data.sex,
                birthplace:data.birthplace,
                height:data.height,
                weight:data.weight,
            }
            for(const index in stateFlavorInfo) {
                result[ index ] = {
                    flavor_info_name:stateFlavorInfo[index].flavor_info_name,
                    flavor_info_param:stateFlavorInfo[index].flavor_info_param,
                    flavor_info_value:submitedFlaverInfo[stateFlavorInfo[index].flavor_info_param],
                    flavor_info_order:stateFlavorInfo[index].flavor_info_order
                }
            }
            __property.sendValues.flavorInfo = result
        },
        abilityValues:(data:any)=>{
            let result:any = []
            let stateAbilityValues = __property.states.abilityValues
            const submitedAbilityValue:any = {
                prestige:data.prestige,
                speech:data.speech,
                credit:data.credit,
                parentage:data.parentage,
                shooting:data.shooting,
                combat:data.combat,
                undercover:data.undercover,
                nimble:data.nimble,
                strength:data.strength,
            }

            for(const index in stateAbilityValues) {
                result[ index ] = {
                    skill_name:stateAbilityValues[index].skill_name,
                    skill_order:stateAbilityValues[index].skill_order,
                    skill_param:stateAbilityValues[index].skill_param,
                    skill_type:stateAbilityValues[index].skill_type,
                    skill_value:submitedAbilityValue[stateAbilityValues[index].skill_param]
                }
            }

            __property.sendValues.abilityValues = result
        },
        specializedSkill:(data:any)=>{
            let result:any = []
            let stateSpecializedSkill = __property.states.specializedSkill
            const submitedSpecializedSkill:any = {
                anthropology:data.anthropology,
                library:data.library,
                artistry:data.artistry,
                medical:data.medical,
                science:data.science,
                psychology:data.psychology,
                archeology:data.archeology,
                economics:data.economics,
                criminology:data.criminology,
                engineering:data.engineering,
                occult:data.occult,
                linguistics:data.linguistics,
            }

            for(const index in stateSpecializedSkill) {
                result[ index ] = {
                    skill_name:stateSpecializedSkill[index].skill_name,
                    skill_order:stateSpecializedSkill[index].skill_order,
                    skill_param:stateSpecializedSkill[index].skill_param,
                    skill_value:submitedSpecializedSkill[stateSpecializedSkill[index].skill_param]
                }
            }
            __property.sendValues.specializedSkill = result
        }
    }

    const characterInfo = (data:any) => {
        let result:any
        const charactorinfo:any = {
            player_name:data.player_name,
            player_character:data.player_character,
            character_title:data.character_title,
            injury_value:data.injury_value,
            image_path:'aaa',
            image_name:'aaa',
            ability_value_max:13,
            ability_value_total:0,
            specialized_skill_max:10,
            specialized_skill_total:0,
            possession_item:data.possession_item,
            character_preference:data.character_preference,
        }
    }

    return {
        setDatas:(datas:any)=>{
            __property.datas = datas
        },
        setStates:(states:any)=>{
            __property.states.characterInfo = states.characterInfo
            __property.states.flavorInfo = states.flavorInfo
            __property.states.abilityValues = states.abilityValues
            __property.states.specializedSkill = states.specializedSkill
        },
        createValues:()=>{
            __private.flavorInfo(__property.datas)
            __private.specializedSkill(__property.datas)
            __private.characterInfo(__property.datas)
            __private.abilityValues(__property.datas)
        },
        setPurposeSubmit:(purpose:string)=>{
            __property.purpose = purpose
        },
        setStores:()=>{
        },
        submit:()=>{
            if(__property.purpose === 'create') {
                create.mutate({
                    characterInfo:__property.sendValues.characterInfo,
                    flavorInfoValue:__property.sendValues.flavorInfo,
                    abilityValues:__property.sendValues.abilityValues,
                    specializedSkill:__property.sendValues.specializedSkill,
                })
            }
        }
    }
}

/*
    const onSubmit = (data:any) => {
        const flaverInfo:any = {
            occupation:data.occupation,
            age:data.age,
            sex:data.sex,
            birthplace:data.birthplace,
            height:data.height,
            weight:data.weight,
        }

        const charactorinfo:any = {
            player_name:data.player_name,
            player_character:data.player_character,
            character_title:data.character_title,
            injury_value:data.injury_value,
            image_path:'aaa',
            image_name:'aaa',
            ability_value_max:13,
            ability_value_total:0,
            specialized_skill_max:10,
            specialized_skill_total:0,
            possession_item:data.possession_item,
            character_preference:data.character_preference,
        }

        const abilityValue:any = {
            prestige:data.prestige,
            speech:data.speech,
            credit:data.credit,
            parentage:data.parentage,
            shooting:data.shooting,
            combat:data.ombat,
            undercover:data.undercover,
            nimble:data.nimble,
            strength:data.strength,
        }

        const specializedSkillsSlice:any = {
            anthropology:data.anthropology,
            library:data.library,
            artistry:data.artistry,
            medical:data.medical,
            science:data.science,
            psychology:data.psychology,
            archeology:data.archeology,
            economics:data.economics,
            criminology:data.criminology,
            engineering:data.engineering,
            occult:data.occult,
            linguistics:data.linguistics,
        }
        

        dispatch(setAbilityValues(abilityValue))
        dispatch(setCharacterInfo(charactorinfo))
        dispatch(setFlavorInfoValue(flaverInfo))
        dispatch(setSpecializedSkill(specializedSkillsSlice))

        // ここで送信するjsonを作成する

        const createVarue = {
            characterInfo:charactorinfo,
            flavorInfoValue:stateValue.flavorInfo,
            abilityValues:stateValue.abilityValues,
            specializedSkill:stateValue.specializedSkill,
        }

        create.mutate(createVarue)

    }
*/