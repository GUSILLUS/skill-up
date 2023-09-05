import type { AppProps } from 'next/app';
import '@/style/common/globals.css';
import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';
import { Suspense } from 'react';
import '@/shared/services/i18next/i18n';
import { Provider } from 'react-redux';

import { store } from '@/shared/services/store/store';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Skill Up</title>
      </Head>
      <Provider store={store}>
        <SessionProvider>
          <Suspense fallback="loading">
            <Component {...pageProps} />
          </Suspense>
        </SessionProvider>
      </Provider>
    </>
  );
};

export default App;
