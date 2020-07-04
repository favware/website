import Analytics from '@Config/Analytics';
import { createSeoProps } from '@Config/next-seo.config';
import Error from '@Pres/Error';
import { NextSeo } from 'next-seo';
import React from 'react';

export default () => {
  return (
    <>
      <Analytics />
      <NextSeo
        {...createSeoProps({
          title: '500',
          description: "How'd you get here?",
          additionalMetaTags: [
            { name: 'robots', content: 'noindex, nofollow' },
            { name: 'googlebot', content: 'noindex, nofollow' }
          ]
        })}
      />
      <Error />
    </>
  );
};
