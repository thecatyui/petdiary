import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import '@/components/index.scss';
import NextI18nextConfig from '@/next-i18next.config';
import '@/pages/index.scss';
import '@/styles/globals.scss';

const client = new QueryClient({ defaultOptions: { queries: { refetchOnWindowFocus: false } } });

const App = ({ Component, pageProps }: AppProps) => (
  <QueryClientProvider client={client}>
    {process.env.NODE_ENV !== 'production' ? <ReactQueryDevtools initialIsOpen={false} /> : null}
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
    </Head>
    <Component {...pageProps} />
  </QueryClientProvider>
);

export default appWithTranslation(App, NextI18nextConfig);
