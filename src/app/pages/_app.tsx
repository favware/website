import { DefaultSeo as DefaultSeoProps } from '@Config/next-seo.config';
import theme from '@Config/Theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { DefaultSeo } from 'next-seo';
import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import TagManager, { TagManagerArgs } from 'react-gtm-module';

export default class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }

    const tagManagerArgs: TagManagerArgs = {
      gtmId: 'UA-114064877-3'
    };

    TagManager.initialize(tagManagerArgs);
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <meta content="ie=edge" httpEquiv="X-UA-Compatible" />
          <DefaultSeo {...DefaultSeoProps} />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}
