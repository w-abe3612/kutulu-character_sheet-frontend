import React,{ useEffect } from 'react';
import AbilityItem from './AbilityItem'
import AcquisitionPoint from './AcquisitionPoint'
import { useAppSelector, useAppDispatch } from '../../../../reducers/hooks'
import SectionWrap from "../../../Commons/Layout/sectionWrap"
import { systemStateType, statesType } from '../../../../config/type'
import { initializeAbilityValues ,getAbilityValue } from '../../../../reducers/abilityValuesSlice'
import { useParams } from 'react-router-dom'
import { abilityValueType } from '../../../../config/type'

//パッシブアクティブ分ける
const dividePassive2Active = (itemvaluse :Array<abilityValueType> , type:number ) : Array<abilityValueType> => {
    let result:Array<abilityValueType> = []

    result = itemvaluse.filter(( item :abilityValueType ) => {
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
    
    result = itemvaluse.sort((a:abilityValueType, b:abilityValueType)  => {
        return a.skill_order - b.skill_order
    })

    return result
}

type Props = {
    isPage: string
}
const AbilityValue: React.FC<Props> = (props) => {
    const dispatch = useAppDispatch()
    const systemState:systemStateType = useAppSelector((state:statesType) => state.systemState)
    const abilityValues:Array<abilityValueType> = useAppSelector( ( state:statesType ) => state.abilityValues )
    const urlParams = useParams<{ id:any,charactorId:any }>()
    const activeSkill: Array<abilityValueType> = sort2ItemOrder( dividePassive2Active(abilityValues,1) )
    const passiveSkill: Array<abilityValueType> = sort2ItemOrder( dividePassive2Active(abilityValues,0) )

    useEffect(()=>{
        if(props.isPage === 'edit') {
            dispatch(getAbilityValue(urlParams.charactorId !== undefined ? urlParams.charactorId: 0))
        } else {
            dispatch(initializeAbilityValues())
        }
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