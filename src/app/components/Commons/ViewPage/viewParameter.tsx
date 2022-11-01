import React from 'react';




type Props = {
    label: string
    setClass: string
    itemName: string
    itemValue: number
    seconds: number
    isReduser: string
}

const ViewParameter: React.FC<Props> = (props): JSX.Element => {

    return (
        <div className="m-checkParameter">
            <div className={`input-group ${props.setClass && props.setClass}`} >
                <label className="input-title">{props.label}</label>
                <div className="input-content" >
                    <ul className="button-list">
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ViewParameter;