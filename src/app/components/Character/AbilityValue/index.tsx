import React from 'react';
import ReactDOM from 'react-dom';
import AbilityItem from './AbilityItem'
import AcquisitionPoint from './AcquisitionPoint'
import { useSelector } from 'react-redux';

interface abilityValueType {
    skill_name: string
    skill_param: string
    skill_value: number
    skill_type: number
    skill_order: number
}


// パッシブスキルとかそこの区切り
const abilityTypeSeparation = ( text:string ) => {
        return text
}

const SkillCheck = () => {
    const abilityValues = useSelector( (state : any) => state.abilityValues )

    return (
        <div className="m-ability_value l-section_wrap">
            <div className="l-section_Tab"></div>
            <div className="l-section_content">
                <AcquisitionPoint />
                <span>{ abilityTypeSeparation('パッシブスキル') }</span>
                <AbilityItem />
                <span>{ abilityTypeSeparation('アクティブスキル') }</span>
                <AbilityItem />
            </div>
        </div>
    )
}

export default SkillCheck