import type { AppProps } from 'next/app';

import '@/styles/globals.scss';
import '@/pages/index.scss';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
