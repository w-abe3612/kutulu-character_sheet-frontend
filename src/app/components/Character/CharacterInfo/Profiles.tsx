import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import CheckButton from './checkButton'
import TextEntry from './TextEntry'

interface profilesProps {
    player_name: string
    player_character: string
    character_title: string
    injury_value: number
}

type Props = {
    profileValue: profilesProps
}

const Profiles: React.FC<Props> = ({ profileValue }) => {

    return (
        <>
            <ul>
                <TextEntry
                    inputLabel="プレイヤー名"
                    itemParam="player_name"
                    itemValue={profileValue.player_name}
                />
                <TextEntry
                    inputLabel="氏名"
                    itemParam="player_character"
                    itemValue={profileValue.player_character}
                />
                <TextEntry
                    inputLabel="称号／肩書"
                    itemParam="character_title"
                    itemValue={profileValue.character_title}
                />
            </ul>
            <div className="m-slill-item">
                <div className="m-slill-item__title"><label className="m-slill-item__title__text">名声</label></div>
                <div className="m-slill-item__content">
                    <ul className="m-check_list">
                        <CheckButton
                            itemParam="injury_value"
                            itemValue={profileValue.injury_value}
                        />
                    </ul>
                </div>
            </div>
        </>


    )
}

export default Profiles