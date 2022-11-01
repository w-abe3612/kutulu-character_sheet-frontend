import React,{useEffect} from 'react';
import { useAppSelector } from '../../../../reducers/hooks'
import { kutuluInfoType } from '../../../../config/type'
import SectionWrap from "../../../Commons/Layout/sectionWrap"
import SentenceTextArea from '../../../Commons/SheetParts/sentenceTextArea'
import { statesType } from '../../../../config/type'

type Props = {
    isPage: string
}

const PossessionItem: React.FC<Props> = (props): JSX.Element => {
    const kutuluInfo:kutuluInfoType = useAppSelector( ( state:statesType ) => state.kutuluInfo )

    return (
        <SectionWrap title="個人情報" >
            <SentenceTextArea
                name="possession_item"
                value={ kutuluInfo.possession_item }
                setClass=""
                setValueAction={{
                    type:'kutuluInfo'
                }}
            />
        </SectionWrap>
    )
}

export default PossessionItem