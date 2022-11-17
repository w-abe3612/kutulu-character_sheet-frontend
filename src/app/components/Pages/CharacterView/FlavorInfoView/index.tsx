import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../../reducers/hooks'
import { flavorInfoType } from '../../../../config/type'
import SectionWrap from "../../../Commons/Layout/sectionWrap"
import InputTextInfo from "../../../Commons/SheetParts/inputTextInfo"
import { initializeFlavorInfo, viewFlavorInfos } from '../../../../reducers/flavorInfosSlice'
import { useParams } from 'react-router-dom'
import { statesType } from '../../../../config/type'
import LoadingStateProvider from '../../../Commons/SheetParts/loadingStateProvider'
import ViewTextInfo from '../../../Commons/ViewPage/viewTextInfo'

// order順に並べ替える
const entryInputs = (infoPrams: Array<any>) => {
    let result: JSX.Element = <></>
    let inputsElements: Array<JSX.Element> = []

    inputsElements = infoPrams.map((item) => {
        return (
            <li>
                <ViewTextInfo
                    label={item.flavor_info_name}
                    setClass=""
                    default={item.flavor_info_value}
                />
            </li>
        )
    })

    result = (
        <ul className="m-flaverInfos_wrap" >
            {inputsElements}
        </ul>
    )

    return result
}

type Props = {
    isPage: string
}

const FlavorInfoView: React.FC<Props> = (props) => {
    let result: JSX.Element = <></>
    const dispatch = useAppDispatch()
    const flavorInfo: flavorInfoType = useAppSelector((state: statesType) => state.flavorInfo)

    const entryInput: JSX.Element = entryInputs(flavorInfo.infos)
    const urlParams = useParams<{ publicUserPageToken: string, publicCharacterPageToken: string }>()

    useEffect(() => {
        dispatch(initializeFlavorInfo())
        dispatch(viewFlavorInfos({
            userPageToken: urlParams.publicUserPageToken !== undefined ? urlParams.publicUserPageToken : '',
            characterPageToken: urlParams.publicCharacterPageToken !== undefined ? urlParams.publicCharacterPageToken : ''
        }))
    }, [0])

    return (
        <SectionWrap
            title="背景"
            setClass='is-optional'
            description='キャラクターのイメージをより鮮明にするための自由記入欄です。入力は任意です。' >
            <LoadingStateProvider
                isPage={props.isPage}
                loading={flavorInfo.loading}
                success={flavorInfo.success}
                error=''
                element={(entryInput)}
            />
        </SectionWrap>
    )
}

export default FlavorInfoView
