import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useAppSelector, useAppDispatch } from '../../../reducers/hooks'
import { flavorInfoType } from '../../../reducers/types'
import TextEntry from './TextEntry'

/*
let test = {
    flavor_info_name: '職業',
    flavor_info_param: 'occupation',
    flavor_info_value: '', 
    flavor_info_order: 0,
}*/

// order順に並べ替える
const entryInputs = (infoPrams: Array<flavorInfoType>) => {
    let result: JSX.Element = <></>
    let inputsElements: any = []

    inputsElements = infoPrams.map((item) => {
        return (
            <TextEntry 
                inputLabel={item.flavor_info_name}
                itemParam={item.flavor_info_param}
                itemValue={item.flavor_info_value}
            />
        ) 
    })

    result = (
        <ul >
            { inputsElements }
        </ul>
    )

    return result
}

const FlavorInfo: React.FC = () => {
    const flavorInfo: Array<flavorInfoType> = useAppSelector((state: any) => state.flavorInfo)
    let entryInput:any = <></>
    entryInput = entryInputs(flavorInfo)


    return (
        <div className="m-flavor_info l-section_wrap">
            <div className="l-section_Tab"></div>
            <div className="l-section_content">
                { entryInput }
            </div>
        </div>
    )
}

export default FlavorInfo
