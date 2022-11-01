import React,{ useEffect } from 'react';
import Router from './router'

import { QueryClient, QueryClientProvider } from "react-query"
import { useAppSelector, useAppDispatch } from '../reducers/hooks'
import { isCheckLoggedIn,setLoggedIn }  from '../reducers/systemStateSlice';
import type { systemStateType } from '../config/type'
import crypto from 'crypto-js'

const App: React.FC = () => {
    const dispatch = useAppDispatch()
    let systemState: systemStateType = useAppSelector((state: any) => state.systemState)

    // コンストラクターにする予定？
    const recoveryText = ( targetText:string | null ):string => {
        let result = ''
        if (targetText !== null ) {
            let bytes = crypto.AES.decrypt(targetText, process.env.HASH_KEY ? process.env.HASH_KEY: '' )
            result = bytes.toString(crypto.enc.Utf8)
        }
        return result
    }

    // コンストラクターにする予定？
    useEffect(() => {
        if ( systemState.isLoggedIn === '0' ) {
            if ( localStorage.getItem("userId") !== null 
                && localStorage.getItem("userName") !== null) {

                let result: any = {
                    isLoggedIn: recoveryText( localStorage.getItem("isLoggedIn")),
                    userId: Number(recoveryText(localStorage.getItem('userId'))),
                    userName: recoveryText(localStorage.getItem('userName')),
                    public_page_token: localStorage.getItem('public_page_token')
                }
                dispatch(setLoggedIn(result))
            } else {
                //この時取得できなかった際にはlocalstrageを消す必要あり
                dispatch(isCheckLoggedIn())
            }
        }
    }, [dispatch]);

    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: false
            },
            mutations: {
                retry: false
            }
        }
    })

    return (
        <div className='l-layout' >
            <div className='l-inner'>
                <QueryClientProvider client={queryClient} >
                    <Router />
                </QueryClientProvider>
            </div>
        </div>
    )
}

export default App;