import Analytics from '@Config/Analytics';
import { createSeoProps } from '@Config/next-seo.config';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PageHeader from '@Pres/PageHeader';
import SkyraFeatures from '@Pres/SkyraFeatures';
import { NextSeo } from 'next-seo';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    oddBox: {
      '&:nth-of-type(odd)': {
        flexDirection: 'row-reverse'
      }
    },
    divider: {
      marginTop: theme.spacing(1.25),
      marginBottom: theme.spacing(1.25)
    },
    text: {
      display: 'flex',
      flexDirection: 'column',
      width: '47%',
      [theme.breakpoints.down('md')]: {
        width: '100%'
      }
    }
  })
);

interface SectionProps {
  name: string;
  text: string | JSX.Element;
  previewContent: JSX.Element;
}

const Section = ({ name, previewContent, text }: SectionProps) => {
  const classes = useStyles();

  return (
    <Box
      p={5}
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      alignContent="center"
      flexWrap="wrap"
      flexDirection="row"
      minHeight="min-content"
      className={classes.oddBox}
    >
      <div className={classes.text}>
        <Typography variant="h3" component="h1">
          {name}
        </Typography>
        <Divider classes={{ root: classes.divider }} />
        <Typography>{text}</Typography>
      </div>
      <Hidden mdDown>{previewContent}</Hidden>
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
    <PageHeader
      title="Skyra"
      subtitle="Skyra is the single most advanced moderation bot you'll ever need. She's a configurable Discord Bot with moderation, fun, and much more!"
    />
    {SkyraFeatures.map(({ name, previewContent, text }) => (
      <Section name={name} text={text} previewContent={previewContent} key={name} />
    ))}
  </>
);
