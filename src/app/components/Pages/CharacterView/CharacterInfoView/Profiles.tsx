import React from 'react'
import ViewTextInfo from '../../../Commons/ViewPage/viewTextInfo'
import ViewParameter from '../../../Commons/ViewPage/viewParameter'


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
            <ViewTextInfo
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
            <ViewTextInfo
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
            <ViewTextInfo
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
            <ViewParameter
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