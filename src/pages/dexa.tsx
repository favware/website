import Analytics from '@Config/Analytics';
import { createSeoProps } from '@Config/next-seo.config';
import { NextSeo } from 'next-seo';
import React from 'react';

export default () => (
  <>
    <Analytics />
    <NextSeo
      {...createSeoProps({
        title: 'Dexa',
        description: 'Simple and feature rich PokéDex skill for Alexa',
        openGraph: {
          url: 'https://favware.tech/dexa',
          images: [
            {
              url: 'https://cdn.favware.tech/img/dexa.png'
            }
          ]
        }
      })}
    />
    <p>Dexa Page</p>
  </>
);
