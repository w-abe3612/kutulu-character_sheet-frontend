import React, { useEffect, useState } from 'react'
import ItemButtons from './itemButtons'
import image from 'img/dammyUser.png'


export interface characterInfoType {
    character_id: number
    player_character: string
    image_path: string
    image_name: string
    updateded_at: string
}



type Props = characterInfoType

const CharacterItem: React.FC<Props> = (props): JSX.Element => {
    const userPic = props.image_path + props.image_name

    return (
        <div className="m-character">
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
                        <span className="m-character__charactor-updateded_at" >保存:{props.updateded_at}</span>
                        <ItemButtons
                            character_id={props.character_id}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CharacterItem