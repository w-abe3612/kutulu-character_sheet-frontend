import React, { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../reducers/hooks'

interface inputPropsType {
    label: string
    name: string
    value: string
    onChange:(e: React.ChangeEvent<HTMLTextAreaElement> ) => void
}

type Props = inputPropsType

const TextArea: React.FC<Props> = ( props ): JSX.Element => {
    
    return (
        <div className="input-group">
            <label>{props.label}</label>
            <textarea 
                name={props.name}
                className="textarea"
                >{props.value}</textarea>
        </div>
    )
}


export default TextArea