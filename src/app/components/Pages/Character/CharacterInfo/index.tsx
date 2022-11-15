import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../reducers/hooks'
import { useParams } from 'react-router-dom'
import ProfileIcon from '../../../Commons/SheetParts/profileIcon'
import Profiles from './Profiles'
import SectionWrap from "../../../Commons/Layout/sectionWrap"
import LoadingStateProvider from '../../../Commons/SheetParts/loadingStateProvider'
import { statesType } from '../../../../config/type'
import { initializeKutuluInfo, getKutuluInfo } from '../../../../reducers/kutuluInfoSlice'
import { initializeCharacterInfo, getCharacterInfo } from '../../../../reducers/characterInfosSlice'

type Props = {
    isPage: string
}

const CharacterInfo: React.FC<Props> = (props) => {
    const dispatch = useAppDispatch()
    const characterInfo = useAppSelector((state: statesType) => state.characterInfo)
    const kutuluInfo = useAppSelector((state: statesType) => state.kutuluInfo)
    const urlParams = useParams<{ id: any, charactorId: any }>()

    useEffect(() => {
        dispatch(initializeCharacterInfo())
        dispatch(initializeKutuluInfo())

        if (props.isPage === 'edit') {
            dispatch(getCharacterInfo(urlParams.charactorId))
            dispatch(getKutuluInfo(urlParams.charactorId))
        }
    }, [0])

    return (
        <SectionWrap
            title="個人情報"
            setClass=''
            description='' >
            <LoadingStateProvider
                isPage={props.isPage}
                loading={characterInfo.loading || kutuluInfo.loading}
                success={characterInfo.success && kutuluInfo.success}
                error=''
                element={(
                    <div className="m-characterInfo">
                        <ProfileIcon
                            image_path={characterInfo.image_path}
                            image_name={characterInfo.image_name}
                            img_upload_base64={characterInfo.img_upload_base64}
                        />
                        <Profiles
                            characterTitle={kutuluInfo.character_title}
                            playerCharacter={characterInfo.player_character}
                            playerName={characterInfo.player_name}
                            injuryValue={kutuluInfo.injury_value}
                        />
                    </div>
                )}
            />

        </SectionWrap>
    )
}

export default CharacterInfo
