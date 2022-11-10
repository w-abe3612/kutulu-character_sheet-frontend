import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

type Props = {
    setClass: string
    imageUrl: string
    setAlt: string
}

const PictureDisplay: React.FC<Props> = (props): JSX.Element => {

    const downloadImage = async ( e:React.MouseEvent<HTMLElement> ) => {
        e.preventDefault;
        // 画像をダウンロードするロジックを作成
    }

    return (
        <div className={ 'm-picture-display' + ' ' +  props.setClass } >
            <figure className="picture-inner">
                <img className="picture-image" src={props.imageUrl} alt={props.setAlt} />
            </figure>
            <button 
                className="download-button"
                type="button"
                onClick={(e) => { downloadImage(e) }}
            >
                <FontAwesomeIcon className="download-icon" icon={ faDownload } />
            </button>
        </div>
    )
}

export default PictureDisplay;