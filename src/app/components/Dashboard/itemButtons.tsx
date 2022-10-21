import React, { useEffect, useState } from 'react'
import {
    Link,
} from "react-router-dom";
import { useAppSelector, useAppDispatch } from '../../reducers/hooks'
import { useDeleteCharacter } from '../../queries/CharacterQuery'
import { deleteCharacterItem} from '../../reducers/dashboardIndex'
import { systemStateType } from '../../reducers/types';
export interface characterInfoType {
    character_id:number
}

type Props = characterInfoType

const ItemButtons: React.FC<Props> = (props): JSX.Element => {
    const dispatch = useAppDispatch()
    let systemState: systemStateType = useAppSelector((state: any) => state.systemState)
    console.log(systemState)
    const deleteCharacter   = useDeleteCharacter()

    const deletehandlaer = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        deleteCharacter.mutate(props.character_id)
        dispatch(deleteCharacterItem(props.character_id))
    }
    
    return (
        <div className="m-buttons">
            <ul className="m-buttons__inner">
                <li className="m-button-edit">
                    <Link className="" to={ '/user/' + systemState.userId + '/edit/' + props.character_id + '/' }>編集</Link>
                </li>
                <li className="m-button-view">
                    <Link className="" to={ '/user/' + systemState.userId + '/view/' + props.character_id + '/' }>閲覧</Link>
                </li>
                <li className="m-button-output">キャラ出力</li>
                <li 
                    onClick={deletehandlaer }
                    className="m-button-delete"
                >削除</li>
            </ul>
        </div>
    )
}

export default ItemButtons