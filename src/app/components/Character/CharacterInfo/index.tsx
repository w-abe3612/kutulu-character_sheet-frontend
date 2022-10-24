import React,{ useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useAppSelector, useAppDispatch } from '../../../reducers/hooks'
import { characterInfoType } from '../../../reducers/types'
import CharacterIcon from './CharacterIcon'
import Profiles from './Profiles'
import SectionWrap from "../../Commons/Layout/sectionWrap"

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
}

const CharacterInfo: React.FC<Props> = (props) => {
    let CharacterInfo:characterInfoType = useAppSelector( ( state : any ) => state.characterInfo )
    let profileValue : profilesProps = {
        player_name:'',
        player_character:'',
        character_title:'',
        injury_value:0
    }
    useEffect(()=>{
        if(props.isPage === 'create') {
            console.log(props.isPage)
        } else if(props.isPage === 'edit') {
            console.log(props.isPage)
        }
    })

    profileValue.player_name      = CharacterInfo.player_name
    profileValue.player_character = CharacterInfo.player_character
    profileValue.character_title  = CharacterInfo.character_title
    profileValue.injury_value     = CharacterInfo.injury_value

    return (
        <SectionWrap title="個人情報" >
            <div className="m-characterInfo">
                <CharacterIcon />
                <Profiles profileValue={ profileValue }/>
            </div>
        </SectionWrap>
    )
}

export default CharacterInfo
