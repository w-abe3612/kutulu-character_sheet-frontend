import React from 'react';
import ViewerHeader from '../../Commons/Header/viewerHeader'
import AbilityValueView from './AbilityValueView'
import SpecializedSkillsView from './SpecializedSkillsView'
import FlavorInfoView from './FlavorInfoView'
import CharacterInfoView from './CharacterInfoView'
import CharacterPreferenceView from './CharacterPreferenceView'
import PossessionItemView from './PossessionItemView'


const CharacterView: React.FC = () => {
    /*
    useEffect(()=>{
        dispatch(initializeCharacterInfo())
        dispatch(initializeKutuluInfo())

        dispatch(getCharacterInfo(characterId))
        dispatch(getKutuluInfo(characterId))
    },[0])
    */
    return (
        <div>
            <ViewerHeader />
            <CharacterInfoView 
                playerName = ''
                playerCharacter = '' 
                characterTitle = ''
                injuryValue = {0}
                image_path = ''
                image_name = ''
                img_upload_base64 = ''
            />
            <FlavorInfoView />
            <AbilityValueView />
            <SpecializedSkillsView />
            <PossessionItemView />
            <CharacterPreferenceView />
            
        </div>
    )
}

export default CharacterView;