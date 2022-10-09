import React, { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../reducers/hooks'

interface inputPropsType {
    label: string
    name: string
    value: string
    default:string
    onChange:(e: React.ChangeEvent<HTMLInputElement> ) => void
}

type Props = inputPropsType

const InputText: React.FC<Props> = ( props ): JSX.Element => {
    return (
        <div className="input-group">
            <label>{props.label}</label>
            <input
                type="text"
                className="input"
                name={props.name}
                value={props.value}
                defaultValue={props.default}
                onChange={e => props.onChange(e)}
            />
        </div>
    )
}


export default InputText