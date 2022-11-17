//合計数を表示させるコンポーネント
// todo このコンポーネントは共通化できそう
import React from 'react';
import { useAppSelector } from '../../../../reducers/hooks'
import { kutuluInfoType, statesType } from '../../../../config/type'

const AcquisitionPointView: React.FC = () => {
    let kutuluInfo:kutuluInfoType = useAppSelector((state: statesType) => state.kutuluInfo)

    return (
        <div className="m-acquisition-point" >
            <div className="m-acquisition-point__inner">
                <dl className="m-points-box">
                    <dt className="m-points-box__label" >合計Pt</dt>
                    <dd className="m-points-box__value" >{ kutuluInfo.specialized_skill_max }</dd>
                </dl>
                <dl className="m-points-box">
                    <dt className="m-points-box__label" >取得Pt</dt>
                    <dd className="m-points-box__value" >{ kutuluInfo.specialized_skill_total }</dd>
                </dl>
            </div>
        </div>
    )
}

export default AcquisitionPointView;