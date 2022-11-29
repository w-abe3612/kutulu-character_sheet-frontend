import React, { useState, useEffect } from 'react';
import AbilityValue from './AbilityValue'
import SpecializedSkill from './SpecializedSkills'
import FlavorInfo from './FlavorInfo'
import CharacterInfo from './CharacterInfo'
import CharacterPreference from './CharacterPreference'
import PossessionItem from './PossessionItem'
import { useForm, FormProvider } from "react-hook-form";
import { useAppSelector } from '../../../reducers/hooks'
import { submithandler } from '../../../functions/submit'
import { useParams } from 'react-router-dom'
import { statesType } from '../../../config/type'
import SubmitButton from '../../Commons/SheetParts/submitButton'
import MainLayout from '../../Commons/Layout/mainLayout'

type Props = {
    isPage: string
}

const SheetLayout: React.FC<Props> = (props): JSX.Element => {
    const [submitDisabled, setSubmitDisabled] = useState(false);

    const store = useAppSelector((state: statesType) => state)

    const methods = useForm()
    const urlParams = useParams<{ id: any, charactorId: any }>()
    const submit = submithandler()

    useEffect(() => {
        methods.reset()
    }, [0])

    // 全部のstateを出してみて確認
    const onSubmit = (data: any) => {
        setSubmitDisabled(true)
        submit.setDatas(data)
        submit.setStates(store)
        submit.createValues()
        submit.setPurpose(props.isPage)
        submit.setCharacterId(urlParams.charactorId)
        submit.submit()

        setTimeout(() => {
            setSubmitDisabled(false);
        }, 3000);
    }
    return (
        <MainLayout
            setClass=''
        >
            <FormProvider {...methods} >
                <form onSubmit={methods.handleSubmit(onSubmit)} >
                    <div className='l-wrap'>
                        <CharacterInfo
                            isPage={props.isPage}
                        />
                        <FlavorInfo
                            isPage={props.isPage} />
                        <AbilityValue
                            isPage={props.isPage} />
                        <SpecializedSkill
                            isPage={props.isPage} />
                        <PossessionItem isPage={props.isPage} />
                        <CharacterPreference isPage={props.isPage} />
                    </div>
                    <SubmitButton 
                        isPage={props.isPage}
                        isDisabled={submitDisabled} />
                </form>
            </FormProvider>
        </MainLayout>
    )
}

export const CharacterCreate: React.FC = () => {
    return (<SheetLayout isPage="create" />)
}

export const CharacterEdit: React.FC = () => {
    return (<SheetLayout isPage="edit" />)
}