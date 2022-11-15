import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import AbilityItem from './AbilityItem'
import AcquisitionPoint from './AcquisitionPoint'
import { useAppSelector, useAppDispatch } from '../../../../reducers/hooks'
import { specializedSkillType, statesType } from '../../../../config/type'
import SectionWrap from "../../../Commons/Layout/sectionWrap"
import { initializeSpecializedSkill, getSpecialzedSkills } from '../../../../reducers/specializedSkillsSlice'
import { useParams } from 'react-router-dom'
import LoadingStateProvider from '../../../Commons/SheetParts/loadingStateProvider'

type Props = {
    isPage: string
}
const SpecializedSkill: React.FC<Props> = (props) => {
    let result: JSX.Element = <></>
    const dispatch = useAppDispatch()
    let specializedSkill: specializedSkillType = useAppSelector((state: statesType) => state.specializedSkill)
    const urlParams = useParams<{ id: any, charactorId: any }>()
    useEffect(() => {
        if (props.isPage === 'edit') {
            dispatch(getSpecialzedSkills(urlParams.charactorId))
        } else {
            dispatch(initializeSpecializedSkill())
        }
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
                        <AcquisitionPoint />
                        <AbilityItem skillItems={specializedSkill.infos} />
                    </>
                )}
            />
        </SectionWrap>
    )
}

export default SpecializedSkill
