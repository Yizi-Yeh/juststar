import { GlobalStyle } from '@/components/GlobalStyles';
import LayoutWrapper from '@/components/LayoutWrapper';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <LayoutWrapper>
        <GlobalStyle />
        <Component {...pageProps} />
      </LayoutWrapper>
    </>
  );
}
