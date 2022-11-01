import React, { useEffect, useState } from 'react'
import {
    Link,
} from "react-router-dom";
import { useAppSelector, useAppDispatch } from '../../../reducers/hooks'
import { useDeleteCharacter } from '../../../queries/CharacterQuery'
import { deleteCharacterItem} from '../../../reducers/dashboardIndex'
import { systemStateType } from '../../../config/type';
export interface characterInfoType {
    character_id:number
    character_id_hash:string
}

type Props = characterInfoType

const ItemButtons: React.FC<Props> = (props): JSX.Element => {
    const dispatch = useAppDispatch()
    let systemState: systemStateType = useAppSelector((state: any) => state.systemState)
    const deleteCharacter   = useDeleteCharacter()

    const deleteHandler = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        deleteCharacter.mutate(props.character_id)
        dispatch(deleteCharacterItem(props.character_id))
    }
    
    return (
        <div className="m-buttons">
            <ul className="m-buttons__inner">
                <li className="m-button-edit">
                    <Link className="" to={ '/user/' + systemState.userId + '/kutulu/edit/' + props.character_id + '/' }>編集</Link>
                </li>
                <li className="m-button-view">
                    <Link className="" to={ '/user/' + systemState.public_page_token + '/kutulu/view/' + props.character_id_hash + '/' }>閲覧</Link>
                </li>
                <li className="m-button-output">キャラ出力</li>
                <li className="m-button-output">URL出力</li>
                <li 
                    onClick={ deleteHandler }
                    className="m-button-delete"
                >削除</li>
            </ul>
        </div>
    )
}

export default ItemButtons