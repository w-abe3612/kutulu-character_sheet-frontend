import React, { ReactText } from 'react';
import {
    Navigate
} from "react-router-dom";
import { useAppSelector, useAppDispatch } from '../../reducers/hooks'
import { systemStateType } from '../../reducers/types';
import CharacterItem from './characterItem'
import SectionWrap from "../Commons/Layout/sectionWrapDash"

const Dashboard: React.FC = () => {
    let systemState: systemStateType = useAppSelector((state: any) => state.systemState)
/*
    if ( status === 'loading' ) {
        return <div className="loader" />
    } else if ( status === 'error' ) {
        return <div  >データの読み込みに失敗しました。</div>
    } else if ( !characters || characters.length <= 0 ) {
        return <div  >登録されたキャラクターはありませんでした。</div>
    }
*/
    return (
        <SectionWrap title="キャラ一覧" >
            <CharacterItem 
                player_id={1}
                player_character="波越 圭子（なみごし　けいこ）"
                image_path="../img/"
                image_name="dammyUser.png"
                updateded_at="2022-06-16 21:15:04"
            />
            <CharacterItem 
                player_id={1}
                player_character="波越 圭子（なみごし　けいこ）"
                image_path=""
                image_name=""
                updateded_at="2022-06-16 21:15:04"
            />
        </SectionWrap>
    )
}

export default Dashboard;