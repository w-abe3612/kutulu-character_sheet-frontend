import React, { ReactText, useEffect } from 'react';
import {
    useLocation,
    Navigate
} from "react-router-dom";
import { useAppSelector, useAppDispatch } from '../../reducers/hooks'
import { systemStateType } from '../../reducers/types';
import CharacterItem from './characterItem'
import SectionWrap from "../Commons/Layout/sectionWrapDash"
//import { useCharacters } from '../../queries/CharacterQuery'
import { getCharacters,deleteCharacterItem }  from '../../reducers/dashboardIndex';
import { useDeleteCharacter } from '../../queries/CharacterQuery'

const Dashboard: React.FC = () => {
    let systemState: systemStateType = useAppSelector((state: any) => state.systemState)
    let dashboradIndex = useAppSelector((state: any) => state.dashboard)
    
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getCharacters())
    }, [dispatch])

    return (
        <SectionWrap title="キャラ一覧" >
            { dashboradIndex.length > 0 ||  Object.values(dashboradIndex).map(( character:any ) => {
            return <CharacterItem 
                character_id={character.id}
                player_character={character.character_title}
                image_path="../img/"
                image_name="dammyUser.png"
                updateded_at={character.updated_at}
            />
        }) }
        </SectionWrap>
    )
    return <></>
}

export default Dashboard;