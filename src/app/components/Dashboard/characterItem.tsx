import React, { useEffect, useState } from 'react'
import ItemButtons from './itemButtons'

export interface characterInfoType {
    player_id: number
    player_character: string
    image_path: string
    image_name: string
    updateded_at: string
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

const CharacterItem: React.FC<Props> = (props): JSX.Element => {
    const userPic = props.image_path + props.image_name

    return (
        <div className="m-character">
            <div className="m-character__inner">
                <div className="m-character__picture" >
                    <figure className="m-user_pic">
                        <div className="inner-box">
                            <img src={userPic} alt="user icon" />
                        </div>
                    </figure>
                </div>
                <div className="m-character__content" >
                    <p className="m-character__charactor-name" >{props.player_character}</p>
                    <div className="m-character__picture is-sm" >
                        <figure className="m-user_pic">
                            <div className="inner-box">
                                <img src={userPic} alt="user icon" />
                            </div>
                        </figure>
                    </div>
                    <div className="m-character__charactor-button">
                        <span className="m-character__charactor-updateded_at" >保存:{props.updateded_at}</span>
                        <ItemButtons
                            player_id={1}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CharacterItem