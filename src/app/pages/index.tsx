import { createSeoProps } from '@Config/next-seo.config';
import App from 'components/App';
import { NextSeo } from 'next-seo';
import React from 'react';

export default () => (
  <>
    <NextSeo {...createSeoProps({ title: 'Index' })} />
    <App>
      <p>Index Page</p>
    </App>
  </>
);
