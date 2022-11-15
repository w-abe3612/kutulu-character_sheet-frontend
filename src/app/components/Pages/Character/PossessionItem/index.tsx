import React, { useEffect } from 'react';
import { useAppSelector } from '../../../../reducers/hooks'
import { kutuluInfoType } from '../../../../config/type'
import SectionWrap from "../../../Commons/Layout/sectionWrap"
import SentenceTextArea from '../../../Commons/SheetParts/sentenceTextArea'
import { statesType } from '../../../../config/type'
import LoadingStateProvider from '../../../Commons/SheetParts/loadingStateProvider'

type Props = {
    isPage: string
}

const PossessionItem: React.FC<Props> = (props): JSX.Element => {
    const kutuluInfo: kutuluInfoType = useAppSelector((state: statesType) => state.kutuluInfo)

    return (
        <SectionWrap
            title="個人情報"
            setClass='is-optional'
            description='キャラクターが持っている物をここで申告します、途中で申告されると、キーパーからしたらシナリオが崩壊しかねないので、予めここで申告しておくと安心です。' >
            <LoadingStateProvider
                isPage={props.isPage}
                loading={kutuluInfo.loading}
                success={kutuluInfo.success}
                error=''
                element={(
                    <SentenceTextArea
                        name="possession_item"
                        value={kutuluInfo.possession_item}
                        setClass=""
                        setValueAction={{
                            type: 'kutuluInfo'
                        }}
                    />
                )}
            />
        </SectionWrap>
    )
}

export default PossessionItem