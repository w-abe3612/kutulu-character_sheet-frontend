

import React, { ReactNode } from 'react';


export interface characterInfoType {
    title:string
    children: ReactNode
}

type Props = characterInfoType

const NormalWrap: React.FC<Props> = ( props ) => {
    return (
        <div className="l-wrap" >
            <section className="l-normal">
                <h2 className="section-title" >{props.title}</h2>
                <div className="section-content" >
                    { props.children }
                </div>
            </section>
        </div>
    )
}

export default NormalWrap;