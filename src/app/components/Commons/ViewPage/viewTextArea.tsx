import React,{useEffect} from 'react'
import { sentenceTextAreaType } from '../../../config/type'

type Props = {
    setClass:string
    default:string
}

const ViewTextArea: React.FC<Props> = (props): JSX.Element => {

    return (
        <div className="m-sentenceInput">
            <div className={`input-group ${props.setClass && props.setClass}`} >
                <textarea
                    name='textarea-viwer'
                    className="input-textarea"
                    readOnly={ true }
                    defaultValue={props.default}
                />
            </div>
        </div>
    )
}

export default ViewTextArea