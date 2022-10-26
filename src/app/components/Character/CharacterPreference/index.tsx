import React,{useEffect} from 'react';
import { useAppSelector } from '../../../reducers/hooks'
import { characterInfoType } from '../../../reducers/types'
import SectionWrap from "../../Commons/Layout/sectionWrap"
import SentenceTextArea from '../../Commons/SheetParts/sentenceTextArea'

type Props = {
    isPage: string
}

const CharacterPreference: React.FC<Props> = (props): JSX.Element => {
    let CharacterInfo:characterInfoType = useAppSelector( ( state : any ) => state.characterInfo )
    return (
        <SectionWrap title="個人情報" >
            <SentenceTextArea
                name="character_preference"
                value={ CharacterInfo.character_preference }
                setClass=""
            />
        </SectionWrap>
    )
}

export default CharacterPreference
