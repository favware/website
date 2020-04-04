import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem, { ListItemProps } from '@Mui/ListItem';
import clsx from 'clsx';
import CatchCalcLogo from 'components/Assets/CatchCalcLogo';
import ConvertBotLogo from 'components/Assets/ConvertBotLogo';
import ConverterLogo from 'components/Assets/ConverterLogo';
import CreateDJSBotLogo from 'components/Assets/CreateDJSBotLogo';
import CryptoLogo from 'components/Assets/CryptoLogo';
import DexaLogo from 'components/Assets/DexaLogo';
import GraphqlPokemonLogo from 'components/Assets/GraphqlPokemonLogo';
import HomeIcon from 'components/Assets/HomeIcon';
import MilkyTSLintLogo from 'components/Assets/MilkyTSLintLogo';
import QuerystringLogo from 'components/Assets/QuerystringLogo';
import RibbonIcon from 'components/Assets/RibbonLogo';
import SeedCheckerLogo from 'components/Assets/SeedCheckerLogo';
import SkyraLogo from 'components/Assets/Svgs/SkyraLogo';
import TavaLogo from 'components/Assets/TavaLogo';
import UnescapeLogo from 'components/Assets/UnescapeLogo';
import YamlreaderLogo from 'components/Assets/YamlreaderLogo';
import ZalgoLogo from 'components/Assets/ZalgoLogo';
import React, { createRef, PropsWithChildren, ReactElement, useState } from 'react';

const drawerWidth = 260;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex'
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    menuButton: {
      marginRight: 36
    },
    hide: {
      display: 'none'
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap'
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1
      }
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
      padding: theme.spacing(3)
    },
    divider: {
      marginBottom: theme.spacing(1)
    }
  })
);

export const appBarRef = createRef<HTMLDivElement>();

export default ({ children }: PropsWithChildren<unknown>) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navItems: NavItem[] = [
    { text: 'Home', icon: <HomeIcon />, linkTo: '/' },
    { text: 'Skyra', icon: <SkyraLogo />, linkTo: '/skyra', enableExtraPadding: true },
    { text: 'Dexa', icon: <DexaLogo />, linkTo: '/dexa' },
    { text: 'GraphQL Pokemon', icon: <GraphqlPokemonLogo />, linkTo: '/graphql-pokemon' },
    { text: 'Ribbon', icon: <RibbonIcon />, linkTo: '/ribbon' },
    { text: 'SeedChecker', icon: <SeedCheckerLogo />, linkTo: '/seedchecker' },
    { text: 'ConvertBot', icon: <ConvertBotLogo />, linkTo: '/convertbot' },
    { text: 'CatchCalc', icon: <CatchCalcLogo />, linkTo: '/catchcalc' },
    { text: "Ta'Va", icon: <TavaLogo />, linkTo: '/tava' },
    { text: '@favware/querystring', icon: <QuerystringLogo />, linkTo: '/querystring' },
    { text: '@favware/converter', icon: <ConverterLogo />, linkTo: '/converter' },
    { text: '@favware/crypto', icon: <CryptoLogo />, linkTo: '/crypto' },
    { text: '@favware/zalgo', icon: <ZalgoLogo />, linkTo: '/zalgo' },
    { text: '@favware/yamlreader', icon: <YamlreaderLogo />, linkTo: '/yamlreader' },
    { text: '@favware/unescape', icon: <UnescapeLogo />, linkTo: '/unescape' },
    { text: 'Create DJS Bot', icon: <CreateDJSBotLogo />, linkTo: '/create-djsbot' },
    { text: '@favware/milky-tslint', icon: <MilkyTSLintLogo />, linkTo: '/milky-tslint' }
  ];

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
        ref={appBarRef}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Favware
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>{theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}</IconButton>
        </div>
        <Divider />
        <List>
          <ListItem onClick={handleDrawerClose} key={-1} text="Contact" linkTo="/contact" openState={open} enableExtraPadding>
            <ContactMailIcon />
          </ListItem>

          <Divider light classes={{ root: classes.divider }} />

          {navItems.map((navItem, index) => (
            <ListItem
              onClick={handleDrawerClose}
              key={index}
              text={navItem.text}
              linkTo={navItem.linkTo}
              openState={open}
              enableExtraPadding={navItem.enableExtraPadding}
            >
              {navItem.icon}
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
};

interface NavItem extends Pick<ListItemProps, 'text' | 'linkTo'> {
  icon: ReactElement;
  enableExtraPadding?: boolean;
}
