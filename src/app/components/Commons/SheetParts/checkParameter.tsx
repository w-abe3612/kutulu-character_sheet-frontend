import React, { useState, useEffect } from 'react';
import { useFormContext } from "react-hook-form";
import { useAppSelector, useAppDispatch } from '../../../reducers/hooks'
import { setInjuryValue } from '../../../reducers/characterInfosSlice'

const ItemBtn: React.FC<any> = ({ itemName, itemValue, seconds }) => {
    const [ btnChecked, setChecked ] = useState(false);
    const dispatch = useAppDispatch()

    const handleSkillPointCheck = ( itemValue:number,btnChecked: any, paramName: string, e: React.ChangeEvent<HTMLInputElement> ) => {
        e.preventDefault()
        let checkvalue: number = 0

        checkvalue = e.currentTarget.getAttribute('data-num') !== undefined
            || e.currentTarget.getAttribute('data-num') !== null
            ? Number( e.currentTarget.getAttribute('data-num') ) : 0


        if( btnChecked === true && itemValue === checkvalue ) {
            checkvalue = checkvalue - 1
        }

        let setCheckedAction:any = {
            value: 0,
            itemParam: ''
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
        <li key={itemName + seconds} className="m-checkParameter_items" >
            <div className="item-inner">
                <input
                    type="checkbox"
                    className="item-checkbox"
                    id={itemName + seconds}
                    name={itemName + seconds}
                    data-num={seconds}
                    onChange={(e) => {
                        handleSkillPointCheck( itemValue, btnChecked, itemName, e )
                    }}
                    checked={ btnChecked }
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
    label:string
    setClass:string
    itemName: string
    itemValue: number
    seconds: number
}

const CheckParameter: React.FC<Props> = (props):JSX.Element => {
    let checkButtons :JSX.Element = <></>
    let defaultValue = 0
    let seconds:number = props.seconds - 1

    const { register } = useFormContext();

    const parameterSeconds = (itemName: string, itemValue: number) :Array<JSX.Element> => {
        let result:Array<JSX.Element> = []
        for ( let i:number = 0; seconds >= i; ++i ) {
            result[ i ] = (
                <ItemBtn
                    itemName =  {itemName}
                    itemValue = {itemValue}
                    seconds   = {i}
                />)
        }
        return result.map( ( checkButton:JSX.Element ) => {
            return checkButton
        } )
    }

    return (
        <div className="m-checkParameter">
            <div className={`input-group ${ props.setClass && props.setClass }`} >
                <label className="input-title">{props.label}</label>
                <div className="input-content" >
                    <ul className="button-list">
                        { parameterSeconds(props.itemName, props.itemValue) }
                    </ul>
                    <input
                        type="hidden"
                        defaultValue={ defaultValue }
                        readOnly={true}
                        value={ defaultValue }
                        {...register(props.itemName)}
                    />
                </div>
            </div>
        </div>
    )
}

export default CheckParameter;