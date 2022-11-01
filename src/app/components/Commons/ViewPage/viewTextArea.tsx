import React,{useEffect} from 'react'
import { sentenceTextAreaType } from '../../../config/type'

type Props = sentenceTextAreaType

const ViewTextArea: React.FC<Props> = (props): JSX.Element => {

    return (
        <div className="m-sentenceInput">
            <div className={`input-group ${props.setClass && props.setClass}`} >
                <textarea
                    id={props.name}
                    className="input-textarea"
                    readOnly={ true }
                />
            </div>
        </div>
    )
}

export default ViewTextArea