import React from 'react';
import { Link } from "react-router-dom";


const ViewerHeader: React.FC = () => {
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
                                <button className="button-content" type="button">キャラクター出力</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewerHeader;