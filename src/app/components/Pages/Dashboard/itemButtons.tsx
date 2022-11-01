import React, { useEffect, useState } from 'react'
import {
    Link,
} from "react-router-dom";
import { useAppSelector, useAppDispatch } from '../../../reducers/hooks'
import { useDeleteCharacter } from '../../../queries/CharacterQuery'
import { deleteCharacterItem} from '../../../reducers/dashboardIndex'
import { systemStateType, statesType } from '../../../config/type';

type Props = {
    character_id:number
    character_id_hash:string
}

const ItemButtons: React.FC<Props> = (props): JSX.Element => {
    const dispatch = useAppDispatch()
    let systemState: systemStateType = useAppSelector((state:statesType) => state.systemState)
    const deleteCharacter   = useDeleteCharacter()

    const deleteHandler = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        deleteCharacter.mutate(props.character_id)
        dispatch(deleteCharacterItem(props.character_id))
    }
    
    return (
        <div className="m-buttons">
            <ul className="m-buttons__inner">
                <li key='edit' className="m-button-edit">
                    <Link className="" to={ '/user/' + systemState.userId + '/kutulu/edit/' + props.character_id + '/' }>編集</Link>
                </li>
                <li key='view' className="m-button-view">
                    <Link className="" to={ '/user/' + systemState.public_page_token + '/kutulu/view/' + props.character_id_hash + '/' }>閲覧</Link>
                </li>
                <li key='output' className="m-button-output">ココフォリア出力</li>
                <li 
                    key='delete' 
                    onClick={ deleteHandler }
                    className="m-button-delete"
                >削除</li>
            </ul>
        </div>
    )
}

export default ItemButtons