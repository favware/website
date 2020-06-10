import { DefaultSeo as DefaultSeoProps } from '@Config/next-seo.config';
import theme from '@Config/Theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import Layout from '@Pres/Layout';
import {} from '@skyra/discord-components-core';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
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
        favna: 'https://cdn.favware.tech/img/favna.png',
        skyra: 'https://cdn.favware.tech/img/skyra.png'
      },
      profiles: {
        skyra: {
          author: 'Skyra',
          avatar: 'https://cdn.favware.tech/img/skyra.png',
          bot: true,
          verified: true,
          roleColor: '#1E88E5'
        },
        favna: {
          author: 'Favna',
          avatar: 'https://cdn.favware.tech/img/favna.png',
          roleColor: '#FF0000'
        },
        kyra: {
          author: 'Kyra',
          avatar: 'https://cdn.favware.tech/img/kyra.png',
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
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/favicons/manifest.json" />
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
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
        `}</style>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
};

declare global {
  type DiscordMessageAvatars = Record<string, string> &
    Partial<{
      blue: string;
      gray: string;
      green: string;
      orange: string;
      red: string;
    }>;

  type DiscordMessageProfile = Partial<{
    author: string;
    avatar: string;
    bot: boolean;
    verified: boolean;
    roleColor: string;
  }>;

  interface Window {
    $discordMessage: Partial<{
      avatars: DiscordMessageAvatars;
      profiles: Record<string, DiscordMessageProfile>;
      defaultTheme: string;
      defaultMode: string;
      defaultBackground: 'discord' | 'none';
    }>;
  }
}
