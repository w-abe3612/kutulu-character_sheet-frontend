import React, { useState, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../../reducers/hooks'
import { setInjuryValue } from '../../../reducers/characterInfosSlice'

type Props = {
    itemParam: string
    itemValue: number
    seconds: number
}

interface setInjuryValueType {
    value: number,
    itemParam: string
  }

const ItemBtn: React.FC<Props> = ({ itemParam, itemValue, seconds }) => {
    const dispatch = useAppDispatch()
    const [ btnChecked, setChecked ] = useState(false);

    // もし値が同じならひとつ消える
    const handleSkillPointCheck = ( itemValue:number,btnChecked: any, paramName: string, e: React.ChangeEvent<HTMLInputElement> ) => {
        e.preventDefault()
        let checkvalue: number = 0
        let setCheckedAction:setInjuryValueType = {
            value: 0,
            itemParam: ''
        }

        checkvalue = e.currentTarget.getAttribute('data-num') !== undefined
            || e.currentTarget.getAttribute('data-num') !== null
            ? Number( e.currentTarget.getAttribute('data-num') ) : 0


        if( btnChecked === true && itemValue === checkvalue ) {
            checkvalue = checkvalue - 1
        }
        
        setCheckedAction.value     = checkvalue
        setCheckedAction.itemParam = paramName

        dispatch( setInjuryValue( setCheckedAction ) )
    }

    // チェックされたのが2だった場合、1もチェックされる
    const checkedInit = ( btnChecked: any, itemValue: number, seconds: number ) => {
        setChecked(false)

        if ( itemValue >= seconds ) {
            setChecked(true)
        }
    }
    useEffect(() => {
        checkedInit( btnChecked, itemValue, seconds )
    });

    return (
        <li key={itemParam + seconds} className="m-check_list__li" >
            <div>
                <input
                    type="checkbox"
                    className="m-check_input"
                    id={itemParam + seconds}
                    name={itemParam + seconds}
                    data-num={seconds}
                    onChange={(e) => {
                        handleSkillPointCheck( itemValue, btnChecked, itemParam, e )
                    }}
                    checked={ btnChecked }
                />
                <label
                    className="m-check_label"
                    htmlFor={itemParam + seconds}
                ></label>
            </div>
        </li>
    )
}

export default ItemBtn
