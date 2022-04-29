import type { AppProps } from 'next/app'
import '/styles/Sidebar.scss'
import '/styles/Global.scss'
import '/styles/Header.scss'
import '/styles/Codepen.scss'
import '/styles/Editor.scss'
import '/styles/EditorHeader.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
