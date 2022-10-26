import React,{useEffect} from 'react'
import { sentenceTextAreaType } from '../../../type'
import { useFormContext } from "react-hook-form";

type Props = sentenceTextAreaType

const SentenceTextArea: React.FC<Props> = (props): JSX.Element => {
    const { register, formState } = useFormContext();
    const errorMessage: any = formState.errors[props.name]?.message ? formState.errors[props.name]?.message : '';
    return (
        <div className="m-sentenceInput">
            <div className={`input-group ${props.setClass && props.setClass}`} >
                <textarea
                    id={props.name}
                    className="input-textarea"
                    defaultValue={props.value}
                    {...register(props.name, {
                        maxLength: {
                            value: 3000,
                            message: '3000文字以内でお願いします。'
                        }
                    })
                    }
                />
            </div>
            { errorMessage && <span className="error-message" >{ errorMessage }</span>}
        </div>
    )
}

export default SentenceTextArea


