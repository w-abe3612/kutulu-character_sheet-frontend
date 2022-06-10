import React,{ useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useAppSelector, useAppDispatch } from '../../../reducers/hooks'
import { flavorInfoType } from '../../../reducers/types'


const FlavorInfo: React.FC = () => {
    let flavorInfo:Array<flavorInfoType> = useAppSelector( ( state : any ) => state.flavorInfo )

    return (
        <div className="m-flavor_info l-section_wrap">
            <div className="l-section_Tab"></div>
            <div className="l-section_content">
            </div>
        </div>
    )
}

export default FlavorInfo
