import React from 'react';
import { useAppDispatch,useAppSelector } from '../../../reducers/hooks'
import type { systemStateType, statesType } from '../../../config/type'
import { setSidebarState } from '../../../reducers/navigationInfoSlice'


const HamburgerButton: React.FC = (): JSX.Element => {
    let result: JSX.Element = <></>
    const dispatch = useAppDispatch()
    const systemState: systemStateType = useAppSelector((state: statesType) => state.systemState)
    const navigationInfo:any = useAppSelector((state: statesType) => state.navigationInfo)
    console.log(navigationInfo)

    const sidebarHandler = (e:React.MouseEvent<HTMLElement>) => {
        e.preventDefault
        dispatch(setSidebarState())
    }

    if ( systemState.userId !== null
        && systemState.userName !== ''
        && systemState.public_page_token !== '' ) {

        result = (
            <button
                className="m-hamburger-button"
                type="button"
                data-open={ navigationInfo.sidebarState }
                onClick={(e) =>{sidebarHandler(e)}}
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