import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router'
import Header from './Header'
import { QueryClient, QueryClientProvider } from "react-query"

const App: React.FC = () =>  {
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
                    <Header />
                    <Router />
                </QueryClientProvider>
            </div>
        </div>
    )
}

export default App;