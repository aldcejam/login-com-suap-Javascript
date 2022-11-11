import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { DateLoginSuapProvider } from '../src/context/DateLoginSuap'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DateLoginSuapProvider>
      <Component {...pageProps} />
    </DateLoginSuapProvider>
  )

}

export default MyApp
