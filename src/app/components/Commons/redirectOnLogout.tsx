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
    let isLoggedIn: boolean = useAppSelector((state: any) => state.systemState.isLoggedIn)
    return (
        <>
            { isLoggedIn === false && (
                <Navigate to="/" replace={true} />
            )}
            {props.children}
        </>
    );
};

export default RedirectOnLogout