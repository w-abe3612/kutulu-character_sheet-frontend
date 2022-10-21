import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import CheckButton from './checkButton'
import TextEntry from './TextEntry'
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
    profileValue: profilesProps
}
export interface inputTextInfoPropsType {
    label: string
    name: string
    register: any
    required: any
}
const Profiles: React.FC<Props> = ({ profileValue }) => {

    return (
        <div>
            <ul>
                <InputTextInfo
                    label="プレイヤー名"
                    name="player_name"
                    setClass="s-profiles"
                    required={{
                        required:'「プレイヤー名」は必須です。',
                        maxLength : {
                            value: 16,
                            message: '16文字以下で入力してください。'
                        }
                    }}
                />
                <InputTextInfo
                    label="氏名"
                    name="player_character"
                    setClass="s-profiles"
                    required={{
                        required:'「氏名」は必須です。',
                        maxLength : {
                            value: 16,
                            message: '16文字以下で入力してください。'
                        }
                    }}
                />
                <InputTextInfo
                    label="称号／肩書"
                    name="character_title"
                    setClass="s-profiles"
                    required={{
                        required:'「称号／肩書」は必須です。',
                        maxLength : {
                            value: 16,
                            message: '16文字以下で入力してください。'
                        }
                    }}
                />
            </ul>
            <CheckParameter
                label="負傷"
                setClass=""
                itemName="injury_value"
                itemValue={profileValue.injury_value}
                seconds={3}
            />
        </div>

    )
}

export default Profiles