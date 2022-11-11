import React, { ReactNode, useEffect } from "react"
import {
    Navigate
} from "react-router-dom";
import { useAppSelector, useAppDispatch } from '../../reducers/hooks'
import { systemStateType,statesType } from '../../config/type';

type redirectOnLogoutProps = {
    children: React.ReactNode;
};

const RedirectOnLogout: React.FC<redirectOnLogoutProps> = (props) => {
    let systemState:systemStateType = useAppSelector((state: statesType) => state.systemState)

    return (
        <>
            { ( systemState.userId === null  
                && systemState.userName === '' 
                && systemState.public_page_token === '' ) 
                    && (
                        <Navigate to="/" replace={true} />
            )}
            {props.children}
        </>
    );
};

export default RedirectOnLogout