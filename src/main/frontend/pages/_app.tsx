import type { AppProps } from 'next/app';

import '@/components/index.scss';
import '@/pages/index.scss';
import '@/styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
