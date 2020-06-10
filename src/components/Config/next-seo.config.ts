import theme from '@Config/Theme';
import { mergeDefault } from '@klasa/utils/dist/src/lib/mergeDefault';
import { DefaultSeoProps, NextSeoProps } from 'next-seo';

type KeyedObject = Record<PropertyKey, unknown>;

export const DefaultSeo: DefaultSeoProps & KeyedObject = {
  titleTemplate: 'Favware | %s',
  title: 'Home',
  description: 'For Hearth and Home! Check out favware projects here!',
  canonical: 'https://favware.tech',
  facebook: {
    appId: '977960562367980'
  },
  additionalMetaTags: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'keywords', content: 'favna favware portfolio development skyra ribbon graphql-pokemon dexa' },
    {
      name: 'summary',
      content: [
        'On this website I am listing all the notable projects I have worked on.',
        'Consider it to be my portfolio of sorts as well as a knowledge base of information.',
        'There are also some small fun features here and more will be added in the future.'
      ].join(' ')
    },
    { name: 'robots', content: 'archive,follow,imageindex,index,odp,snippet,translate' },
    { name: 'author', content: `Jeroen Claassens, support@favware.tech` },
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
    { name: 'msapplication-TileColor', content: theme.palette.primary.main },
    { name: 'msapplication-TileImage', content: '/favicons/mstile-144x144.png' },
    { name: 'msapplication-config', content: '/favicons/browserconfig.xml' },
    { name: 'theme-color', content: theme.palette.primary.main },
    { property: 'og:email', content: 'support@favware.tech' }
  ],
  openGraph: {
    title: 'Favware',
    url: 'https://favware.tech',
    images: [
      {
        url: 'https://favware.tech/images/og.png',
        alt: 'OpenGraphImage'
      }
    ],
    type: 'website',
    locale: 'en_GB',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    site_name: 'Favware',
    profile: {
      firstName: 'Jeroen',
      lastName: 'Claassens',
      username: 'Favna',
      gender: 'male'
    }
  },
  twitter: {
    handle: '@Favna_',
    site: '@Favna_',
    cardType: 'summary'
  }
};

export const createSeoProps = (seoProps: NextSeoProps & KeyedObject) => mergeDefault(DefaultSeo, seoProps);
