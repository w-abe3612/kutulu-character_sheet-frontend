import React,{ useEffect } from 'react';
import AbilityItem from './AbilityItem'
import AcquisitionPoint from './AcquisitionPoint'
import { useAppSelector, useAppDispatch } from '../../../../reducers/hooks'
import { specializedSkillType, statesType } from '../../../../config/type'
import SectionWrap from "../../../Commons/Layout/sectionWrap"
import {initializeSpecializedSkill,getSpecialzedSkills} from '../../../../reducers/specializedSkillsSlice'
import { useParams } from 'react-router-dom'

const SpecializedSkillView: React.FC = () => {
    const dispatch = useAppDispatch()
    let specializedSkill:Array<specializedSkillType> = useAppSelector( ( state:statesType ) => state.specializedSkill )

    // todo エラーが出るけど一旦後回し
    const urlParams = useParams<{ id:any,charactorId:any }>()
    useEffect(()=>{
        dispatch(getSpecialzedSkills(urlParams.charactorId))
    },[0])

    return (
        <SectionWrap  title="個人情報"
        setClass=''
        description=''>
            <AcquisitionPoint />
            <AbilityItem skillItems={ specializedSkill }/>
        </SectionWrap>
    )
}

export default SpecializedSkillView
