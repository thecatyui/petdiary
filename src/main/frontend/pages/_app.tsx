import type { AppProps } from 'next/app';
import Head from 'next/head';

import '@/components/index.scss';
import '@/pages/index.scss';
import '@/styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
