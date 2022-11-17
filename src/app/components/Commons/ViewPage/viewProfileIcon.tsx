import React from 'react'
import PictureDisplay from '../../Commons/OtherParts/pictureDisplay'

type Props = {
    image_path:string
    image_name:string
}

const ViewProfileIcon:React.FC<Props> = ( props ) : JSX.Element => {

    return (
        <div className="m-charCharactorIcon">
            <div className="m-ProfileIcon" >
                <PictureDisplay 
                    setClass = ''
                    imageUrl = ''
                    setAlt = ''
                />
            </div>
        </div>
    )
}

export default ViewProfileIcon

