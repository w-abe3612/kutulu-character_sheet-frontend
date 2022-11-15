import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../../reducers/hooks'
import { flavorInfoType } from '../../../../config/type'
import SectionWrap from "../../../Commons/Layout/sectionWrap"
import InputTextInfo from "../../../Commons/SheetParts/inputTextInfo"
import { initializeFlavorInfo, getFlavorInfos, setFlavorInfoValue } from '../../../../reducers/flavorInfosSlice'
import { useParams } from 'react-router-dom'
import { statesType } from '../../../../config/type'
import LoadingStateProvider from '../../../Commons/SheetParts/loadingStateProvider'

// order順に並べ替える
const entryInputs = (infoPrams: Array<any>) => {
    let result: JSX.Element = <></>
    const dispatch = useAppDispatch()
    let inputsElements: Array<JSX.Element> = []

    inputsElements = infoPrams.map((item) => {
        const setValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
            e.preventDefault()

            dispatch(setFlavorInfoValue({
                name: item.flavor_info_param,
                value: e.target.value
            }))
        }

        return (
            <li>
                <InputTextInfo
                    label={item.flavor_info_name}
                    name={item.flavor_info_param}
                    setClass=""
                    default={item.flavor_info_value}
                    required={{
                        maxLength: {
                            value: 28,
                            message: '28文字以下で入力してください。'
                        },
                        onChange: (e: React.ChangeEvent<HTMLInputElement>) => setValueHandler(e)
                    }}
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

const FlavorInfo: React.FC<Props> = (props) => {
    let result:JSX.Element = <></>
    const dispatch = useAppDispatch()
    const flavorInfo: flavorInfoType = useAppSelector((state: statesType) => state.flavorInfo)

    const entryInput: JSX.Element = entryInputs(flavorInfo.infos)
    const urlParams = useParams<{ id: any, charactorId: any }>()

    useEffect(() => {
        if (props.isPage === 'edit') {
            dispatch(getFlavorInfos(urlParams.charactorId))
        } else {
            dispatch(initializeFlavorInfo())
        }
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
                element={( entryInput )}
            />
        </SectionWrap>
    )
}

export default FlavorInfo
