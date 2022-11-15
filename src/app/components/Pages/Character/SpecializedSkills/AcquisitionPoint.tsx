//合計数を表示させるコンポーネント
// todo このコンポーネントは共通化できそう

import React from 'react';
import { useAppSelector, useAppDispatch } from '../../../../reducers/hooks'
import { specializedSkillType, kutuluInfoType, statesType } from '../../../../config/type'


const totalPointCalculation = ( abilityValues:Array<any> ):number => {
    let result:number = 0

    result = abilityValues.map((item:any) => {
        return item.skill_value
    }).reduce( ( previousValue:number, currentValue:number ) => {
        return previousValue + currentValue
    }, 0)

    return result
}

const AcquisitionPoint: React.FC = () => {
    const dispatch = useAppDispatch()
    let specializedSkill: specializedSkillType = useAppSelector((state: statesType) => state.specializedSkill)
    let kutuluInfo: kutuluInfoType = useAppSelector((state: statesType) => state.kutuluInfo)

    return (
        <div className="m-acquisition-point" >
            <div className="m-acquisition-point__inner">
                <dl className="m-points-box">
                    <dt className="m-points-box__label" >合計Pt</dt>
                    <dd className="m-points-box__value" >{ kutuluInfo.specialized_skill_max }</dd>
                </dl>
                <dl className="m-points-box">
                    <dt className="m-points-box__label" >取得Pt</dt>
                    <dd className="m-points-box__value" >{ totalPointCalculation(specializedSkill.infos) }</dd>
                </dl>
            </div>
        </div>
    )
}

export default AcquisitionPoint;