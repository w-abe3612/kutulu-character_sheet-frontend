import React, { ReactText, useEffect } from 'react';
import ReactDOM from 'react-dom';
import AbilityValue from './AbilityValue'
import SpecializedSkill from './SpecializedSkills'
import FlavorInfo from './FlavorInfo'
import CharacterInfo from './CharacterInfo'
import CharacterPreference from './CharacterPreference'
import PossessionItem from './PossessionItem'
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { useAppSelector, useAppDispatch } from '../../../reducers/hooks'
import { getCharacterId4Url } from '../../../functions/utility'
import { submithandler } from '../../../functions/submit'
import { initializeCharacterInfo,getCharacterInfo } from '../../../reducers/characterInfosSlice'
import { initializeKutuluInfo,getKutuluInfo } from '../../../reducers/kutuluInfoSlice'
import { useParams } from 'react-router-dom'
import Header from '../../Commons/Header'
import { statesType } from '../../../config/type'

type Props = {
    isPage: string
}

const SheetLayout: React.FC<Props> = (props): JSX.Element => {
    const dispatch = useAppDispatch()
    const store = useAppSelector(( state:statesType ) => state)

    const methods = useForm()
    const characterId:number = getCharacterId4Url(props.isPage)
    const submit = submithandler()

    useEffect(()=>{
        dispatch(initializeCharacterInfo())
        dispatch(initializeKutuluInfo())
        methods.reset()

        if ( props.isPage === 'edit' ) {
            dispatch(getCharacterInfo(characterId))
            dispatch(getKutuluInfo(characterId))
        } 
    },[0])

    // 全部のstateを出してみて確認
    const onSubmit = (data: any) => {
        submit.setDatas(data)
        submit.setStates(store)
        submit.createValues()
        submit.setPurpose(props.isPage)
        submit.setCharacterId( characterId )
        submit.submit()
    }
    return (
        <div>
            <Header />
            <div className='l-wrap'>
                <FormProvider {...methods} >
                    <form onSubmit={methods.handleSubmit(onSubmit)} >
                        <CharacterInfo 
                            isPage={props.isPage}
                            playerName = { store.characterInfo.player_name }
                            playerCharacter = { store.characterInfo.player_character } 
                            characterTitle = { store.kutuluInfo.character_title }
                            injuryValue = { store.kutuluInfo.injury_value }
                            image_path = {store.characterInfo.image_path }
                            image_name = {store.characterInfo.image_name}
                            img_upload_base64 = {store.characterInfo.img_upload_base64}
                        />
                        <FlavorInfo
                            isPage={props.isPage}/>
                        <AbilityValue
                            isPage={props.isPage} />
                        <SpecializedSkill
                            isPage={props.isPage}/>
                        <PossessionItem isPage={props.isPage} />
                        <CharacterPreference isPage={props.isPage} />
                        <button
                            className="btn"
                            type="submit"
                        >更新</button>
                    </form>
                </FormProvider>
            </div>
        </div>
    )
}

export const CharacterCreate: React.FC = () => {
    return (<SheetLayout isPage="create" />)
}

export const CharacterEdit: React.FC = () => {
    return (<SheetLayout isPage="edit" />)
}