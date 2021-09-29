import ContactPageIcon from '@mui/icons-material/ContactPage';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import Tooltip from '@Mui/Tooltip';
import { CONTACT_MAIL, DISCORD_SERVER_URL } from '@Utils/constants';
import { navigate } from '@Utils/skyraUtils';
import clsx from 'clsx';
import DiscordIcon from 'mdi-react/DiscordIcon';
import { useRouter } from 'next/router';
import React, { createRef, PropsWithChildren } from 'react';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      height: '100vh'
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(4),
      background: theme.palette.background.default,
      display: 'flex',
      flexDirection: 'column',
      overflowY: 'scroll'
    },
    toolbarIcon: {
      color: 'white'
    },
    toolbarIconMargin: {
      marginRight: theme.spacing(1)
    }
  })
);

export const appBarRef = createRef<HTMLDivElement>();

const Layout = ({ children }: PropsWithChildren<unknown>) => {
  const classes = useStyles();
  const { pathname } = useRouter();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" ref={appBarRef}>
        <Toolbar>
          <Box flexGrow={1} />
          <Tooltip title="Send me an email!" placement="bottom">
            <IconButton
              color="inherit"
              edge="end"
              aria-label="contact email"
              onClick={navigate(CONTACT_MAIL)}
              classes={{ root: clsx(classes.toolbarIcon, classes.toolbarIconMargin) }}
              size="large"
            >
              <MailIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title={pathname === '/contact' ? 'Go back home' : 'Get in touch with me!'} placement="bottom">
            <IconButton
              color="inherit"
              edge="end"
              aria-label={pathname === '/contact' ? 'Go back home' : 'contact email'}
              onClick={navigate(pathname === '/contact' ? '/' : '/contact')}
              classes={{ root: clsx(classes.toolbarIcon, classes.toolbarIconMargin) }}
              size="large"
            >
              {pathname === '/contact' ? <HomeIcon /> : <ContactPageIcon />}
            </IconButton>
          </Tooltip>
          <Tooltip title="Join my Discord server!" placement="bottom">
            <IconButton
              aria-label="join discord server"
              color="inherit"
              edge="end"
              onClick={navigate(DISCORD_SERVER_URL)}
              classes={{ root: classes.toolbarIcon }}
              size="large"
            >
              <DiscordIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
};

export default Layout;
