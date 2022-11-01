import React, { useState, useEffect } from 'react';
import { useFormContext } from "react-hook-form";
import { useAppDispatch } from '../../../reducers/hooks'
import { setInjuryValue } from '../../../reducers/kutuluInfoSlice'
import { setAbilityValues } from '../../../reducers/abilityValuesSlice'
import { setSpecializedSkill } from '../../../reducers/specializedSkillsSlice'
import { setCheckedActionType } from '../../../config/type'

type itembtnProps = { 
    itemName:string
    itemValue:number
    seconds:number
    isReduser:string
}

const ItemBtn: React.FC<itembtnProps> = (props): JSX.Element => {
    const [btnChecked, setChecked] = useState(false);
    const dispatch = useAppDispatch()
    // 後でstate変更による再レンダリングのみで表現したい
    const { setValue } = useFormContext();

    const switchReduserDispatch = (isReduser: string, setAction:setCheckedActionType) => {
        switch (isReduser) {
            case 'injuryValue':
                dispatch(setInjuryValue(setAction))
                break;
            case 'abilityValues':
                dispatch(setAbilityValues(setAction))
                break;
            case 'specializedSkill':
                dispatch(setSpecializedSkill(setAction))
                break;
        }
    }

    const handleSkillPointCheck = (itemValue: number, btnChecked: boolean, paramName: string, e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        let checkvalue: number = 0

        checkvalue = e.currentTarget.getAttribute('data-num') !== undefined
            || e.currentTarget.getAttribute('data-num') !== null
            ? Number(e.currentTarget.getAttribute('data-num')) : 0

        if (btnChecked === true && itemValue === checkvalue) {
            checkvalue = checkvalue - 1
        }

        let setCheckedAction: setCheckedActionType = {
            value: 0,
            name: ''
        }

        setCheckedAction.value = checkvalue
        setCheckedAction.name = paramName

        switchReduserDispatch(props.isReduser, setCheckedAction)
    }

    const checkedInit = (btnChecked: boolean, itemValue: number, seconds: number) => {
        setChecked(false)

        if (itemValue >= seconds) {
            setChecked(true)
        }
    }

    useEffect(() => {
        checkedInit( btnChecked, props.itemValue, props.seconds )
    },[props]);

    return (
        <li key={props.itemName + props.seconds} className="m-checkParameter_items" >
            <div className="item-inner">
                <input
                    type="checkbox"
                    className="item-checkbox"
                    id={props.itemName + props.seconds}
                    name={props.itemName + props.seconds}
                    data-num={props.seconds}
                    onChange={(e) => {
                        handleSkillPointCheck(props.itemValue, btnChecked, props.itemName, e)
                    }}
                    checked={btnChecked}
                />
                <label
                    className="item-label"
                    htmlFor={props.itemName + props.seconds}
                ></label>
            </div>
        </li>
    )
}

type mainProps = {
    label: string
    setClass: string
    itemName: string
    itemValue: number
    seconds: number
    isReduser: string
}

const CheckParameter: React.FC<mainProps> = (props): JSX.Element => {
    const dispatch = useAppDispatch()
    let defaultValue = 0
    let seconds: number = props.seconds
    const { setValue } = useFormContext();

    const parameterSeconds = (itemName: string, itemValue: number, isReduser: string): Array<JSX.Element> => {
        let result: Array<JSX.Element> = []
        for (let i: number = 0; seconds >= i; ++i) {
            if ( i === 0 ) {
                result[i] = <></>
            } else {
                result[i] = (
                    <ItemBtn
                        itemName={itemName}
                        itemValue={itemValue}
                        seconds={i}
                        isReduser={isReduser}
                    />)
            }
        }

        return result.map((checkButton: JSX.Element) => {
            return checkButton
        })
    }

    useEffect(()=> {
        setValue( props.itemName, props.itemValue !== null ? props.itemValue: 0 )
    },[props])

    return (
        <div className="m-checkParameter">
            <div className={`input-group ${props.setClass && props.setClass}`} >
                <label className="input-title">{props.label}</label>
                <div className="input-content" >
                    <ul className="button-list">
                        {parameterSeconds(props.itemName, props.itemValue, props.isReduser)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CheckParameter;