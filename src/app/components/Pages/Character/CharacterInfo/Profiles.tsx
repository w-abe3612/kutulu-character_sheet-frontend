import React from 'react';
import InputTextInfo from '../../../Commons/SheetParts/inputTextInfo'
import CheckParameter from '../../../Commons/SheetParts/checkParameter'

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
                setValueAction={{
                    type:'characterInfo',
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
                setValueAction={{
                    type:'characterInfo',
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
                setValueAction={{
                    type:'kutuluInfo',
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