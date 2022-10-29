import { useCreateCharacter } from '../queries/CharacterQuery'

export const submithandler = () => {
    const create = useCreateCharacter()

    const __property: any = {
        datas: {},
        purpose: 'create',
        sendValues: {
            characterInfo: {},
            kutuluInfo:{},
            flavorInfo: {},
            abilityValues: {},
            specializedSkill: {},
        },
        states: {
            characterInfo: {},
            kutuluInfo:{},
            flavorInfo: {},
            abilityValues: {},
            specializedSkill: {},
        }
    }

    const __private = {
        characterInfo: (data: any) => {
            let result: any
            const submitedCharactorinfo: any = [{
                player_name:data.player_name,
                player_character:data.player_character,
                image_path:data.image_path,
                image_name:data.image_name,
            }]
            __property.sendValues.characterInfo = submitedCharactorinfo
        },
        kutuluInfo: (data: any) => {
            let result: any
            const submitedKutuluinfo: any = [{
                character_title:data.character_title,
                injury_value:data.injury_value,
                possession_item:data.possession_item,
                character_preference:data.character_preference,
            }]
            __property.sendValues.kutuluInfo = submitedKutuluinfo
        },
        flavorInfo: (data: any) => {
            let result: any = []
            let stateFlavorInfo = __property.states.flavorInfo
            const submitedFlaverInfo: any = {
                occupation: data.occupation,
                age: data.age,
                sex: data.sex,
                birthplace: data.birthplace,
                height: data.height,
                weight: data.weight,
            }
            for (const index in stateFlavorInfo) {
                result[index] = {
                    flavor_info_name: stateFlavorInfo[index].flavor_info_name,
                    flavor_info_param: stateFlavorInfo[index].flavor_info_param,
                    flavor_info_value: submitedFlaverInfo[stateFlavorInfo[index].flavor_info_param],
                    flavor_info_order: stateFlavorInfo[index].flavor_info_order
                }
            }
            __property.sendValues.flavorInfo = result
        },
        abilityValues: (data: any) => {
            let result: any = []
            let stateAbilityValues = __property.states.abilityValues
            const submitedAbilityValue: any = {
                prestige: data.prestige ,
                speech: data.speech ,
                credit: data.credit ,
                parentage: data.parentage ,
                shooting: data.shooting ,
                combat: data.combat ,
                undercover: data.undercover ,
                nimble: data.nimble ,
                strength: data.strength ,
            }

            for (const index in stateAbilityValues) {
                result[index] = {
                    skill_name: stateAbilityValues[index].skill_name,
                    skill_order: stateAbilityValues[index].skill_order,
                    skill_param: stateAbilityValues[index].skill_param,
                    skill_type: stateAbilityValues[index].skill_type,
                    skill_value: submitedAbilityValue[stateAbilityValues[index].skill_param]
                }
            }

            __property.sendValues.abilityValues = result
        },
        specializedSkill: (data: any) => {
            let result: any = []
            let stateSpecializedSkill = __property.states.specializedSkill
            const submitedSpecializedSkill: any = {
                anthropology: data.anthropology ,
                library: data.library ,
                artistry: data.artistry ,
                medical: data.medical ,
                science: data.science ,
                psychology: data.psychology ,
                archeology: data.archeology ,
                economics: data.economics ,
                criminology: data.criminology ,
                engineering: data.engineering ,
                occult: data.occult,
                linguistics: data.linguistics ,
            }

            for (const index in stateSpecializedSkill) {
                result[index] = {
                    skill_name: stateSpecializedSkill[index].skill_name,
                    skill_order: stateSpecializedSkill[index].skill_order,
                    skill_param: stateSpecializedSkill[index].skill_param,
                    skill_value: submitedSpecializedSkill[stateSpecializedSkill[index].skill_param]
                }
            }
            __property.sendValues.specializedSkill = result
        }
    }

    return {
        setDatas: (datas: any) => {
            __property.datas = datas
        },
        setStates: (states: any) => {
            __property.states.characterInfo = states.characterInfo
            __property.states.flavorInfo = states.flavorInfo
            __property.states.abilityValues = states.abilityValues
            __property.states.specializedSkill = states.specializedSkill
            
        },
        createValues: () => {
            __private.flavorInfo(__property.datas)
            __private.specializedSkill(__property.datas)
            __private.characterInfo(__property.datas)
            __private.kutuluInfo(__property.datas)
            __private.abilityValues(__property.datas)
        },
        setPurposeSubmit: (purpose: string) => {
            __property.purpose = purpose
        },
        submit: () => {
            if ( __property.purpose === 'create' ) {
                create.mutate({
                    characterInfo:__property.sendValues.characterInfo,
                    kutuluInfo:__property.sendValues.kutuluInfo,
                    flavorInfo:__property.sendValues.flavorInfo,
                    specializedSkill:__property.sendValues.specializedSkill,
                    abilityValues:__property.sendValues.abilityValues,
                })
            }
        }
    }
}

