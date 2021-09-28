import Error from '@Pres/Error';
import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import React from 'react';

const ErrorPage: NextPage = () => {
  return (
    <>
      <NextSeo
        title="500"
        description="How'd you get here?"
        additionalMetaTags={[
          { name: 'robots', content: 'noindex, nofollow' },
          { name: 'googlebot', content: 'noindex, nofollow' }
        ]}
      />
      <Error />
    </>
  );
};

export default ErrorPage;
