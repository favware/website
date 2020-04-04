/* eslint-disable @typescript-eslint/camelcase */
import theme from '@Config/Theme';
import { DefaultSeoProps, NextSeoProps } from 'next-seo';
import mergeObjects, { KeyedObject } from 'utils/mergeObjects';

export const DefaultSeo: DefaultSeoProps & KeyedObject = {
  titleTemplate: 'Favware | %s',
  title: 'Home',
  description: 'For Hearth and Home! Check out favware projects here!',
  canonical: 'https://favware.tech',
  additionalMetaTags: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'robots', content: 'archive,follow,imageindex,index,odp,snippet,translate' },
    { name: 'author', content: 'Jeroen Claassens, support@favware.tech' },
    { name: 'reply-to', content: 'support@favware.tech' },
    { name: 'target', content: 'all' },
    { name: 'audience', content: 'all' },
    { name: 'coverage', content: 'Worldwide' },
    { name: 'distribution', content: 'Global' },
    { name: 'rating', content: 'safe for kids' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    { name: 'HandheldFriendly', content: 'True' },
    { name: 'apple-mobile-web-app-title', content: 'Favware' },
    { name: 'application-name', content: 'Favware' },
    { name: 'msapplication-TileColor', content: '#00aba9' },
    { name: 'msapplication-TileImage', content: '/favicons/mstile-144x144.png' },
    { name: 'msapplication-config', content: '/favicons/browserconfig.xml' },
    { name: 'theme-color', content: theme.palette.primary.main }
  ],
  openGraph: {
    title: 'Favware',
    description: 'For Hearth and Home! Check out favware projects here!',
    url: 'https://favware.tech',
    images: [
      {
        url: 'https://favware.tech/assets/og-image.png',
        alt: 'Social Embeddable Image'
      }
    ],
    type: 'website',
    locale: 'en_GB',
    site_name: 'Favware'
  },
  twitter: {
    handle: '@Favna_',
    site: '@Favna_',
    cardType: 'summary'
  }
};

export const createSeoProps = (seoProps: NextSeoProps & KeyedObject) => mergeObjects(DefaultSeo, seoProps);
