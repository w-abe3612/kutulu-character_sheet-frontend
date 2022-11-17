import React, { useEffect } from 'react';
import { useAppSelector } from '../../../../reducers/hooks'
import { kutuluInfoType } from '../../../../config/type'
import SectionWrap from "../../../Commons/Layout/sectionWrap"
import { statesType } from '../../../../config/type'
import LoadingStateProvider from '../../../Commons/SheetParts/loadingStateProvider'
import ViewTextInfo from '../../../Commons/ViewPage/viewTextArea'

type Props = {
    isPage: string
}

const PossessionItemView: React.FC<Props> = (props): JSX.Element => {
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
                    <ViewTextInfo
                        setClass=''
                        default={kutuluInfo.possession_item}
                    />
                )}
            />
        </SectionWrap>
    )
}

export default PossessionItemView