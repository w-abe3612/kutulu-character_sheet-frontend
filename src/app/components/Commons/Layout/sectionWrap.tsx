import React, { ReactText,ReactNode } from 'react';
import ReactDOM from 'react-dom';


export interface characterInfoType {
    title:string
    children: ReactNode
}

type Props = characterInfoType

const SectionWrap: React.FC<Props> = ( props ) => {
    return (
        <div className="l-wrap" >
            <div className="l-section_wrap">
                <div className="l-section_Tab">
                    <p className="l-section_title">{props.title}</p>
                </div>
                <div className="l-section_content">
                    { props.children }
                </div>
            </div>
        </div>
    )
}

export default SectionWrap;