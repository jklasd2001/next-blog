import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import { Layout } from 'src/components'

import 'src/styles/globals.css'

/**
 * @description
 * _app은 서버로 요청이 들어왔을 때 가장 먼저 실행되는 컴포넌트로, 페이지에 적용할 공통 레이아웃의 역할을 합니다.
 */
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Head>
          <title>자유를 찾아서</title>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default App
