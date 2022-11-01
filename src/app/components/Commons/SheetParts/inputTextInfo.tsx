import React, { useEffect, useState } from 'react'
import { inputTextInfoPropsType } from '../../../config/type'
import { useFormContext } from "react-hook-form";
import { useAppSelector, useAppDispatch } from '../../../reducers/hooks'
import {setCharacterInfoValue} from '../../../reducers/characterInfosSlice';
import {setFlavorInfoValue} from '../../../reducers/flavorInfosSlice';
import {setKutuluInfoValue} from '../../../reducers/kutuluInfoSlice';
import { setInputTextActionType } from '../../../config/type'

type Props = inputTextInfoPropsType

const InputTextInfo: React.FC<Props> = ( props ): JSX.Element => {
    const dispatch = useAppDispatch()
    const { register, formState,setValue } = useFormContext();
    const errorMessage:any = formState.errors[props.name]?.message ? formState.errors[props.name]?.message : '';
    useEffect(()=> {
        setValue( props.name, props.default !== ''? props.default: '' )
    },[props])

    const switchReduserDispatch = (actionType: string, actionName: string, actionValue:string) => {
        switch (actionType) {
            case 'characterInfo':
                dispatch(setCharacterInfoValue({
                    name: actionName,
                    value: actionValue
                }))
                break;
            case 'kutuluInfo':
                dispatch(setKutuluInfoValue({
                    name: actionName,
                    value: actionValue
                }))
                break;
            case 'flavorInfo':
                dispatch(setFlavorInfoValue({
                    name: actionName,
                    value: actionValue
                }))
                break;
        }
    }

    const setValueHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        switchReduserDispatch(
            props.setValueAction.type,
            props.name,
            e.target.value
        )
    }

    // todo requiredを入れる
    return (
        <div className="m-inputTextInfo">
            <div className={`input-group ${ props.setClass && props.setClass }`} >
                <label className="input-title">{props.label}</label>
                <div className="input-content" >
                    <input
                        type="text"
                        className="input-text"
                        { ...register(props.name, {
                            onChange: ( e:React.ChangeEvent<HTMLInputElement> ) => setValueHandler(e)
                        })}
                    />
                </div>
            </div>
            { errorMessage && <span className="error-message" >{ errorMessage }</span>}
        </div>
    )
}

export default InputTextInfo