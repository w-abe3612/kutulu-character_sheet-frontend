import React,{ useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useAppSelector, useAppDispatch } from '../../../reducers/hooks'
import { characterInfoType } from '../../../reducers/types'
import CharacterIcon from './CharacterIcon'
import Profiles from './Profiles'
import SectionWrap from "../../Commons/Layout/sectionWrap"
import { initializeCharacterInfo,getCharacterInfo } from '../../../reducers/characterInfosSlice'
import { getCharacterId4Url } from '../../../functions/utility'


interface iconProps {
    image_path:string
    image_name:string
}

interface profilesProps {
    player_name:string
    player_character:string
    character_title:string
    injury_value:number
}
type Props = {
    isPage: string
    characterTitle:string
    playerCharacter:string
    playerName:string
    injuryValue:number
}

const CharacterInfo: React.FC<Props> = (props) => {
    const dispatch = useAppDispatch()

    return (
        <SectionWrap title="個人情報" >
            <div className="m-characterInfo">
                <CharacterIcon />
                <Profiles 
                    characterTitle = {props.characterTitle}
                    playerCharacter = {props.playerCharacter}
                    playerName = {props.playerName}
                    injuryValue = {props.injuryValue}
                />
            </div>
        </SectionWrap>
    )
}

export default CharacterInfo
