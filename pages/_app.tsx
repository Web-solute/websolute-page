import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/global-style';
import { theme } from '../styles/theme';
import { SWRConfig } from 'swr';
import dynamic from 'next/dynamic';

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AnimatedCursor />
      <SWRConfig
        value={{ fetcher: (url: string) => fetch(url).then((response) => response.json()) }}
      >
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </SWRConfig>
    </>
  );
}

export default MyApp;
