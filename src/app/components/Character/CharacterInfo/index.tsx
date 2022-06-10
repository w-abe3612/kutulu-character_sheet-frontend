import React,{ useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useAppSelector, useAppDispatch } from '../../../reducers/hooks'
import { characterInfoType } from '../../../reducers/types'
import CharacterIcon from './CharacterIcon'
import Profiles from './Profiles'

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

const CharacterInfo: React.FC = () => {
    let CharacterInfo:characterInfoType = useAppSelector( ( state : any ) => state.characterInfo )
    let profileValue : profilesProps = {
        player_name:'',
        player_character:'',
        character_title:'',
        injury_value:0
    }

    profileValue.player_name      = CharacterInfo.player_name
    profileValue.player_character = CharacterInfo.player_character
    profileValue.character_title  = CharacterInfo.character_title
    profileValue.injury_value     = CharacterInfo.injury_value

    console.log(CharacterInfo)

    return (
        <div className="m-flavor_info l-section_wrap">
            <div className="l-section_Tab"></div>
            <div className="l-section_content">
                <div className="">
                    <CharacterIcon />
                    <Profiles profileValue={ profileValue }/>
                </div>
            </div>
        </div>
    )
}

export default CharacterInfo
