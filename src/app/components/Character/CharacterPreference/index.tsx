import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useAppSelector, useAppDispatch } from '../../../reducers/hooks'
import { characterInfoType } from '../../../reducers/types'
import { setTextAreaInfo } from '../../../reducers/characterInfosSlice'


const CharacterPreference: React.FC = () => {
    const [textAreaInputed, setInputed] = useState('');
    const CharacterInfo: Array<characterInfoType> = useAppSelector((state: any) => state.CharacterInfo)
    const dispatch = useAppDispatch()

    const handleInputTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputed(e.target.value)

        dispatch(setTextAreaInfo({
            value: e.target.value,
            itemParam: "character_preference"
        }))
    }

    return (
        <div className="m-flavor_info l-section_wrap">
            <div className="l-section_Tab"></div>
            <div className="l-section_content">
                <textarea
                    name="character_preference"
                    value={textAreaInputed}
                    onChange={(e) => {
                        handleInputTextArea(e)
                    }}
                    cols={50}
                    rows={5} />
            </div>
        </div>
    )
}

export default CharacterPreference
