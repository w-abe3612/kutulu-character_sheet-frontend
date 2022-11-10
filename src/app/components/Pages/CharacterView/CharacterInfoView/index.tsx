import React,{ useEffect } from 'react';
import ViewProfileIcon from '../../../Commons/ViewPage/viewProfileIcon'
import Profiles from './Profiles'
import SectionWrap from "../../../Commons/Layout/sectionWrap"

type Props = {
    characterTitle:string
    playerCharacter:string
    playerName:string
    injuryValue:number
    image_path:string
    image_name:string
    img_upload_base64:string
}

const CharacterInfoView: React.FC<Props> = (props) => {
    
    return (
        <SectionWrap title="個人情報"
        setClass=''
        description='' >
            <div className="m-characterInfo">
                <ViewProfileIcon
                    image_path={props.image_path}
                    image_name={props.image_name}
                    img_upload_base64= {props.img_upload_base64}
                />
                <Profiles 
                    characterTitle = {props.characterTitle}
                    playerCharacter = {props.playerCharacter}
                    playerName = {props.playerName}
                    injuryValue = {props.injuryValue}
                />
            </div>
        </SectionWrap>
    )
}

export default CharacterInfoView
