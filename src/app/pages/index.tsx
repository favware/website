import App from 'components/App';
import NoScript from 'components/Presentational/NoScript';
import React from 'react';
import { NextSeo } from 'next-seo';
import { createSeoProps } from '@Config/next-seo.config';

export default () => (
  <>
    <NextSeo {...createSeoProps({ title: 'Index' })} />
    <App>
      <p>Index Page</p>
    </App>

    <NoScript>
      <span>This site has been build with React and requires that you enable JavaScript to view the full content. Here are some strawberry eating unicorns to motivate you:</span>
      <p>
        <span role="img" aria-label="cute unicorn munching on strawberries">
          🍓🦄🍓🦄🍓🦄
        </span>
      </p>
    </NoScript>
  </>
);
