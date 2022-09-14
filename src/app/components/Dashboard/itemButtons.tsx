import React, { useEffect, useState } from 'react'
import {
    Link,
} from "react-router-dom";

export interface characterInfoType {
    player_id:number
}
/*
m-character

m-character__inner
m-character__picture
m-character__content
m-character__charactor-name
m-character__charactor-updateded_at
m-character__charactor-button

*/


type Props = characterInfoType

const ItemButtons: React.FC<Props> = (props): JSX.Element => {
    
    return (
        <div className="m-buttons">
            <ul className="m-buttons__inner">
                <li className="m-button-edit">
                    <Link className="" to={ '/edit/' + props.player_id }>編集</Link>
                </li>
                <li className="m-button-view">
                    <Link className="" to={ '/view/' + props.player_id }>閲覧</Link>
                </li>
                <li className="m-button-output">キャラ出力</li>
                <li className="m-button-delete">削除</li>
            </ul>
        </div>
    )
}

export default ItemButtons