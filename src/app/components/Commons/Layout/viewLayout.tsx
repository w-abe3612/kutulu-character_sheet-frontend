import React, { ReactNode } from 'react';
import ViewerHeader from '../Header/viewerHeader'
import Footer from '../Footer'

export interface characterInfoType {
    setClass: string
    children: ReactNode
}

type Props = characterInfoType

const ViewLayout: React.FC<Props> = (props) => {
    return (
        <div className={'l-viwer-layout' + ' ' + props.setClass} >
            <ViewerHeader />
            <div className="l-viwer-wrap">
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default ViewLayout;