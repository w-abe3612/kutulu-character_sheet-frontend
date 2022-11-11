import React from 'react';
import { useAppSelector } from '../../../reducers/hooks'
import type { systemStateType, statesType } from '../../../config/type'

const HamburgerButton: React.FC = (): JSX.Element => {
    let result: JSX.Element = <></>
    const systemState: systemStateType = useAppSelector((state: statesType) => state.systemState)

    if ( systemState.userId !== null
        && systemState.userName !== ''
        && systemState.public_page_token !== '' ) {

        result = (
            <button
                className="m-content__hamburger_btn"
                type="button"
            >
                <div data-position="top" ></div>
                <div data-position="mid" ></div>
                <div data-position="bottom" ></div>
            </button>
        )
    }

    return (result)
}

export default HamburgerButton;