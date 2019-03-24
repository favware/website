import { MetaLoader, MetaStaticLoader, PageTitlePositioning } from '@ngx-meta/core';

export const metaFactory = (): MetaLoader => {
  return new MetaStaticLoader({
    pageTitlePositioning: PageTitlePositioning.AppendPageTitle,
    pageTitleSeparator: ' - ',
    applicationName: 'Favware',
    defaults: {
      title: 'Favware',
      description: 'Favna\'s personal page of projects',
      'og:image': 'https://favna.xyz/assets/og-image.png',
      'og:image:type': 'image/png',
      'og:image:alt': 'Fancy social share image',
      'og:image:height': '628',
      'og:image:width': '1200',
      'og:type': 'website',
      'og:locale': 'en_US',
      'fb:app_id': '977960562367980',
      'twitter:card': 'summary_large_image',
      'twitter:site': '@Favna_',
      'twitter:image': 'https://favna.xyz/assets/og-image.png',
      'twitter:image:alt': 'Fancy social share image',
    },
  });
};
