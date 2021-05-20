import React from 'react';
import { AppProps , AppContext } from 'next/app'
import { Provider } from 'next-auth/client'
import { GeistProvider, CssBaseline } from '@geist-ui/react'
export default function App({ Component, pageProps }: AppProps) {
    return (
    <Provider session={pageProps.session}>            
        <GeistProvider themeType='dark' > 
            <CssBaseline /> 
            <Component {...pageProps} />
        </GeistProvider>
    </Provider>
    )
}