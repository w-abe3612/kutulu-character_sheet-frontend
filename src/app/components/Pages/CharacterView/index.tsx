import React from 'react';

import ViewerHeader from '../../Commons/Header/viewerHeader'
import { useParams } from 'react-router-dom'
import AbilityValueView from './AbilityValueView'
import SpecializedSkillsView from './SpecializedSkillsView'
import FlavorInfoView from './FlavorInfoView'
import CharacterInfoView from './CharacterInfoView'
import CharacterPreferenceView from './CharacterPreferenceView'
import PossessionItemView from './PossessionItemView'

const CharacterView: React.FC = () => {
    const urlParams = useParams<{ publicUserPageToken: any, publicCharacterPageToken: any }>()

    return (
        <>
            <ViewerHeader />
            <div className='l-wrap'>
                <CharacterInfoView isPage='view' />
                <FlavorInfoView isPage='view' />
                <AbilityValueView isPage='view' />
                <SpecializedSkillsView isPage='view' />
                <PossessionItemView isPage='view' />
                <CharacterPreferenceView isPage='view' />
            </div>
        </>
    )
}

export default CharacterView;