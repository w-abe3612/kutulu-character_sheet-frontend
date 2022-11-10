import React, { useEffect, useState } from 'react'
import {
    Link,
} from "react-router-dom";

import { useAppSelector, useAppDispatch } from '../../../reducers/hooks'
import { useDeleteCharacter } from '../../../queries/CharacterQuery'
import { deleteCharacterItem } from '../../../reducers/dashboardIndex'
import { systemStateType, statesType } from '../../../config/type';
import { toast } from 'react-toastify';

type Props = {
    character_id: number
    character_id_hash: string
}

interface clipboardType {
    "kind": string
    "data": {
        "name": string
        "memo": string
        "externalUrl": string
        "status": [
            {
                "label": string
                "value": number
                "max": number
            }

        ]
    }
}

const ItemButtons: React.FC<Props> = (props): JSX.Element => {
    const dispatch = useAppDispatch()
    let systemState: systemStateType = useAppSelector((state: statesType) => state.systemState)
    const deleteCharacter = useDeleteCharacter()

    const deleteHandler = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        deleteCharacter.mutate(props.character_id)
        dispatch(deleteCharacterItem(props.character_id))
    }

    const clipboardHandler = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        //　ダイスボットの算出は
        //nKU
        //上のnはダイスの数
        const characterJson: clipboardType = {
            "kind": "character",
            "data": {
                "name": "樹林 九阿野(キバヤシ きゅうあのん)",
                "memo": "PL:hoge\nPC:hoge\n[持ち物]\naaaaa",
                "externalUrl": "https://iachara.com/sns/2304424/view",
                "status": [
                    {
                        "label": "",
                        "value": 0,
                        "max": 3
                    }

                ]
            }
        }
        navigator.clipboard.writeText(JSON.stringify(characterJson))
            .then(function () {
                toast.success('クリップボードに保存が完了しました！');
            }, function (err) {
                toast.error('クリップボードに保存が失敗しましたしました！' + err);
            });
    }

    return (
        <div className="m-dashboard-buttons">
            <ul className="buttons-inner">
                <li key='dashboard-kutulu-edit' className="edit">
                    <Link className=""
                        to={'/user/' + systemState.userId + '/kutulu/edit/' + props.character_id + '/'} >編集</Link>
                </li>
                <li key='dashboard-kutulu-view' className="view">
                    <Link className=""
                        to={'/user/' + systemState.public_page_token + '/kutulu/view/' + props.character_id_hash + '/'}
                        target="_blank" >閲覧</Link>
                </li>
                <li
                    key='dashboard-kutulu-output'
                    onClick={clipboardHandler}
                    className="output"
                ><span className="non-sm-inline">ココフォリア</span>出力</li>
                <li
                    key='dashboard-kutulu-delete'
                    onClick={deleteHandler}
                    className="delete"
                >削除</li>
            </ul>
        </div>
    )
}

export default ItemButtons