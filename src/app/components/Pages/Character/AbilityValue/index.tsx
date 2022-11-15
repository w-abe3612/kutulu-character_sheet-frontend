import React, { useEffect } from 'react';
import AbilityItem from './AbilityItem'
import AcquisitionPoint from './AcquisitionPoint'
import { useAppSelector, useAppDispatch } from '../../../../reducers/hooks'
import SectionWrap from "../../../Commons/Layout/sectionWrap"
import { systemStateType, statesType } from '../../../../config/type'
import { initializeAbilityValues, getAbilityValue } from '../../../../reducers/abilityValuesSlice'
import { useParams } from 'react-router-dom'
import { abilityValueType } from '../../../../config/type'
import LoadingStateProvider from '../../../Commons/SheetParts/loadingStateProvider'

//パッシブアクティブ分ける
const dividePassive2Active = (itemvaluse: Array<any>, type: number): Array<any> => {
    let result: Array<abilityValueType> = []

    result = itemvaluse.filter((item: any) => {
        if (type === 0 && item.skill_type === 0) {
            return item
        } else if (type === 1 && item.skill_type === 1) {
            return item
        }
    })

    return result
}

//並び順にする
const sort2ItemOrder = (itemvaluse: Array<any>): Array<any> => {
    let result: Array<any> = []

    result = itemvaluse.sort((a: any, b: any) => {
        return a.skill_order - b.skill_order
    })

    return result
}

type Props = {
    isPage: string
}
const AbilityValue: React.FC<Props> = (props) => {
    const dispatch = useAppDispatch()
    const abilityValues: abilityValueType = useAppSelector((state: statesType) => state.abilityValues)
    const urlParams = useParams<{ id: any, charactorId: any }>()
    const activeSkill: Array<abilityValueType> = sort2ItemOrder(dividePassive2Active(abilityValues.infos, 1))
    const passiveSkill: Array<abilityValueType> = sort2ItemOrder(dividePassive2Active(abilityValues.infos, 0))

    useEffect(() => {
        if (props.isPage === 'edit') {
            dispatch(getAbilityValue(urlParams.charactorId !== undefined ? urlParams.charactorId : 0))
        } else {
            dispatch(initializeAbilityValues())
        }
    }, [0])

    return (
        <SectionWrap
            title="能力値"
            setClass='is-abilityValue'
            description=''
        >
            <LoadingStateProvider
                isPage={props.isPage}
                loading={abilityValues.loading}
                success={abilityValues.success}
                error=''
                element={(
                    <>
                        <AcquisitionPoint />
                        <span className="m-title-type">パッシブスキル</span>
                        <AbilityItem skillItems={passiveSkill} />
                        <span className="m-title-type">アクティブスキル</span>
                        <AbilityItem skillItems={activeSkill} />
                    </>
                )}
            />
        </SectionWrap>
    )
}

export default AbilityValue