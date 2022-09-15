import React, { ReactText } from 'react';
import {
    Navigate
} from "react-router-dom";
import { useAppSelector, useAppDispatch } from '../../reducers/hooks'
import { systemStateType } from '../../reducers/types';
import { useCharacters } from '../../queries/CharacterInfoQuery'
import CharacterItem from './characterItem'
import SectionWrap from "../Commons/Layout/sectionWrap"

const Dashboard: React.FC = () => {
    let systemState: systemStateType = useAppSelector((state: any) => state.systemState)

    const { data:characters, status } = useCharacters( systemState.userId )

    if ( status === 'loading' ) {
        return <div className="loader" />
    } else if ( status === 'error' ) {
        return <div  >データの読み込みに失敗しました。</div>
    } else if ( !characters || characters.length <= 0 ) {
        return <div  >登録されたキャラクターはありませんでした。</div>
    }

    return (
        <SectionWrap title="キャラ一覧" >
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