import React,{ useEffect } from 'react';
import ReactDOM from 'react-dom';
import InputImgFile from '../../Commons/SheetParts/inputFile'

const CharacterIcon: React.FC = () => {

    return (
        <div className="m-charCharactorIcon">
            <div className="m-charCharactorIcon__inner">
                <InputImgFile
                    label="テスト"
                    name="test_img"
                    setClass="s-profiles"
                    default=''
                    required=''
                />
            </div>
        </div>
    )
}

export default CharacterIcon