import React, { useEffect, useState } from 'react'
import ItemButtons from './itemButtons'
import image from 'img/dammyUser.png'


type Props = {
    character_id: number
    player_character: string
    image_path: string
    image_name: string
    updateded_at: string
    character_id_hash: string
}

const CharacterItem: React.FC<Props> = (props): JSX.Element => {
    const userPic = props.image_path + props.image_name

    const date = new Date(props.updateded_at)
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const viewDate:string  = year + '年' +  month + '月' + day + '日' + hours + '時' + minutes + '分'

    return (
        <div key={'characterlist' + props.character_id} className="m-character">
            <div className="m-character__inner">
                <div className="m-character__picture" >
                    <figure className="m-user_pic">
                        <div className="inner-box">
                        <img src={image} alt="user icon" />
                        </div>
                    </figure>
                </div>
                <div className="m-character__content" >
                    <p className="m-character__charactor-name" >{props.player_character}</p>
                    <div className="m-character__picture is-sm" >
                        <figure className="m-user_pic">
                            <div className="inner-box">
                                <img src={image}  alt="user icon" />
                            </div>
                        </figure>
                    </div>
                    <div className="m-character__charactor-button">
                        <span className="m-character__charactor-updateded_at" >保存:{viewDate}</span>
                        <ItemButtons
                            character_id={props.character_id}
                            character_id_hash= { props.character_id_hash }
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CharacterItem