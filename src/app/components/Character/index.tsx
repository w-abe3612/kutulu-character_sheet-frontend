import React, { ReactText } from 'react';
import ReactDOM from 'react-dom';
import AbilityValue from './AbilityValue'
import SpecializedSkill from './SpecializedSkills'
import FlavorInfo from './FlavorInfo'
import CharacterInfo from './CharacterInfo'
import CharacterPreference from './CharacterPreference'
import PossessionItem from './PossessionItem'

const handleformAction = (e: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
}

const CharacterCreate: React.FC = () => {
    return (
        <div className='l-wrap'>
            <form onSubmit={(e) => {
                handleformAction(e)
            }} >
                <CharacterInfo />
                <FlavorInfo />
                <AbilityValue />
                <SpecializedSkill />
                <PossessionItem />
                <CharacterPreference />
                <button
                    className="btn"
                    onClick={handleformAction}
                >更新</button>
            </form >
        </div>
    )
}

export default CharacterCreate;