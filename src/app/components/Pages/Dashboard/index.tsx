import React, { useEffect } from 'react';
import {
    useLocation,
    Navigate
} from "react-router-dom";
import { useAppSelector, useAppDispatch } from '../../../reducers/hooks'
import CharacterItem from './characterItem'
import SectionWrap from "../../Commons/Layout/sectionWrapDash"
import { getCharacters, deleteCharacterItem } from '../../../reducers/dashboardIndex';
import Header from '../../Commons/Header'
import { statesType, dashboardIndexType } from '../../../config/type'

const Dashboard: React.FC = () => {
    let result: JSX.Element = <></>
    const dashboradIndex: dashboardIndexType = useAppSelector((state: statesType) => state.dashboard)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getCharacters())
    }, [dispatch])

    if (dashboradIndex.loading === true) {
        result = (
            <div className="m-page-loading">
                <div className="inner-box">
                    <div className="loading-animation"></div>
                    <p className="loading-message">Now Loading</p>
                </div>
            </div>
        )
    } else if (dashboradIndex.loading === false
        && dashboradIndex.success === false) {
        // 失敗
        // todo このパターンを作り込む
        result = (
            <div className="m-loading">読み込みに失敗しました</div>
        )

    } else if (dashboradIndex.loading === false
        && dashboradIndex.success === true) {
        // 読み込み完了
        result = (
            <SectionWrap title="キャラ一覧" >
                <ul className="m-dashborad-list">
                    { dashboradIndex.infos.length > 0 && dashboradIndex.infos.map((character: any) => {
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
        )
    }

    return (
        <>
            <Header />
            { result }
        </>
    )
}

export default Dashboard;