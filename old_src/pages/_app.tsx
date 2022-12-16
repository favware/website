import { DefaultSeo as DefaultSeoProps } from '@Config/next-seo.config';
import theme from '@Config/Theme';
import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider, Theme, ThemeProvider } from '@mui/material/styles';
import Layout from '@Pres/Layout';
import type { NextPage } from 'next';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import React, { useEffect } from 'react';
import createEmotionCache from '@Utils/createEmotionCache';

declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

interface Props extends AppProps {
  emotionCache?: EmotionCache;
}

const NoScript = dynamic(() => import('@Pres/NoScript'));
const clientSideEmotionCache = createEmotionCache();

const App: NextPage<Props> = ({ Component, emotionCache = clientSideEmotionCache, pageProps }) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <DefaultSeo {...DefaultSeoProps} />
      <Head>
        <meta content="ie=edge" httpEquiv="X-UA-Compatible" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicons/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color={theme.palette.primary.main} />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />

        <NoScript>
          <span>
            This site has been build with React and requires that you enable JavaScript to view the full content. Here are some strawberry eating
            unicorns to motivate you:
          </span>
          <p>
            <span role="img" aria-label="cute unicorn munching on strawberries">
              🍓🦄🍓🦄🍓🦄
            </span>
          </p>
        </NoScript>
      </Head>

      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <style jsx global>{`
            a,
            a:hover,
            a:focus {
              text-decoration: none !important;
            }

            *::-webkit-scrollbar:hover {
              background-color: rgba(100, 100, 100, 0.09);
            }

            *::-webkit-scrollbar-thumb:vertical {
              background: rgba(100, 100, 100, 0.5);
              -webkit-border-radius: 100px;
            }

            *::-webkit-scrollbar-thumb:vertical:active {
              background: rgba(100, 100, 100, 0.61);
              -webkit-border-radius: 100px;
            }

            *::-webkit-scrollbar {
              width: 0.5em;
              overflow: visible;
              border-radius: 4px;
              -webkit-border-radius: 4px;
            }

            *::-webkit-scrollbar-track {
              opacity: 0;
              -webkit-transition: all 0.5s;
            }

            *::-webkit-scrollbar-thumb {
              overflow: visible;
              border-radius: 4px;
              background: rgba(100, 100, 100, 0.2);
            }
          `}</style>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </StyledEngineProvider>
    </CacheProvider>
  );
};

export default App;
