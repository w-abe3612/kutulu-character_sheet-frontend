import React,{ useEffect } from 'react';
import ReactDOM from 'react-dom';
import AbilityItem from './AbilityItem'
import AcquisitionPoint from './AcquisitionPoint'
import { useAppSelector, useAppDispatch } from '../../../reducers/hooks'

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

// パッシブスキルとかそこの区切り
/*
const abilityTypeSeparation = ( text:Array<abilityValueType> ) => {
        return text
}*/

const SkillCheck: React.FC = () => {
    let abilityValues:Array<abilityValueType> = useAppSelector( ( state : any ) => state.abilityValues )

    let activeSkill: Array<abilityValueType> = sort2ItemOrder( dividePassive2Active(abilityValues,1) )
    let passiveSkill: Array<abilityValueType> = sort2ItemOrder( dividePassive2Active(abilityValues,0) )

    return (
        <div className="m-ability_value l-section_wrap">
            <div className="l-section_Tab"></div>
            <div className="l-section_content">
                <AcquisitionPoint />
                <AbilityItem skillItems = {passiveSkill} />
                <AbilityItem skillItems = {activeSkill} />
                
            </div>
        </div>
    )
}

export default SkillCheck