import React, { ReactText } from 'react';
import {
    Navigate
} from "react-router-dom";
import { useAppSelector, useAppDispatch } from '../../reducers/hooks'
import { systemStateType } from '../../reducers/types';
import { useCharacters } from '../../queries/CharacterInfoQuery'

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
        <div>ダッシュボード</div>
    )
}

export default Dashboard;