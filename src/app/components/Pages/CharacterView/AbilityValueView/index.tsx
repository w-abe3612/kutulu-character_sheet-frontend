import React,{ useEffect } from 'react';
import ReactDOM from 'react-dom';
import AbilityItem from './AbilityItem'
import AcquisitionPoint from './AcquisitionPoint'
import { useAppSelector, useAppDispatch } from '../../../../reducers/hooks'
import SectionWrap from "../../../Commons/Layout/sectionWrap"
import { systemStateType } from '../../../../config/type'
import { initializeAbilityValues ,getAbilityValue } from '../../../../reducers/abilityValuesSlice'
import { useParams } from 'react-router-dom'


interface abilityValueType {
    skill_name: string
    skill_param: string
    skill_value: number
    skill_type: number
    skill_order: number
}


//パッシブアクティブ分ける
const dividePassive2Active = (itemvaluse :Array<abilityValueType> , type:number ) : Array<abilityValueType> => {
    let result:Array<abilityValueType> = []

    result = itemvaluse.filter(( item :any ) => {
        if( type === 0 && item.skill_type === 0 ) {
            return item 
        } else if ( type === 1 && item.skill_type === 1 ) {
            return item 
        } 
    })

    return result
}


//並び順にする
const sort2ItemOrder = ( itemvaluse :Array<abilityValueType> ): Array<abilityValueType> => {
    let result:Array<abilityValueType> = []
    
    result = itemvaluse.sort((a:any, b:any)  => {
        return a.skill_order - b.skill_order
    })

    return result
}


const AbilityValue: React.FC = () => {
    const dispatch = useAppDispatch()
    const systemState:systemStateType = useAppSelector((state: any) => state.systemState)
    const abilityValues:Array<abilityValueType> = useAppSelector( ( state : any ) => state.abilityValues )
    const urlParams = useParams<{ id: string,charactorId: string | undefined }>()
    const activeSkill: Array<abilityValueType> = sort2ItemOrder( dividePassive2Active(abilityValues,1) )
    const passiveSkill: Array<abilityValueType> = sort2ItemOrder( dividePassive2Active(abilityValues,0) )
    useEffect(()=>{
        dispatch(getAbilityValue(urlParams.charactorId))
    },[0])

    return (
        <SectionWrap title="個人情報" >
            <AcquisitionPoint />
            <span className="">パッシブスキル</span>
            <AbilityItem skillItems = {passiveSkill} />
            <span className="">アクティブスキル</span>
            <AbilityItem skillItems = {activeSkill} />
        </SectionWrap>
    )
}

export default AbilityValue