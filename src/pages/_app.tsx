import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { GlobalStyle } from '../styles/global';
import { QuestionProvider } from '../contexts';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <QuestionProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </QuestionProvider>
    </SessionProvider>
  );
}

export default MyApp;
