import React, { useState, useEffect } from 'react';
import { useFormContext } from "react-hook-form";
import { useAppSelector, useAppDispatch } from '../../../reducers/hooks'
import { setInjuryValue } from '../../../reducers/kutuluInfoSlice'
import { setAbilityValues } from '../../../reducers/abilityValuesSlice'
import { setSpecializedSkill } from '../../../reducers/specializedSkillsSlice'

const ItemBtn: React.FC<any> = ({ itemName, itemValue, seconds, isReduser }) => {
    const [btnChecked, setChecked] = useState(false);
    const dispatch = useAppDispatch()
    // 後でstate変更による再レンダリングのみで表現したい
    const { setValue } = useFormContext();

    const switchReduserDispatch = (isReduser: string, setAction: any) => {
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

    const handleSkillPointCheck = (itemValue: number, btnChecked: any, paramName: string, e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        let checkvalue: number = 0

        checkvalue = e.currentTarget.getAttribute('data-num') !== undefined
            || e.currentTarget.getAttribute('data-num') !== null
            ? Number(e.currentTarget.getAttribute('data-num')) : 0

        if (btnChecked === true && itemValue === checkvalue) {
            checkvalue = checkvalue - 1
        }

        let setCheckedAction: any = {
            value: 0,
            itemParam: ''
        }

        setCheckedAction.value = checkvalue
        setCheckedAction.itemParam = paramName

        switchReduserDispatch(isReduser, setCheckedAction)
        // 後でstate変更による再レンダリングのみで表現したい
        //setValue(paramName, checkvalue)
    }

    // チェックされたのが2だった場合、1もチェックされる
    const checkedInit = (btnChecked: any, itemValue: number, seconds: number) => {
        setChecked(false)

        if (itemValue >= seconds) {
            setChecked(true)
        }
    }
    useEffect(() => {
        checkedInit(btnChecked, itemValue, seconds)
    });

    return (
        <li key={itemName + seconds} className="m-checkParameter_items" >
            <div className="item-inner">
                <input
                    type="checkbox"
                    className="item-checkbox"
                    id={itemName + seconds}
                    name={itemName + seconds}
                    data-num={seconds}
                    onChange={(e) => {
                        handleSkillPointCheck(itemValue, btnChecked, itemName, e)
                    }}
                    checked={btnChecked}
                />
                <label
                    className="item-label"
                    htmlFor={itemName + seconds}
                ></label>
            </div>
        </li>
    )
}

type Props = {
    label: string
    setClass: string
    itemName: string
    itemValue: number
    seconds: number
    isReduser: string
}

const CheckParameter: React.FC<Props> = (props): JSX.Element => {
    let defaultValue = 0
    let seconds: number = props.seconds
    const { setValue } = useFormContext();


    const parameterSeconds = (itemName: string, itemValue: number, isReduser: string): Array<JSX.Element> => {
        let result: Array<JSX.Element> = []
        for (let i: number = 0; seconds >= i; ++i) {
            if (i === 0) {
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