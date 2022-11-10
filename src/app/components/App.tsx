import React,{ useEffect } from 'react';
import Router from './router'
import { QueryClient, QueryClientProvider } from "react-query"
import { useAppSelector, useAppDispatch } from '../reducers/hooks'
import { isCheckLoggedIn,setLoggedIn }  from '../reducers/systemStateSlice';
import type { systemStateType,statesType } from '../config/type'
import { ToastContainer } from 'react-toastify';


import crypto from 'crypto-js'

const App: React.FC = () => {
    const dispatch = useAppDispatch()
    let systemState: systemStateType = useAppSelector((state: statesType) => state.systemState)

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
                    <ToastContainer hideProgressBar={true} />
                </QueryClientProvider>
            </div>
        </div>
    )
}

export default App;