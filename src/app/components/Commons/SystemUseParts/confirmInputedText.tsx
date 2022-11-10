import React, { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../../reducers/hooks'

interface inputPropsType {
    label: string
    value: string
}

type Props = inputPropsType

const ConfirmInputedText: React.FC<Props> = (props): JSX.Element => (
    <div className="m-confirmationInputText" >
        <div className="input-group">
            <label className="input-label" >{props.label}</label>
            <input
                type="text"
                className="input-text"
                defaultValue={props.value}
                readOnly={true}
            />
        </div>
    </div>
)

export default ConfirmInputedText