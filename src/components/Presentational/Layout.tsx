import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import HomeIcon from '@material-ui/icons/Home';
import MailIcon from '@material-ui/icons/Mail';
import Tooltip from '@Mui/Tooltip';
import { CONTACT_MAIL, DISCORD_SERVER_URL } from '@Utils/constants';
import { navigate } from '@Utils/skyraUtils';
import clsx from 'clsx';
import DiscordIcon from 'mdi-react/DiscordIcon';
import { useRouter } from 'next/router';
import React, { createRef, PropsWithChildren } from 'react';

const useStyles = makeStyles((theme: Theme) =>
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
            >
              {pathname === '/contact' ? <HomeIcon /> : <ContactSupportIcon />}
            </IconButton>
          </Tooltip>
          <Tooltip title="Join my Discord server!" placement="bottom">
            <IconButton
              aria-label="join discord server"
              color="inherit"
              edge="end"
              onClick={navigate(DISCORD_SERVER_URL)}
              classes={{ root: classes.toolbarIcon }}
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
