import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { useAppSelector, useAppDispatch } from '../../../reducers/hooks'

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

    }

    return (
        <li key={ itemParam } className="">
            <label className="" >{inputLabel !== null || inputLabel !== undefined ? inputLabel : '' }</label>
            <div className="" >
                <input
                    className=""
                    type="text"
                    defaultValue={itemValue !== null || itemValue !== undefined ? itemValue : ''}
                    value={textInputed}
                />
            </div>
        </li>
    )
}

export default TextEntry