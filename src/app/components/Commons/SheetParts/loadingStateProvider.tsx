import React from "react"
import {
    Navigate
} from "react-router-dom";

type Props = {
    isPage:string
    loading:boolean
    success:boolean
    error: string | null
    element: JSX.Element;
};

const LoadingStateProvider: React.FC<Props> = (props) => {
    let result:JSX.Element = <></>

    if (props.isPage === 'edit' || props.isPage === 'view') {
    
        if ( props.loading === true ) {
            result = (
                <div className="m-section-loading">Now Loading</div>
            )
        } else if ( props.loading === false
            && props.success === false ) {
            // 失敗
            // todo このパターンを作り込む
            result = <>error</>

        } else if ( props.loading === false
            && props.success === true ) {
            // 読み込み完了
            result = ( props.element )
        }
    } else {
        result = ( props.element )
    }

    return (
        <>
            {result}
        </>
    );
};

export default LoadingStateProvider