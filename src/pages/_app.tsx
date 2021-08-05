import { DefaultSeo as DefaultSeoProps } from '@Config/next-seo.config';
import theme from '@Config/Theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import Layout from '@Pres/Layout';
import type {} from '@skyra/discord-components-core';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import React, { PropsWithChildren, useEffect } from 'react';

const NoScript = dynamic(() => import('@Pres/NoScript'));

export default ({ Component, pageProps }: PropsWithChildren<AppProps>) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }

    window.$discordMessage = {
      avatars: {
        default: 'blue',
        favna: '/avatars/favna.png',
        skyra: '/avatars/skyra.png'
      },
      profiles: {
        skyra: {
          author: 'Skyra',
          avatar: '/avatars/skyra.png',
          bot: true,
          verified: true,
          roleColor: '#1E88E5'
        },
        favna: {
          author: 'Favna',
          avatar: '/avatars/favna.png',
          roleColor: '#FF0000'
        },
        kyra: {
          author: 'Kyra',
          avatar: '/avatars/kyra.png',
          roleColor: '#FF9D01'
        }
      }
    };
  }, []);

  return (
    <>
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

          /* Whitney font face to match Discord */
          @font-face {
            font-family: Whitney;
            font-style: light;
            font-weight: 300;
            src: url(https://discord.com/assets/6c6374bad0b0b6d204d8d6dc4a18d820.woff) format('woff');
          }
          @font-face {
            font-family: Whitney;
            font-style: normal;
            font-weight: 500;
            src: url(https://discord.com/assets/e8acd7d9bf6207f99350ca9f9e23b168.woff) format('woff');
          }
          @font-face {
            font-family: Whitney;
            font-style: medium;
            font-weight: 600;
            src: url(https://discord.com/assets/3bdef1251a424500c1b3a78dea9b7e57.woff) format('woff');
          }
          @font-face {
            font-family: WhitneyMedium;
            font-style: medium;
            font-weight: 600;
            src: url(https://discord.com/assets/be0060dafb7a0e31d2a1ca17c0708636.woff) format('woff');
          }
          @font-face {
            font-family: Whitney;
            font-style: bold;
            font-weight: 700;
            src: url(https://discord.com/assets/8e12fb4f14d9c4592eb8ec9f22337b04.woff) format('woff');
          }

          /* Setting default CSS for Discord messages */
          .discord-message,
          .discord-messages {
            font-family: Whitney, Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif;
          }

          .discord-messages {
            border-radius: 4px;
          }
        `}</style>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
};
