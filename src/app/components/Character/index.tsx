import React, { ReactText } from 'react';
import ReactDOM from 'react-dom';
import AbilityValue from './AbilityValue'
import SpecializedSkill from './SpecializedSkills'
import FlavorInfo from './FlavorInfo'
import CharacterInfo from './CharacterInfo'
import CharacterPreference from './CharacterPreference'
import PossessionItem from './PossessionItem'
import { useCreateCharacter } from '../../queries/CharacterQuery'
import { useForm, SubmitHandler,FormProvider } from "react-hook-form";
/*
const CharacterCreate: React.FC = () => {
    
    const createCharacter = useCreateCharacter()
    const handleformAction = (e: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
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
*/
/*
const CharacterCreate: React.FC = () => {
    const methods = useForm();
    const createCharacter = useCreateCharacter()
    const handleformAction = (e: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    return (
        <FormProvider {...methods} >
        <div className='l-wrap'>
            <form onSubmit={handleformAction} >
                <CharacterInfo />
            </form>
        </div>
        </FormProvider>
    )
}*/
//onSubmit={handleSubmit(onSubmit)}
const CharacterCreate: React.FC = () => {
    const methods = useForm();
    const createCharacter = useCreateCharacter()
    const handleformAction = (e: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    const onSubmit = (data:any) => {
        console.log(data)
        const infos = { 
            player_name:data.player_name,
            player_character:data.player_character,
            character_title:data.character_title,
            injury_value:data.injury_value,
            image_path:'../path/path/',
            image_name:'image.jpg',
            possession_item:'あああ',
            character_preference:'あああ',
        }
        
        createCharacter.mutate(infos )
    }
    return (
        
        <div className='l-wrap'>
            <FormProvider {...methods} >
                <form onSubmit={methods.handleSubmit(onSubmit)} >
                    <CharacterInfo />
                    <button
                        className="btn"
                        type="submit"
                        >更新</button>
                    </form>
            </FormProvider>
        </div>
    )
}

export default CharacterCreate;