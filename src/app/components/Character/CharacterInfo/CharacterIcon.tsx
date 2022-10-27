import React,{ useEffect } from 'react';
import ReactDOM from 'react-dom';
import ProfileIcon from '../../Commons/SheetParts/profileIcon'

const CharacterIcon: React.FC = () => {

    return (
        <div className="m-charCharactorIcon">
            <ProfileIcon
                label="テスト"
                name="test_img"
                setClass="s-profiles"
                default=''
                required=''
            />
        </div>
    )
}

export default CharacterIcon