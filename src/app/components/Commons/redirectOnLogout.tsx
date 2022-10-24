import React, { ReactNode } from "react"
import {
    Navigate
} from "react-router-dom";
import { useAppSelector, useAppDispatch } from '../../reducers/hooks'
import { systemStateType } from '../../reducers/types';

type redirectOnLogoutProps = {
    children: React.ReactNode;
};

const RedirectOnLogout: React.FC<redirectOnLogoutProps> = (props) => {
    let isLoggedIn: string= useAppSelector((state: any) => state.systemState.isLoggedIn)
    return (
        <>
            { isLoggedIn == '0' && (
                <Navigate to="/" replace={true} />
            )}
            {props.children}
        </>
    );
};

export default RedirectOnLogout