import React,{ useEffect } from 'react';
import ReactDOM from 'react-dom';
import AbilityItem from './AbilityItem'
import AcquisitionPoint from './AcquisitionPoint'
import { useAppSelector, useAppDispatch } from '../../../reducers/hooks'
import { specializedSkillType} from '../../../reducers/types'
import SectionWrap from "../../Commons/Layout/sectionWrap"


// todo AcquisitionPointとAbilityItemはAbilityValueとほぼ同様のロジックを採用している為、
// 続き)共通のロジックにしたい
type Props = {
    isPage: string
    characterId: number
}
const SpecializedSkill: React.FC<Props> = (props) => {
    let specializedSkill:Array<specializedSkillType> = useAppSelector( ( state : any ) => state.specializedSkill )
    useEffect(()=>{
        if(props.isPage === 'create') {
            console.log(props.isPage)
        } else if(props.isPage === 'edit') {
            console.log(props.isPage)
        }
    })
    return (
        <SectionWrap  title="専門分野">
                <AcquisitionPoint />
                <AbilityItem skillItems={ specializedSkill }/>
        </SectionWrap>
    )
}

export default SpecializedSkill
