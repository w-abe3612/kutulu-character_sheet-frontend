import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useAppSelector, useAppDispatch } from '../../../reducers/hooks'
import { flavorInfoType } from '../../../reducers/types'
import TextEntry from './TextEntry'
import SectionWrap from "../../Commons/Layout/sectionWrap"

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
        <ul className="m-flaverInfos_wrap" >
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
        <SectionWrap title="個人情報" >
            { entryInput }
        </SectionWrap>
    )
}

export default FlavorInfo
