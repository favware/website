import Analytics from '@Config/Analytics';
import { createSeoProps } from '@Config/next-seo.config';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GhIcon from '@material-ui/icons/GitHub';
import GridContainer from '@Mui/GridContainer';
import Link from '@Mui/Link';
import PageHeader from '@Pres/PageHeader';
import Section from '@Pres/Section';
import { DEXA_GITHUB_URL, DEXA_SKILL_URL } from '@Utils/constants';
import { navigate } from '@Utils/skyraUtils';
import clsx from 'clsx';
import AlexaIcon from 'mdi-react/AmazonAlexaIcon';
import { NextSeo } from 'next-seo';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    buttonLabel: {
      textAlign: 'left'
    },
    buttonMargin: {
      marginTop: theme.spacing(2)
    },
    ghButton: {
      backgroundColor: '#0C0C0C',
      '&:hover': {
        backgroundColor: theme.palette.augmentColor({ main: '#0C0C0C' }).dark
      }
    },
    link: {
      color: theme.palette.secondary.main,
      fontSize: theme.spacing(2),
      lineHeight: 1.5
    },
    commandHeading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular
    },
    commandExample: {
      fontStyle: 'italic'
    },
    columizedExpansionDetails: {
      flexDirection: 'column'
    }
  })
);

const VOICE_COMMANDS: VoiceCommand[] = [
  { heading: 'Launch', description: 'Launches Dexa, this should always be your first command.', example: 'Alexa, launch Dexa Browser.' },
  { heading: 'Help', description: 'Alexa will read out the how-to for Dexa.', example: 'Alexa, help.' },
  { heading: 'Stop', description: 'Stops this Dexa session.', example: 'Alexa, stop.' },
  { heading: 'Pokemon Data', description: 'Gets information about a Pokémon.', example: 'Alexa, pokemon data Dragonite.' },
  { heading: 'Ability Data', description: 'Gets information for an ability.', example: 'Alexa, ability data Multiscale.' },
  { heading: 'Item Data', description: 'Gets information for an item.', example: 'Alexa, item data Weakness Policy.' },
  { heading: 'Move Data', description: 'Gets information for a move.', example: 'Alexa, move data on Dragon Claw.' }
];

export default () => {
  const classes = useStyles();

  return (
    <>
      <Analytics />
      <NextSeo
        {...createSeoProps({
          title: 'Dexa',
          description: 'Simple and feature rich PokéDex skill for Alexa.',
          openGraph: {
            url: 'https://favware.tech/dexa',
            images: [
              {
                url: 'https://cdn.favware.tech/img/dexa.png',
                alt: 'Dexa'
              }
            ]
          }
        })}
      />
      <Container maxWidth="lg" disableGutters>
        <PageHeader title="Dexa" subtitle="Simple and feature rich PokéDex skill for Alexa." />
        <Button fullWidth variant="contained" color="primary" startIcon={<AlexaIcon />} onClick={navigate(DEXA_SKILL_URL)}>
          Add Skill to your Alexa
        </Button>
        <Button
          variant="contained"
          color="inherit"
          startIcon={<GhIcon />}
          onClick={navigate(DEXA_GITHUB_URL)}
          fullWidth
          classes={{ root: clsx(classes.buttonMargin, classes.ghButton) }}
        >
          View source code on GitHub
        </Button>
        <GridContainer>
          <Grid item xs={12}>
            <Section title="What is Dexa?" />
            <Typography gutterBottom paragraph align="left" variant="body1">
              Dexa makes your Alexa just as smart as the PokéDex! It offers data about your favourite Pokémon, items, abilities, and moves just a
              voice command away. If your device has a screen (such as the Echo Spot, the Echo Show, or your mobile app) it will even give a visual
              description the information you request! The name Dexa is a portmanteau of "Dex" and "Alexa". Dexa uses the{' '}
              <Link className={classes.link} href="/graphql-pokemon" nextPage>
                GraphQL Pokémon API
              </Link>{' '}
              for a rich and up-to-date dataset. Want to know what devices are compatible with Dexa? Check out{' '}
              <Link className={classes.link} href="//redirect.favware.tech/alexa-devices">
                the page on Alexa compatible devices on Amazon here.
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Section title="Voice Commands" />
            {VOICE_COMMANDS.map(({ heading, description, example }, index) => (
              <ExpansionPanel key={index}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls={`expansion panel ${heading}`}>
                  <Typography classes={{ root: classes.commandHeading }}>{heading}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails classes={{ root: classes.columizedExpansionDetails }}>
                  <Typography gutterBottom paragraph align="left" variant="body1">
                    {description}
                  </Typography>
                  <Typography gutterBottom paragraph align="left" variant="body1" classes={{ root: classes.commandExample }}>
                    {example}
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            ))}
          </Grid>
        </GridContainer>
      </Container>
    </>
  );
};

interface VoiceCommand {
  heading: string;
  description: string;
  example: string;
}
