import { ClerkProvider } from '@clerk/nextjs'
import type { AppProps } from 'next/app'
import '../styles/Codepen.scss'
import '../styles/Editor.scss'
import '../styles/EditorHeader.scss'
import '../styles/Global.scss'
import '../styles/Header.scss'
import '../styles/Section1.scss'
import '../styles/Section2.scss'
import '../styles/Sidebar.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider {...pageProps}>
      <Component {...pageProps} />
    </ClerkProvider>
  )
}

export default MyApp