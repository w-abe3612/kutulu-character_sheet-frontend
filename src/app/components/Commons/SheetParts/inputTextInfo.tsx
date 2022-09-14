import React, { useEffect, useState } from 'react'


interface inputPropsType {
    label: string
    name: string
    value: string
    default:string
    onChange:(e: React.ChangeEvent<HTMLInputElement> ) => void
}

type Props = inputPropsType

const InputTextInfo: React.FC<Props> = ( props ): JSX.Element => {
    
    return (
        <div className="input-group">
            <label className="" ></label>
            <div className="" >
                <input
                    className=""
                    type="text"
                    defaultValue={props.default}
                    value={props.value}
                    onChange={e => props.onChange(e)}
                />
            </div>
        </div>
    )
}


export default InputTextInfo