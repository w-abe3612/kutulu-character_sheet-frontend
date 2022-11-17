import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../reducers/hooks'
import { useParams } from 'react-router-dom'
import ViewTextInfo from '../../../Commons/ViewPage/viewTextInfo'
import ViewParameter from '../../../Commons/ViewPage/viewParameter'
import SectionWrap from "../../../Commons/Layout/sectionWrap"
import LoadingStateProvider from '../../../Commons/SheetParts/loadingStateProvider'
import { statesType } from '../../../../config/type'
import { initializeCharacterInfo, viewCharacterInfo } from '../../../../reducers/characterInfosSlice'
import { initializeKutuluInfo, viewKutuluInfo } from '../../../../reducers/kutuluInfoSlice'
import ViewProfileIcon from '../../../Commons/ViewPage/viewProfileIcon'

type Props = {
    isPage: string
}

const CharacterInfoView: React.FC<Props> = (props) => {
    const dispatch = useAppDispatch()
    const characterInfo = useAppSelector((state: statesType) => state.characterInfo)
    const kutuluInfo = useAppSelector((state: statesType) => state.kutuluInfo)
    const urlParams = useParams<{ publicUserPageToken: string, publicCharacterPageToken: string }>()

    useEffect(() => {
        dispatch(initializeCharacterInfo())
        dispatch(initializeKutuluInfo())

        dispatch(viewCharacterInfo({
            userPageToken: urlParams.publicUserPageToken !== undefined ? urlParams.publicUserPageToken : '',
            characterPageToken: urlParams.publicCharacterPageToken !== undefined ? urlParams.publicCharacterPageToken : ''
        }))
        dispatch(viewKutuluInfo({
            userPageToken: urlParams.publicUserPageToken !== undefined ? urlParams.publicUserPageToken : '',
            characterPageToken: urlParams.publicCharacterPageToken !== undefined ? urlParams.publicCharacterPageToken : ''
        }))
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
                        <ViewProfileIcon 
                            image_path = ''
                            image_name = ''
                        />
                        <div>
                            <ViewTextInfo
                                label="プレイヤー名"
                                setClass="s-profiles"
                                default={characterInfo.player_name}

                            />
                            <ViewTextInfo
                                label="氏名"
                                setClass="s-profiles"
                                default={characterInfo.player_character}

                            />
                            <ViewTextInfo
                                label="称号／肩書"
                                setClass="s-profiles"
                                default={kutuluInfo.character_title}
                            />
                            <div className="is-fit-injury">
                                <ViewParameter 
                                    label="負傷"
                                    setClass="is-injury"
                                    itemName="injury_value"
                                    itemValue={kutuluInfo.injury_value}
                                    seconds={3}
                                />
                            </div>
                        </div>
                    </div>
                )}
            />

        </SectionWrap>
    )
}

export default CharacterInfoView
