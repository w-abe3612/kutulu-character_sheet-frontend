import { useAppSelector, useAppDispatch } from '../reducers/hooks'
import { setAbilityValues } from '../reducers/abilityValuesSlice'
import { setCharacterInfo } from '../reducers/characterInfosSlice'
import { setFlavorInfoValue } from '../reducers/flavorInfosSlice'
import { setSpecializedSkill } from '../reducers/specializedSkillsSlice'
import { useCreateCharacter } from '../queries/CharacterQuery'

export const submithandler = () => {
    const create = useCreateCharacter()
    const dispatch = useAppDispatch()

    const __datas: any = {
        datas: {},
        states: {}
    }
    const __property: any = {
        datas: {},
        purpose: 'create',
        sendValues: {
            characterInfo: {},
            flavorInfo: {},
            abilityValues: {},
            specializedSkill: {},
        },
        states: {
            characterInfo: {},
            flavorInfo: {},
            abilityValues: {},
            specializedSkill: {},
        }
    }

    const __private = {
        characterInfo: (data: any) => {
            let result: any
            const submitedCharactorinfo: any = [{
                player_name: data.player_name,
                player_character: data.player_character,
                character_title: data.character_title,
                injury_value: data.injury_value,
                image_path: data.test_img,
                image_name: 'aaa',
                ability_value_max: 13,
                ability_value_total: 0,
                specialized_skill_max: 10,
                specialized_skill_total: 0,
                possession_item: 'fewaf',
                character_preference: 'fewaf',
            }]
            __property.sendValues.characterInfo = submitedCharactorinfo
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
                prestige: data.prestige !== undefined ? data.prestige : 0,
                speech: data.speech !== undefined ? data.speech : 0,
                credit: data.credit !== undefined ? data.credit : 0,
                parentage: data.parentage !== undefined ? data.parentage : 0,
                shooting: data.shooting !== undefined ? data.shooting : 0,
                combat: data.combat !== undefined ? data.combat : 0,
                undercover: data.undercover !== undefined ? data.undercover : 0,
                nimble: data.nimble !== undefined ? data.nimble : 0,
                strength: data.strength !== undefined ? data.strength : 0,
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
                anthropology: data.anthropology !== undefined ? data.anthropology : 0,
                library: data.library !== undefined ? data.library : 0,
                artistry: data.artistry !== undefined ? data.artistry : 0,
                medical: data.medical !== undefined ? data.medical : 0,
                science: data.science !== undefined ? data.science : 0,
                psychology: data.psychology !== undefined ? data.psychology : 0,
                archeology: data.archeology !== undefined ? data.archeology : 0,
                economics: data.economics !== undefined ? data.economics : 0,
                criminology: data.criminology !== undefined ? data.criminology : 0,
                engineering: data.engineering !== undefined ? data.engineering : 0,
                occult: data.occult !== undefined ? data.occult : 0,
                linguistics: data.linguistics !== undefined ? data.linguistics : 0,
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
            __private.abilityValues(__property.datas)
        },
        setPurposeSubmit: (purpose: string) => {
            __property.purpose = purpose
        },
        submit: () => {
            if (__property.purpose === 'create') {
                console.log(__property.sendValues.characterInfo)
                create.mutate({
                    characterInfo:__property.sendValues.characterInfo
                })
                /*
                create.mutate({
                    characterInfo:{param:__property.sendValues.characterInfo},
                    //flavorInfoValue:{param:__property.sendValues.flavorInfo},
                    //abilityValues:{param:__property.sendValues.abilityValues},
                    //specializedSkill:{param:__property.sendValues.specializedSkill},
                })*/
                /*
                                create.mutate({
                                    characterInfo:__property.sendValues.characterInfo
                                })
                                */
            }
        }
    }
}

const renderBase64 = (imgFile: any) => {
    var result: any
    const reader = new FileReader();
    reader.addEventListener("load", function () {
        // 画像ファイルを base64 文字列に変換します
        imgFile.src = reader.result;
    }, false);

    if (imgFile) {
        reader.readAsDataURL(imgFile)
    }

}


/*
const onFileInputChange = async (imgFile:any) => {
    let base64data:any


    const test = ( img:any ) => {
        
 
        return 'test'
    }

    base64data = await test(imgFile)

    return base64data
}
*/
/*
function resolveAfter2Seconds(imgFile:any) {
    return new Promise( resolve => {
        const reader = new FileReader()
        reader.readAsDataURL(imgFile)
        
        reader.onload = (e:any) => {
            resolve( reader.result );
        }
    })
  }
  
  function asyncCall(imgFile:any) {
    const a = resolveAfter2Seconds(imgFile)
    console.log(a)
  }

const a = async (img:any) => {
    const b = (img:any) => {
        const reader = new FileReader()
        reader.readAsDataURL(img)
        
        reader.onload = (e:any) => {
            console.log(reader.result.replace(/data:.*\/.*;base64,/, ''))
        }
    }
    const c = await b(img)
    console.log(c)
}
*/


const convertBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader()
        fileReader.readAsDataURL(file)
        fileReader.onload = () => {
            resolve(fileReader.result)
            console.log(fileReader.result)
        }
        fileReader.onerror = (error) => {
            reject(error)
        }
    })
}

const base64 = async (img: any) => {
    return await convertBase64(img)
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