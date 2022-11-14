import React, { ReactNode, useEffect } from "react"
import {
    Navigate
} from "react-router-dom";
import { useAppSelector, useAppDispatch } from '../../reducers/hooks'
import { systemStateType, statesType } from '../../config/type';
import { isCheckLoggedIn } from '../../reducers/systemStateSlice';

type Props = {
    children: React.ReactNode;
};

const LoginStateProvider: React.FC<Props> = (props) => {
    const dispatch = useAppDispatch()
    let systemState: systemStateType = useAppSelector((state: statesType) => state.systemState)

    useEffect(() => {
        // todo リロードするとhomeにいってしまうが、元のページへ遷移させるのは後でも出来る為、一旦抜かし
        // todo ローディング
        dispatch(isCheckLoggedIn())
    }, [dispatch])

    if ( systemState.loading === true ) {
        return (
            <div className="m-loading">
                <div className="inner-box">
                    <div className="loading-animation"></div>
                    <p className="loading-message">Now Loading</p>
                </div>
            </div>
        )
    }

    return (
        <>
            {props.children}
        </>
    );
};

export default LoginStateProvider