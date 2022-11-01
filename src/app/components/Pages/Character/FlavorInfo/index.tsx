import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useAppSelector, useAppDispatch } from '../../../../reducers/hooks'
import { flavorInfoType } from '../../../../reducers/types'
import SectionWrap from "../../../Commons/Layout/sectionWrap"
import InputTextInfo from "../../../Commons/SheetParts/inputTextInfo"
import {initializeFlavorInfo,getFlavorInfos} from '../../../../reducers/flavorInfosSlice'
import { useParams } from 'react-router-dom'

// order順に並べ替える
const entryInputs = (infoPrams: Array<flavorInfoType>) => {
    let result: JSX.Element = <></>
    let inputsElements: any = []

    inputsElements = infoPrams.map((item) => {
        return (
            <InputTextInfo
                label={item.flavor_info_name}
                name={item.flavor_info_param}
                setClass=""
                default={item.flavor_info_value}
                required={{
                    maxLength: {
                        value: 12,
                        message: '12文字以下で入力してください。'
                    }
                }}
                setValueAction={{
                    type:'flavorInfo',
                }}
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

type Props = {
    isPage: string
}

const FlavorInfo: React.FC<Props> = (props) => {
    const dispatch = useAppDispatch()
    const flavorInfo: Array<flavorInfoType> = useAppSelector((state: any) => state.flavorInfo)
    let entryInput:any = <></>
    entryInput = entryInputs(flavorInfo)
    const urlParams = useParams<{ id: string,charactorId: string | undefined }>()

    useEffect(()=>{
        if(props.isPage === 'edit') {
            dispatch(getFlavorInfos(urlParams.charactorId))
        } else {
            dispatch(initializeFlavorInfo())
        }
    },[0])

    return (
        <SectionWrap title="その他情報" >
            <span>キャラクターのイメージをより鮮明にするための自由記入欄です。入力は任意です。</span>
            { entryInput }
        </SectionWrap>
    )
}

export default FlavorInfo
