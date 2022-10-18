import React,{ useEffect } from 'react';
import ReactDOM from 'react-dom';
import AbilityItem from './AbilityItem'
import AcquisitionPoint from './AcquisitionPoint'
import { useAppSelector, useAppDispatch } from '../../../reducers/hooks'
import { specializedSkillType} from '../../../reducers/types'
import SectionWrap from "../../Commons/Layout/sectionWrap"


// todo AcquisitionPointとAbilityItemはAbilityValueとほぼ同様のロジックを採用している為、
// 続き)共通のロジックにしたい
const SpecializedSkill: React.FC = () => {
    let specializedSkill:Array<specializedSkillType> = useAppSelector( ( state : any ) => state.specializedSkill )

    return (
        <SectionWrap  title="専門分野">
                <AcquisitionPoint />
                <AbilityItem skillItems={ specializedSkill }/>
        </SectionWrap>
    )
}

export default SpecializedSkill
