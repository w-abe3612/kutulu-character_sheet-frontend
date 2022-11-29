import React from 'react';
import Router from './router'
import { QueryClient, QueryClientProvider } from "react-query"
import { useAppSelector } from '../reducers/hooks'

import type { statesType, navigationInfoType } from '../config/type'
import { ToastContainer } from 'react-toastify';
import LoginStateProvider from '../components/Commons/loginStateProvider'

const App: React.FC = () => {
    let navigationInfo: navigationInfoType = useAppSelector((state: statesType) => state.navigationInfo)

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
    console.log(process.env.ENV_TEST);

    return (
        <div className='l-layout-wrapper'
            data-sidebar={navigationInfo.sidebarState}
        >
            <div className='l-inner'>
                <QueryClientProvider client={queryClient} >
                    <LoginStateProvider>
                        <Router />
                        <ToastContainer hideProgressBar={true} />
                    </LoginStateProvider>
                </QueryClientProvider>
            </div>
        </div>
    )
}

export default App;