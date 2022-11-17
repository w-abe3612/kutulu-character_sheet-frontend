import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useAppSelector, useAppDispatch } from '../../../../reducers/hooks'
import { specializedSkillType, statesType } from '../../../../config/type'
import SectionWrap from "../../../Commons/Layout/sectionWrap"
import { initializeSpecializedSkill, viewSpecialzedSkills } from '../../../../reducers/specializedSkillsSlice'
import { useParams } from 'react-router-dom'
import LoadingStateProvider from '../../../Commons/SheetParts/loadingStateProvider'
import AbilityItemView from './AbilityItemView'
import AcquisitionPointView from './AcquisitionPointView'


type Props = {
    isPage: string
}
const SpecializedSkillsView: React.FC<Props> = (props) => {
    const dispatch = useAppDispatch()
    const urlParams = useParams<{ publicUserPageToken: string, publicCharacterPageToken: string }>()
    let specializedSkill: specializedSkillType = useAppSelector((state: statesType) => state.specializedSkill)

    useEffect(() => {
        dispatch(initializeSpecializedSkill())
        dispatch(viewSpecialzedSkills({
            userPageToken: urlParams.publicUserPageToken !== undefined?urlParams.publicUserPageToken:'',
            characterPageToken: urlParams.publicCharacterPageToken!== undefined?urlParams.publicCharacterPageToken:''
          }))
    }, [0])
   

    return (
        <SectionWrap title="専門分野"
            setClass=''
            description='' >
            <LoadingStateProvider
                isPage={props.isPage}
                loading={specializedSkill.loading}
                success={specializedSkill.success}
                error=''
                element={(
                    <>
                        <AcquisitionPointView />
                        <AbilityItemView skillItems={specializedSkill.infos} />
                    </>
                )}
            />
        </SectionWrap>
    )
}

export default SpecializedSkillsView
