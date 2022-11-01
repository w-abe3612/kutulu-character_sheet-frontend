import React,{ useEffect } from 'react';
import ReactDOM from 'react-dom';
import AbilityItem from './AbilityItem'
import AcquisitionPoint from './AcquisitionPoint'
import { useAppSelector, useAppDispatch } from '../../../../reducers/hooks'
import { specializedSkillType} from '../../../../reducers/types'
import SectionWrap from "../../../Commons/Layout/sectionWrap"
import {initializeSpecializedSkill,getSpecialzedSkills} from '../../../../reducers/specializedSkillsSlice'
import { useParams } from 'react-router-dom'

type Props = {
    isPage: string
}
const SpecializedSkill: React.FC<Props> = (props) => {
    const dispatch = useAppDispatch()
    let specializedSkill:Array<specializedSkillType> = useAppSelector( ( state : any ) => state.specializedSkill )
    const urlParams = useParams<{ id: string,charactorId: string | undefined }>()
    useEffect(()=>{
        if(props.isPage === 'edit') {
            dispatch(getSpecialzedSkills(urlParams.charactorId))
        } else {
            dispatch(initializeSpecializedSkill())
        }
    },[0])

    return (
        <SectionWrap  title="専門分野">
            <AcquisitionPoint />
            <AbilityItem skillItems={ specializedSkill }/>
        </SectionWrap>
    )
}

export default SpecializedSkill
