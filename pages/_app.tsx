import type { AppProps } from 'next/app'
import '/styles/Sidebar.scss'
import '/styles/Global.scss'
import '/styles/Search.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
