import React from 'react';
import SectionWrap from "../../../Commons/Layout/sectionWrap"


type Props = {
    isPage: string
}

const OutputView: React.FC<Props> = (props) => {


    return (
        <div className="m-view-output">
            <ul className="view-buttons">
                <li>
                    <button className="button-content" type="button">URLコピー</button>
                </li>
                <li>
                    <button
                        className="button-content"
                        type="button"
                    >ココフォリア出力</button>
                </li>
            </ul>
        </div>
    )
}

export default OutputView