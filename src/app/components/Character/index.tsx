import React, { ReactText, useEffect } from 'react';
import ReactDOM from 'react-dom';
import AbilityValue from './AbilityValue'
import SpecializedSkill from './SpecializedSkills'
import FlavorInfo from './FlavorInfo'
import CharacterInfo from './CharacterInfo'
import CharacterPreference from './CharacterPreference'
import PossessionItem from './PossessionItem'
import { useCreateCharacter,useCharactorInfo } from '../../queries/CharacterQuery'
import { useForm, SubmitHandler,FormProvider } from "react-hook-form";
import { useAppSelector, useAppDispatch } from '../../reducers/hooks'
import { getCharacterId4Url } from '../../functions/utility'
import { submithandler } from '../../functions/submit'

type Props = {
    isPage: string
}

const SheetLayout: React.FC<Props> = (props):JSX.Element => {
    const store = useAppSelector((state: any) => state)
    const methods = useForm();
    const characterId:number = getCharacterId4Url(props.isPage)
    const submit = submithandler()
    const onSubmit = (data:any) => {
        submit.setDatas(data)
        submit.setStates(store)
        submit.createValues()
        submit.submit()
    }
    return (
        <div className='l-wrap'>
            <FormProvider {...methods} >
                <form onSubmit={methods.handleSubmit(onSubmit)} >
                    <CharacterInfo isPage={props.isPage} />
                    <FlavorInfo 
                        isPage={props.isPage} 
                        characterId={ characterId } />
                    <AbilityValue 
                        isPage={props.isPage} 
                        characterId={ characterId } />
                    <SpecializedSkill 
                        isPage={props.isPage} 
                        characterId={ characterId } />
                    <PossessionItem isPage={props.isPage} />
                    <CharacterPreference isPage={props.isPage} />
                    <button
                        className="btn"
                        type="submit"
                        >更新</button>
                    </form>
            </FormProvider>
        </div>
    )
}

export const CharacterCreate: React.FC = () => {
    return (<SheetLayout isPage="create" />)
}

export const CharacterEdit: React.FC = () => {
    return (<SheetLayout isPage="edit" />)
}