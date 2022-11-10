import React, { ReactText, useEffect } from 'react';
import {
    useLocation,
    Navigate
} from "react-router-dom";
import { useAppSelector, useAppDispatch } from '../../../reducers/hooks'
import CharacterItem from './characterItem'
import SectionWrap from "../../Commons/Layout/sectionWrapDash"
import { getCharacters, deleteCharacterItem } from '../../../reducers/dashboardIndex';
import { Header } from '../../Commons/Header'
import { systemStateType, statesType, dashboardIndexType } from '../../../config/type'

const Dashboard: React.FC = () => {
    const systemState: systemStateType = useAppSelector((state: statesType) => state.systemState)
    const dashboradIndex: Array<dashboardIndexType> = useAppSelector((state: statesType) => state.dashboard)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getCharacters())
    }, [dispatch])

    return (
        <>
            <Header />
            <SectionWrap title="キャラ一覧" >
                <ul className="m-dashborad-list">
                    {dashboradIndex.length > 0 || Object.values(dashboradIndex).map((character: dashboardIndexType) => {
                        return <CharacterItem
                            key={'dashboradIndex' + character.id}
                            character_id={character.id}
                            player_character={character.player_character}
                            image_path="../img/"
                            image_name="dammyUser.png"
                            updateded_at={character.updated_at}
                            character_id_hash={character.public_page_token}
                        />
                    })}
                </ul>
            </SectionWrap>
        </>
    )
    return <></>
}

export default Dashboard;