import Error from '@Pres/Error';
import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import React from 'react';

const Page404: NextPage = () => (
  <>
    <NextSeo
      title="404"
      description="How'd you get here?"
      additionalMetaTags={[
        { name: 'robots', content: 'noindex, nofollow' },
        { name: 'googlebot', content: 'noindex, nofollow' }
      ]}
    />
    <Error includeMaybe />
  </>
);

export default Page404;
