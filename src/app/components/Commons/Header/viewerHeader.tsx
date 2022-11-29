import React from 'react';
import { Link,
    useLocation } from "react-router-dom";
import { toast } from 'react-toastify';
import { useAppSelector } from '../../../reducers/hooks'
import type { characterInfoType, statesType,abilityValueType,kutuluInfoType } from '../../../config/type'

interface clipboardType {
    "kind": string
    "data": {
        "name": string
        "memo": string
        "externalUrl": string
        "commands":string
        "status": [
            {
                "label": string
                "value": number
                "max": number
            }

        ]
    }
}

const ViewerHeader: React.FC = () => {
    const location = useLocation();
    const characterInfo: characterInfoType = useAppSelector((state: statesType) => state.characterInfo)
    const abilityValues: abilityValueType = useAppSelector((state: statesType) => state.abilityValues)
    const kutuluInfo: kutuluInfoType = useAppSelector((state: statesType) => state.kutuluInfo)

    // functionsへ
    const clipboardHandler = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        const memoText:string = 'PL:' + characterInfo.player_name + "\n" 
            + 'PC:' + characterInfo.player_character  + "\n" 
            + '[持ち物]' + "\n" + kutuluInfo.possession_item

        const lifeValue:number = 3 - kutuluInfo.injury_value
        const externalUrl:string = 'http://localhost:3001/' + location.pathname

        const characterJson: clipboardType = {
            "kind": "character",
            "data": {
                "name": characterInfo.player_character ,
                "memo": memoText,
                "externalUrl": externalUrl,
                "commands":'',
                "status": [
                    {
                        "label": "負傷",
                        "value": lifeValue,
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
        <div className='m-header is-view-page' >
            <div className="header-inner">
                <div className="top-section">
                    <div className="inner-content">
                        <div className="m-header-logo">
                            <Link to="/"><img /></Link>
                        </div>
                    </div>
                </div>
                <div className="bottom-section">
                    <div className="inner-content" >
                        <p className="view-title" >閲覧モード</p>
                        <ul className="view-buttons">
                            <li>
                                <button className="button-content" type="button">URLコピー</button>
                            </li>
                            <li>
                                <button 
                                    className="button-content" 
                                    type="button"
                                    onClick={clipboardHandler}
                                    >キャラクター出力</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewerHeader;