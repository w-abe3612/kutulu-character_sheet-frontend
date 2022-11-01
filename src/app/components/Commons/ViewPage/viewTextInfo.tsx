import React, { useEffect, useState } from 'react'
import { inputTextInfoPropsType } from '../../../config/type'

type Props = inputTextInfoPropsType

const ViewTextInfo: React.FC<Props> = ( props ): JSX.Element => {

    return (
        <div className="m-inputTextInfo">
            <div className={`input-group ${ props.setClass && props.setClass }`} >
                <label className="input-title">{props.label}</label>
                <div className="input-content" >
                    <input
                        type="text"
                        className="input-text"
                        readOnly={ true }
                    />
                </div>
            </div>
        </div>
    )
}

export default ViewTextInfo