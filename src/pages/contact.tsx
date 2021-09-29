import GridContainer from '@Mui/GridContainer';
import GithubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import RedditIcon from '@mui/icons-material/Reddit';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import PageHeader from '@Pres/PageHeader';
import {
  CONTACT_FACEBOOK,
  CONTACT_GITHUB,
  CONTACT_LINKEDIN,
  CONTACT_MAIL,
  CONTACT_REDDIT,
  CONTACT_TWITCH,
  CONTACT_TWITTER,
  CONTACT_YOUTUBE,
  DISCORD_SERVER_URL
} from '@Utils/constants';
import { navigate } from '@Utils/skyraUtils';
import clsx from 'clsx';
import DiscordIcon from 'mdi-react/DiscordIcon';
import FacebookMessenger from 'mdi-react/FacebookMessengerIcon';
import TwitchIcon from 'mdi-react/TwitchIcon';
import { NextSeo } from 'next-seo';
import React, { ElementType } from 'react';

const useStyles = makeStyles((theme) =>
  createStyles({
    contactButton: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      justifyContent: 'flex-start'
    },
    buttonEmail: {
      backgroundColor: '#838383',
      color: theme.palette.getContrastText('#838383'),
      '&:hover': {
        backgroundColor: theme.palette.augmentColor({ color: { main: '#838383' } }).dark
      }
    },
    buttonDiscord: {
      backgroundColor: '#7289DA',
      color: theme.palette.getContrastText('#7289DA'),
      '&:hover': {
        backgroundColor: theme.palette.augmentColor({ color: { main: '#7289DA' } }).dark
      }
    },
    buttonGithub: {
      backgroundColor: '#0C0C0C',
      color: theme.palette.getContrastText('#0C0C0C'),
      '&:hover': {
        backgroundColor: theme.palette.augmentColor({ color: { main: '#0C0C0C' } }).dark
      }
    },
    buttonLinkedin: {
      backgroundColor: '#2867B2',
      color: theme.palette.getContrastText('#2867B2'),
      '&:hover': {
        backgroundColor: theme.palette.augmentColor({ color: { main: '#2867B2' } }).dark
      }
    },
    buttonTwitter: {
      backgroundColor: '#1DA1F2',
      color: theme.palette.getContrastText('#1DA1F2'),
      '&:hover': {
        backgroundColor: theme.palette.augmentColor({ color: { main: '#1DA1F2' } }).dark
      }
    },
    buttonTwitch: {
      backgroundColor: '#6441A4',
      color: theme.palette.getContrastText('#6441A4'),
      '&:hover': {
        backgroundColor: theme.palette.augmentColor({ color: { main: '#6441A4' } }).dark
      }
    },
    buttonFacebook: {
      backgroundColor: '#0078FF',
      color: theme.palette.getContrastText('#0078FF'),
      '&:hover': {
        backgroundColor: theme.palette.augmentColor({ color: { main: '#0078FF' } }).dark
      }
    },
    buttonReddit: {
      backgroundColor: '#FF4500',
      color: theme.palette.getContrastText('#FF4500'),
      '&:hover': {
        backgroundColor: theme.palette.augmentColor({ color: { main: '#FF4500' } }).dark
      }
    },
    buttonYoutube: {
      backgroundColor: '#FF0000',
      color: theme.palette.getContrastText('#FF0000'),
      '&:hover': {
        backgroundColor: theme.palette.augmentColor({ color: { main: '#FF0000' } }).dark
      }
    }
  })
);

const CONTACT_METHODS: ContactMethod[] = [
  { StartIcon: MailIcon, navigationUrl: CONTACT_MAIL, label: 'Send an email', classKey: 'Email' },
  { StartIcon: DiscordIcon, navigationUrl: DISCORD_SERVER_URL, label: 'Join Discord Server', classKey: 'Discord' },
  {
    StartIcon: GithubIcon,
    navigationUrl: CONTACT_GITHUB,
    label: 'Find me on GitHub',
    classKey: 'Github'
  },
  { StartIcon: LinkedInIcon, navigationUrl: CONTACT_LINKEDIN, label: 'View my LinkedIn Profile', classKey: 'Linkedin' },
  { StartIcon: TwitterIcon, navigationUrl: CONTACT_TWITTER, label: 'Follow me on Twitter', classKey: 'Twitter' },
  { StartIcon: FacebookMessenger, navigationUrl: CONTACT_FACEBOOK, label: 'Send a message through Facebook Messenger', classKey: 'Facebook' },
  { StartIcon: RedditIcon, navigationUrl: CONTACT_REDDIT, label: 'Send a message on Reddit', classKey: 'Reddit' },
  { StartIcon: TwitchIcon, navigationUrl: CONTACT_TWITCH, label: 'Watch my Twitch Streams', classKey: 'Twitch' },
  { StartIcon: YouTubeIcon, navigationUrl: CONTACT_YOUTUBE, label: 'Subscribe to me on YouTube', classKey: 'Youtube' }
];

const ContactPage = () => {
  const classes = useStyles();

  return (
    <>
      <NextSeo
        title="Contact"
        description="Want to get in contact with Favware? You will find your methods here!"
        openGraph={{
          url: 'https://favware.tech/contact'
        }}
      />
      <Container maxWidth="lg" disableGutters>
        <PageHeader title="Contact" subtitle="Want to get in contact with Favware? You will find your methods here!" />
        <GridContainer direction="row" classes={{}} spacing={4}>
          {CONTACT_METHODS.map(({ StartIcon, navigationUrl, label, classKey }, index) => (
            <Grid item xs={12} key={index}>
              <Button
                size="large"
                fullWidth
                classes={{ root: clsx(classes.contactButton, classes[`button${classKey}`]) }}
                variant="contained"
                color="primary"
                startIcon={<StartIcon />}
                onClick={navigate(navigationUrl)}
              >
                {label}
              </Button>
            </Grid>
          ))}
        </GridContainer>
      </Container>
    </>
  );
};

export default ContactPage;

interface ContactMethod {
  StartIcon: ElementType;
  navigationUrl: string;
  label: string;
  classKey: 'Email' | 'Discord' | 'Github' | 'Linkedin' | 'Twitter' | 'Facebook' | 'Reddit' | 'Twitch' | 'Youtube';
}
