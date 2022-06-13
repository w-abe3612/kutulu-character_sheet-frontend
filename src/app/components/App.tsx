import React from 'react';
import ReactDOM from 'react-dom';
import CharacterCreate from './Character'
import Header from './Header'


const App: React.FC = () =>  {
    return (
        <div className='l-layout' >
            <div className='l-inner'>
                <Header />
                <CharacterCreate />
            </div>
        </div>
    )
}

export default App;