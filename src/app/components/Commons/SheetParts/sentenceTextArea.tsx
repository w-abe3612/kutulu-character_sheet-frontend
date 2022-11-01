import React,{useEffect} from 'react'
import { sentenceTextAreaType } from '../../../config/type'
import { useFormContext } from "react-hook-form";
import {setKutuluInfoValue} from '../../../reducers/kutuluInfoSlice';
import { useAppSelector, useAppDispatch } from '../../../reducers/hooks'

type Props = sentenceTextAreaType

const SentenceTextArea: React.FC<Props> = (props): JSX.Element => {
    const dispatch = useAppDispatch()
    const { register, formState,setValue } = useFormContext();
    const errorMessage: any = formState.errors[props.name]?.message ? formState.errors[props.name]?.message : '';
    useEffect(()=> {
        setValue( props.name, props.value !== ''? props.value: '' )
    },[props])

    const setValueHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        dispatch(
            setKutuluInfoValue({
                name:props.name,
                value: e.target.value
            })
        )
    }

    return (
        <div className="m-sentenceInput">
            <div className={`input-group ${props.setClass && props.setClass}`} >
                <textarea
                    id={props.name}
                    className="input-textarea"
                    {...register(props.name, {
                        maxLength: {
                            value: 2000,
                            message: '2000文字以内でお願いします。'
                        },
                        onChange: (e:React.ChangeEvent<HTMLInputElement>) => setValueHandler(e)
                    })
                    }
                />
            </div>
            { errorMessage && <span className="error-message" >{ errorMessage }</span>}
        </div>
    )
}

export default SentenceTextArea


