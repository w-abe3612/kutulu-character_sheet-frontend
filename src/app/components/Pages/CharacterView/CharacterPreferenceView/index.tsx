import React, { useEffect } from 'react';
import { useAppSelector } from '../../../../reducers/hooks'
import { kutuluInfoType, statesType } from '../../../../config/type'
import SectionWrap from "../../../Commons/Layout/sectionWrap"
import LoadingStateProvider from '../../../Commons/SheetParts/loadingStateProvider'
import ViewTextInfo from '../../../Commons/ViewPage/viewTextArea'

type Props = {
    isPage: string
}

const CharacterPreferenceView: React.FC<Props> = (props): JSX.Element => {
    let kutuluInfo: kutuluInfoType = useAppSelector((state: statesType) => state.kutuluInfo)

    return (
        <SectionWrap
            title="キャラクター・プロフィール"
            setClass='is-optional'
            description='キャラクターの性格や、経験してきた事、設定等を書く為の欄です。入力は任意になります。2000字までしか入力できないから、凝りすぎるとオーバーしちゃうかも。' >
            <LoadingStateProvider
                isPage={props.isPage}
                loading={kutuluInfo.loading}
                success={kutuluInfo.success}
                error=''
                element={(
                    <ViewTextInfo
                        setClass=''
                        default={kutuluInfo.character_preference}
                    />
                )}
            />
        </SectionWrap>
    )
}

export default CharacterPreferenceView
