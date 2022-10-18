import React, { ReactText } from 'react';
import ReactDOM from 'react-dom';
import AbilityValue from './AbilityValue'
import SpecializedSkill from './SpecializedSkills'
import FlavorInfo from './FlavorInfo'
import CharacterInfo from './CharacterInfo'
import CharacterPreference from './CharacterPreference'
import PossessionItem from './PossessionItem'
import { useCreateCharacter } from '../../queries/characterQuery'


const CharacterCreate: React.FC = () => {
    
    const createCharacter = useCreateCharacter()
    const handleformAction = (e: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        const infos = { 
            player_name:'あああ',
            player_character:'あああ',
            character_title:'あああ',
            injury_value:2,
            image_path:'../path/path/',
            image_name:'image.jpg',
            possession_item:'あああ',
            character_preference:'あああ',
        }
        
        createCharacter.mutate(infos )
        
    }
    return (
        <div className='l-wrap'>
            <form onSubmit={handleformAction} >
                <CharacterInfo />
                <FlavorInfo />
                <AbilityValue />
                <SpecializedSkill />
                <PossessionItem />
                <CharacterPreference />
                <button
                    className="btn"
                    type="submit"
                >更新</button>
            </form >
        </div>
    )
}

export default CharacterCreate;