import React,{ useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useAppSelector, useAppDispatch } from '../../../reducers/hooks'
import { characterInfoType } from '../../../reducers/types'


const PossessionItem: React.FC = () => {
    let CharacterInfo:Array<characterInfoType> = useAppSelector( ( state : any ) => state.CharacterInfo )

    return (
        <div className="m-flavor_info l-section_wrap">
            <div className="l-section_Tab"></div>
            <div className="l-section_content">
            </div>
        </div>
    )
}

export default PossessionItem