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
    const urlParams = useParams<{ id: any, charactorId: any }>()
    const submit = submithandler()

    useEffect(()=>{
        methods.reset()
    },[0])

    // 全部のstateを出してみて確認
    const onSubmit = (data: any) => {
        submit.setDatas(data)
        submit.setStates(store)
        submit.createValues()
        submit.setPurpose(props.isPage)
        submit.setCharacterId( urlParams.charactorId )
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