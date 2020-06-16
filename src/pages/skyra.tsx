import Analytics from '@Config/Analytics';
import { createSeoProps } from '@Config/next-seo.config';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PageHeader from '@Pres/PageHeader';
import SkyraFeatures from '@Pres/SkyraFeatures';
import { NextSeo } from 'next-seo';
import React from 'react';
import { Else, If, Then } from 'react-if';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    featureBox: {
      gridAutoFlow: 'row',
      gridRowGap: '0.25rem',
      '&:nth-of-type(odd)': {
        flexDirection: 'row-reverse'
      }
    },
    divider: {
      marginTop: theme.spacing(1.25),
      marginBottom: theme.spacing(1.25)
    },
    text: {
      gridColumn: ({ index }: Pick<SectionProps, 'index'>) => (index % 2 ? '5/8' : '1/4'),
      width: '100%'
    },
    previewBox: {
      gridColumn: ({ index }: Pick<SectionProps, 'index'>) => (index % 2 ? '1/2' : '6/8')
    },
    splitGrid: {
      gridColumn: ({ index }: Pick<SectionProps, 'index'>) => (index % 2 ? '3/4' : '5/6'),
      width: theme.spacing(10)
    }
  })
);

interface SectionProps {
  name: string;
  text: string | JSX.Element;
  previewContent: JSX.Element;
  index: number;
}

const Section = ({ name, previewContent, text, index }: SectionProps) => {
  const classes = useStyles({ index });

  return (
    <Box p={5} display="grid" minHeight="min-content" className={classes.featureBox}>
      <If condition={Boolean(index % 2)}>
        <Then>
          <Hidden mdDown>
            <Box className={classes.previewBox}>{previewContent}</Box>
            <Box className={classes.splitGrid} />
          </Hidden>
          <Box className={classes.text}>
            <Typography variant="h3" component="h1">
              {name}
            </Typography>
            <Divider classes={{ root: classes.divider }} />
            <Typography>{text}</Typography>
          </Box>
        </Then>
        <Else>
          <Box className={classes.text}>
            <Typography variant="h3" component="h1">
              {name}
            </Typography>
            <Divider classes={{ root: classes.divider }} />
            <Typography>{text}</Typography>
          </Box>
          <Hidden mdDown>
            <Box className={classes.splitGrid} />
            <Box className={classes.previewBox}>{previewContent}</Box>
          </Hidden>
        </Else>
      </If>
    </Box>
  );
};

export default () => (
  <>
    <Analytics />
    <NextSeo
      {...createSeoProps({
        title: 'Skyra',
        description: "Highly configurable and advanced Discord bot. Add Skyra to your server and you'll never need another bot.",
        openGraph: {
          url: 'https://favware.tech/skyra',
          images: [
            {
              url: 'https://cdn.favware.tech/img/skyra.png',
              alt: 'Skyra'
            }
          ]
        }
      })}
    />
    <Container maxWidth="lg" disableGutters>
      <PageHeader
        title="Skyra"
        subtitle="Skyra is the single most advanced moderation bot you'll ever need. She's a configurable Discord Bot with moderation, fun, and much more!"
      />
      {SkyraFeatures.map(({ name, previewContent, text }, index) => (
        <Section name={name} text={text} previewContent={previewContent} key={name} index={index} />
      ))}
    </Container>
  </>
);
