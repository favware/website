import Analytics from '@Config/Analytics';
import { createSeoProps } from '@Config/next-seo.config';
import Container from '@material-ui/core/Container';
// import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import PageHeader from '@Pres/PageHeader';
import GqlpApollo from 'components/Codeblocks/GqlpApollo';
import { NextSeo } from 'next-seo';
import React from 'react';

// const useStyles = makeStyles((_theme: Theme) => createStyles({}));

export default () => {
  // const classes = useStyles();

  return (
    <>
      <Analytics />
      <NextSeo
        {...createSeoProps({
          title: 'GraphQL Pokemon',
          description: 'Extensive Pokemon GraphQL API!',
          openGraph: {
            url: 'https://favware.tech/graphql-pokemon',
            images: [
              {
                url: 'https://cdn.favware.tech/img/gqlp.png',
                alt: 'GraphQLPokemon'
              }
            ]
          }
        })}
      />
      <Container maxWidth="lg" disableGutters>
        <PageHeader title="GraphQL Pokémon" subtitle="Extensive Pokemon API with all the data you ever need." />
        <syntax-highlighter language="typescript" content={GqlpApollo} />
      </Container>
    </>
  );
};
