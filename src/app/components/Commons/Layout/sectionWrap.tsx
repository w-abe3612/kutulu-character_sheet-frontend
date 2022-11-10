import React, { ReactNode } from 'react';


export interface characterInfoType {
    title:string
    setClass:string
    description:string
    children: ReactNode
}

type Props = characterInfoType

const SectionWrap: React.FC<Props> = ( props ) => {
    return (
        <div className="l-wrap" >
            <div className={'l-section_wrap' + ' ' +props.setClass } >
                <div className="l-section_Tab">
                    <h2 className="l-section_title">{props.title}</h2>
                </div>
                <div className="l-section_content">
                    <p className="section-description">{props.description}</p>
                    { props.children }
                </div>
            </div>
        </div>
    )
}

export default SectionWrap;