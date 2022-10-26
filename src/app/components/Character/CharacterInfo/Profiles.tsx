import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import InputTextInfo from '../../Commons/SheetParts/inputTextInfo'
import CheckParameter from '../../Commons/SheetParts/checkParameter'


interface profilesProps {
    player_name: string
    player_character: string
    character_title: string
    injury_value: number
}

type Props = {
    characterTitle:string
    playerCharacter:string
    playerName:string
    injuryValue:number
}

const Profiles: React.FC<Props> = (props) => {
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
                        value: 16,
                        message: '16文字以下で入力してください。'
                    }
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
                        value: 16,
                        message: '16文字以下で入力してください。'
                    }
                }}
            />
            <InputTextInfo
                label="称号／肩書"
                name="character_title"
                setClass="s-profiles"
                default={props.characterTitle}
                required={{
                    required: '「称号／肩書」は必須です。',
                    maxLength: {
                        value: 16,
                        message: '16文字以下で入力してください。'
                    }
                }}
            />
            <CheckParameter
                label="負傷"
                setClass=""
                itemName="injury_value"
                itemValue={props.injuryValue}
                seconds={3}
                isReduser='injuryValue'
            />
        </div>

    )
}

export default Profiles