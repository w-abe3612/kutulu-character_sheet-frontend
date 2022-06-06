import React from 'react';
import ReactDOM from 'react-dom';
import SkillCheck from './Character/AbilityValue'
import Header from './Header'


const App: React.FC = () =>  {
    return (
        <div className='l-layout' >
            <div className='l-inner'>
                <Header />
                <div className='l-wrap'>
                    <SkillCheck />
                </div>
            </div>
        </div>
    )
}

export default App;