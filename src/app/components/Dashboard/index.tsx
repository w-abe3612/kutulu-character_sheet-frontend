import React, { ReactText, useEffect } from 'react';
import {
    Navigate
} from "react-router-dom";
import { useAppSelector, useAppDispatch } from '../../reducers/hooks'
import { systemStateType } from '../../reducers/types';
import CharacterItem from './characterItem'
import SectionWrap from "../Commons/Layout/sectionWrapDash"
//import { useCharacters } from '../../queries/CharacterQuery'
import { getCharacters }  from '../../reducers/dashboardIndex';

const Dashboard: React.FC = () => {
    let systemState: systemStateType = useAppSelector((state: any) => state.systemState)
    let dashboradIndex = useAppSelector((state: any) => state.dashboard)
    let aaa = <></>

    const dispatch = useAppDispatch()

    useEffect(() => {
        // 非同期処理を実行 // 引数に例として私のQiitaアカウント名を指定
        dispatch(getCharacters());
      }, [dispatch]);


    return (
        <SectionWrap title="キャラ一覧" >
            { dashboradIndex.length > 0 ||  Object.values(dashboradIndex).map(( character:any ) => {
            return <CharacterItem 
                player_id={character.id}
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