import { Provider } from 'next-auth/client'
import { ThemeProvider } from '@primer/components'
export default function App({ Component, pageProps }) {
    return (
        <Provider session={pageProps.session}>
            <ThemeProvider>
                <Component {...pageProps} />
            </ThemeProvider>
        </Provider>
    )
}