import type { AppProps } from 'next/app';
import '@/style/common/globals.css'
import React, { Suspense } from 'react'
import '@/shared/services/i18next/i18n'
import { Provider } from 'react-redux';
import { store } from '@/shared/services/store/store' 
import Head from 'next/head';
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Skill Up</title>
      </Head>
      <Provider store={store}>
        <Suspense fallback='loading'>
          <Component {...pageProps} />
        </Suspense>
      </Provider>
    </>
  )
};

export default App;