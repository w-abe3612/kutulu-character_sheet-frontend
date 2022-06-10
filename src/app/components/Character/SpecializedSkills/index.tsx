import React,{ useEffect } from 'react';
import ReactDOM from 'react-dom';
import AbilityItem from './AbilityItem'
import AcquisitionPoint from './AcquisitionPoint'
import { useAppSelector, useAppDispatch } from '../../../reducers/hooks'
import { specializedSkillType} from '../../../reducers/types'


// todo AcquisitionPointとAbilityItemはAbilityValueとほぼ同様のロジックを採用している為、
// 続き)共通のロジックにしたい
const SpecializedSkill: React.FC = () => {
    let specializedSkill:Array<specializedSkillType> = useAppSelector( ( state : any ) => state.specializedSkill )

    return (
        <div className="m-ability_value l-section_wrap">
            <div className="l-section_Tab"></div>
            <div className="l-section_content">
                <AcquisitionPoint />
                <AbilityItem skillItems={ specializedSkill }/>
            </div>
        </div>
    )
}

export default SpecializedSkill
