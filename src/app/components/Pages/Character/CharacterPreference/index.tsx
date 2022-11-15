import React, { useEffect } from 'react';
import { useAppSelector } from '../../../../reducers/hooks'
import { kutuluInfoType, statesType } from '../../../../config/type'
import SectionWrap from "../../../Commons/Layout/sectionWrap"
import SentenceTextArea from '../../../Commons/SheetParts/sentenceTextArea'
import LoadingStateProvider from '../../../Commons/SheetParts/loadingStateProvider'

type Props = {
    isPage: string
}

const CharacterPreference: React.FC<Props> = (props): JSX.Element => {
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
                    <SentenceTextArea
                        name="character_preference"
                        value={kutuluInfo.character_preference}
                        setClass=""
                        setValueAction={{
                            type: '',
                            name: '',
                        }}
                    />
                )}
            />
        </SectionWrap>
    )
}

export default CharacterPreference
