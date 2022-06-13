import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useAppSelector, useAppDispatch } from '../../../reducers/hooks'
import { characterInfoType } from '../../../reducers/types'
import { setTextAreaInfo } from '../../../reducers/characterInfosSlice'


const PossessionItem: React.FC = () => {
    const [textAreaInputed, setInputed] = useState('');
    const CharacterInfo: characterInfoType = useAppSelector((state: any) => state.CharacterInfo)
    const dispatch = useAppDispatch()

    const handleInputTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputed(e.target.value)

        // todo stateと値を同じにするつもりでやってるけど、これだと意味ないかも
        dispatch(setTextAreaInfo({
            value: e.target.value,
            itemParam: "possession_item"
        }))
    }

    return (
        <div className="m-flavor_info l-section_wrap">
            <div className="l-section_Tab"></div>
            <div className="l-section_content">
                <textarea
                    name="possession_item"
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

export default PossessionItem