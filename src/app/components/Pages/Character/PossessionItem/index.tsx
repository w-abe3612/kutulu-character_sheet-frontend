import React,{useEffect} from 'react';
import { useAppSelector } from '../../../../reducers/hooks'
import { kutuluInfoType } from '../../../../config/type'
import SectionWrap from "../../../Commons/Layout/sectionWrap"
import SentenceTextArea from '../../../Commons/SheetParts/sentenceTextArea'

type Props = {
    isPage: string
}

const PossessionItem: React.FC<Props> = (props): JSX.Element => {
    let kutuluInfo:kutuluInfoType = useAppSelector( ( state : any ) => state.kutuluInfo )
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