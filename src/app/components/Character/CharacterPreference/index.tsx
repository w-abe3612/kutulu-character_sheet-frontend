import React,{useEffect} from 'react';
import { useAppSelector } from '../../../reducers/hooks'
import { kutuluInfoType  } from '../../../type'
import SectionWrap from "../../Commons/Layout/sectionWrap"
import SentenceTextArea from '../../Commons/SheetParts/sentenceTextArea'

type Props = {
    isPage: string
}

const CharacterPreference: React.FC<Props> = (props): JSX.Element => {
    let kutuluInfo:kutuluInfoType = useAppSelector( ( state : any ) => state.kutuluInfo )
    return (
        <SectionWrap title="個人情報" >
            <SentenceTextArea
                name="character_preference"
                value={ kutuluInfo.character_preference }
                setClass=""
                setValueAction={{
                    type:'',
                    name:'',
                }}
            />
        </SectionWrap>
    )
}

export default CharacterPreference
