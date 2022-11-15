import React from 'react';
import InputTextInfo from '../../../Commons/SheetParts/inputTextInfo'
import CheckParameter from '../../../Commons/SheetParts/checkParameter'
import {setCharacterInfoValue} from '../../../../reducers/characterInfosSlice'
import {setKutuluInfoValue} from '../../../../reducers/kutuluInfoSlice'
import { useAppSelector, useAppDispatch } from '../../../../reducers/hooks'

type Props = {
    characterTitle: string
    playerCharacter: string
    playerName: string
    injuryValue: number
}

const Profiles: React.FC<Props> = (props) => {
    const dispatch = useAppDispatch()
    const setCharacterInfoValueHandler = (inputName:string,e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()

        dispatch(setCharacterInfoValue({
            name: inputName,
            value: e.target.value
        }))
    }

    const setkutuluInfoValueHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()

        dispatch(setKutuluInfoValue({
            name: 'character_title',
            value: e.target.value
        }))
    }

    return (
        <div>
            <InputTextInfo
                label="プレイヤー名"
                name="player_name"
                setClass="s-profiles"
                default={props.playerName}
                required={{
                    required: '「プレイヤー名」は必須です。',
                    maxLength: {
                        value: 32,
                        message: '32文字以下で入力してください。'
                    },
                    onChange: ( e:React.ChangeEvent<HTMLInputElement> ) => setCharacterInfoValueHandler("player_name",e)
                }}
            />
            <InputTextInfo
                label="氏名"
                name="player_character"
                setClass="s-profiles"
                default={props.playerCharacter}
                required={{
                    required: '「氏名」は必須です。',
                    maxLength: {
                        value: 28,
                        message: '28文字以下で入力してください。'
                    },
                    onChange: ( e:React.ChangeEvent<HTMLInputElement> ) => setCharacterInfoValueHandler("player_character",e)
                }}
            />
            <InputTextInfo
                label="称号／肩書"
                name="character_title"
                setClass="s-profiles"
                default={props.characterTitle}
                required={{
                    maxLength: {
                        value: 28,
                        message: '28文字以下で入力してください。'
                    },
                    onChange: ( e:React.ChangeEvent<HTMLInputElement> ) => setkutuluInfoValueHandler(e)
                }}
            />
            <div className="is-fit-injury">
                <CheckParameter
                    label="負傷"
                    setClass="is-injury"
                    itemName="injury_value"
                    itemValue={props.injuryValue}
                    seconds={3}
                    isReduser='injuryValue'
                />
            </div>
        </div>

    )
}

export default Profiles