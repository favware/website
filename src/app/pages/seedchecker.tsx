import { createSeoProps } from '@Config/next-seo.config';
import Layout from '@Pres/Layout';
import { NextSeo } from 'next-seo';
import React from 'react';

export default () => (
  <>
    <NextSeo {...createSeoProps({ title: 'SeedChecker' })} />
    <Layout>
      <p>SeedChecker Page</p>
    </Layout>
  </>
);
