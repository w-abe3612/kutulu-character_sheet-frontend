import React,{useEffect} from 'react';
import { useAppSelector } from '../../../reducers/hooks'
import { characterInfoType } from '../../../type'
import SectionWrap from "../../Commons/Layout/sectionWrap"
import SentenceTextArea from '../../Commons/SheetParts/sentenceTextArea'

type Props = {
    isPage: string
}

const PossessionItem: React.FC<Props> = (props): JSX.Element => {
    let CharacterInfo:characterInfoType = useAppSelector( ( state : any ) => state.characterInfo )
    useEffect(()=>{
        if(props.isPage === 'create') {
            console.log(props.isPage)
        }
    })
    return (
        <SectionWrap title="個人情報" >
            <SentenceTextArea
                name="possession_item"
                value={ CharacterInfo.possession_item }
                setClass=""
            />
        </SectionWrap>
    )
}

export default PossessionItem