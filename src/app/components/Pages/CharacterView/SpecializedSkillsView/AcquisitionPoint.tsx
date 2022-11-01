//合計数を表示させるコンポーネント

import React from 'react';
import { useAppSelector, useAppDispatch } from '../../../../reducers/hooks'
import { specializedSkillType, characterInfoType } from '../../../../reducers/types'


const totalPointCalculation = ( abilityValues:Array<specializedSkillType> ):number => {
    let result:number = 0

    result = abilityValues.map((item) => {
        return item.skill_value
    }).reduce( ( previousValue:number, currentValue:number ) => {
        return previousValue + currentValue
    }, 0)

    return result
}

const AcquisitionPoint: React.FC = () => {
    const dispatch = useAppDispatch()
    let specializedSkill: Array<specializedSkillType> = useAppSelector((state: any) => state.specializedSkill)
    let characterInfo: characterInfoType = useAppSelector((state: any) => state.characterInfo)

    return (
        <div className="m-acquisition-point" >
            <div className="m-acquisition-point__inner">
                <dl className="m-points-box">
                    <dt className="m-points-box__label" >合計Pt</dt>
                    <dd className="m-points-box__value" >{ characterInfo.specialized_skill_max }</dd>
                </dl>
                <dl className="m-points-box">
                    <dt className="m-points-box__label" >取得Pt</dt>
                    <dd className="m-points-box__value" >{ totalPointCalculation(specializedSkill) }</dd>
                </dl>
            </div>
        </div>
    )
}

export default AcquisitionPoint;