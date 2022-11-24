import React, { ReactNode } from 'react';
import Header from '../Header'
import Footer from '../Footer'


export interface characterInfoType {
    setClass:string
    children: ReactNode
}

type Props = characterInfoType

const MainLayout: React.FC<Props> = ( props ) => {
    return (
        <div className={'l-main-layout' + ' ' + props.setClass} >
            <Header />
            <div className="l-main-wrap">
                { props.children }
            </div>
            <Footer />
        </div>
    )
}

export default MainLayout;