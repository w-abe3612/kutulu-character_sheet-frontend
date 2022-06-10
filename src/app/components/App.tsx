import React from 'react';
import ReactDOM from 'react-dom';
import AbilityValue from './Character/AbilityValue'
import SpecializedSkill from './Character/SpecializedSkills'
import FlavorInfo from './Character/FlavorInfo'
import CharacterInfo from './Character/CharacterInfo'
import CharacterPreference from './Character/CharacterPreference'
import PossessionItem from './Character/PossessionItem'
import Header from './Header'


const App: React.FC = () =>  {
    return (
        <div className='l-layout' >
            <div className='l-inner'>
                <Header />
                <div className='l-wrap'>
                    <CharacterInfo />
                    <FlavorInfo />
                    <AbilityValue />
                    <SpecializedSkill />
                    <PossessionItem />
                    <CharacterPreference />
                </div>
            </div>
        </div>
    )
}

export default App;