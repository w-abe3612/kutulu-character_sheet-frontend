import React, { useState } from 'react';

import { addCheckedValue } from '../../../reducers/abilityValuesSlice'
import ItemBtn from './itemBtn'

type Props = {
    itemParam: string
    itemValue: number
}

const CheckButton: React.FC<Props> = ({ itemParam, itemValue }): JSX.Element => {
    let result:JSX.Element = <></>

    let seconds = (itemParam: string, itemValue: number) :any => {
        let result:Array<JSX.Element> = []
        for ( let i: number = 1; 3 >= i; ++i ) {

            result[ i ] = (
                <ItemBtn
                    itemParam = {itemParam}
                    itemValue = {itemValue}
                    seconds   = {i}
                />
            )
        }
        return result
    }

    result = seconds(itemParam, itemValue).map( ( checkbox:JSX.Element ) => {
        return checkbox
    } )

    return ( result )
}

export default CheckButton;