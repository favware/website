import Analytics from '@Config/Analytics';
import { createSeoProps } from '@Config/next-seo.config';
import Error from '@Pres/Error';
import { NextSeo } from 'next-seo';
import React from 'react';

export default () => {
  return (
    <>
      <Analytics />
      <NextSeo {...createSeoProps({ title: '404', description: "How'd you get here?", openGraph: { description: "How'd you get here?" } })} />
      <Error includeMaybe />
    </>
  );
};
