import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { useAppSelector, useAppDispatch } from '../../../reducers/hooks'
import { setProfileInfo } from '../../../reducers/characterInfosSlice'

interface setProfileInfoType {
    value: string
    itemParam: string
}

type Props = {
    inputLabel:string
    itemParam: string
    itemValue: string
}

const TextEntry: React.FC<Props> = ({ inputLabel,itemParam, itemValue }) => {
    const dispatch = useAppDispatch()
    const [textInputed, setInputed] = useState('');

    const handleInputText = (itemParam: string, e: React.ChangeEvent<HTMLInputElement>) => {
        let inputedValue: setProfileInfoType = {
            value: '',
            itemParam: ''
        }
        setInputed(e.target.value)

        inputedValue.value = e.target.value
        inputedValue.itemParam = itemParam

        dispatch(setProfileInfo(inputedValue))
    }

    return (
        <li key={ itemParam } className="m-charInputText">
            <label className="m-charInputText__label" >{inputLabel !== null || inputLabel !== undefined ? inputLabel : '' }</label>
                <div className="m-charInputText__content" >
                    <input
                        type="text"
                        defaultValue={itemValue !== null || itemValue !== undefined ? itemValue : ''}
                        value={textInputed}
                        onChange={(e) => {
                            handleInputText(itemParam, e)
                        }}
                    />
            </div>
        </li>
    )
}

export default TextEntry