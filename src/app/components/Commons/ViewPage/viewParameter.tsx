import React from 'react';

type itembtnProps = { 
    itemName:string
    itemValue:number
    seconds:number
}

const ItemBtn: React.FC<itembtnProps> = (props): JSX.Element => {
    const isChecked = (value:number,seconds:number):string => {
        let result = ''
        if (value >= seconds) {
            result = 'is-checked'
        }
        return result
    }

    return (
        <li key={props.itemName + props.seconds} className="m-checkParameter_items" >
            <div className="item-inner">
                <div
                    data-num={props.seconds}
                    className={'item-label ' + isChecked(props.itemValue,props.seconds)}
                ></div>
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
}

const ViewParameter: React.FC<Props> = (props): JSX.Element => {

    const parameterSeconds = (itemName: string, itemValue: number): Array<JSX.Element> => {
        let result: Array<JSX.Element> = []
        for (let i: number = 0; props.seconds >= i; ++i) {
            if ( i === 0 ) {
                result[i] = <></>
            } else {
                result[i] = (
                    <ItemBtn
                        itemName={itemName}
                        itemValue={itemValue}
                        seconds={i}
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
                        {parameterSeconds(props.itemName, props.itemValue)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ViewParameter;