import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@Mui/Link';
import SidenavListItem, { ListItemProps as SidenavListItemProps } from '@Mui/ListItem';
import Tooltip from '@Mui/Tooltip';
import { noOp } from '@Utils/skyraUtils';
import CatchCalcLogo from 'components/Assets/CatchCalcLogo';
import ConvertBotLogo from 'components/Assets/ConvertBotLogo';
import ConverterLogo from 'components/Assets/ConverterLogo';
import CreateDJSBotLogo from 'components/Assets/CreateDJSBotLogo';
import CryptoLogo from 'components/Assets/CryptoLogo';
import DexaLogo from 'components/Assets/DexaLogo';
import GraphqlPokemonLogo from 'components/Assets/GraphqlPokemonLogo';
import HomeIcon from 'components/Assets/HomeIcon';
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
      display: 'flex',
      height: '100vh'
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0
      }
    },
    appBar: {
      marginLeft: drawerWidth,
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`
      }
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar
    },
    drawerPaper: {
      width: drawerWidth,
      background: theme.palette.background.default,
      color: theme.palette.primary.contrastText
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(4),
      background: theme.palette.background.default,
      display: 'flex',
      flexDirection: 'column',
      overflowY: 'scroll'
    },
    divider: {
      marginBottom: theme.spacing(1)
    },
    appBarStretch: {
      ...theme.mixins.toolbar,
      padding: `0px ${theme.spacing(3)}px`,
      background: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      '&:hover': {
        cursor: 'pointer'
      }
    }
  })
);

export const appBarRef = createRef<HTMLDivElement>();

export default ({ children }: PropsWithChildren<unknown>) => {
  const classes = useStyles();
  const theme = useTheme();
  const isOnMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleSidebar = () => setMobileOpen(!mobileOpen);
  const closeSidebarOnMobile = () => (isOnMobile ? toggleSidebar() : noOp());

  const navItems: NavItem[] = [
    { text: 'Home', icon: <HomeIcon />, linkTo: '/' },
    { text: 'Skyra', icon: <SkyraLogo />, linkTo: '/skyra', enableExtraPadding: true },
    { text: 'Dexa', icon: <DexaLogo />, linkTo: '/dexa' },
    { text: 'GraphQL Pokemon', icon: <GraphqlPokemonLogo />, linkTo: '/graphql-pokemon' },
    { text: '@favware/querystring', icon: <QuerystringLogo />, linkTo: '/querystring' },
    { text: '@favware/converter', icon: <ConverterLogo />, linkTo: '/converter' },
    { text: '@favware/crypto', icon: <CryptoLogo />, linkTo: '/crypto' },
    { text: "Ta'Va", icon: <TavaLogo />, linkTo: '/tava' },
    { text: 'Ribbon', icon: <RibbonIcon />, linkTo: '/ribbon' },
    { text: 'SeedChecker', icon: <SeedCheckerLogo />, linkTo: '/seedchecker' },
    { text: 'CatchCalc', icon: <CatchCalcLogo />, linkTo: '/catchcalc' },
    { text: '@favware/zalgo', icon: <ZalgoLogo />, linkTo: '/zalgo' },
    { text: '@favware/yamlreader', icon: <YamlreaderLogo />, linkTo: '/yamlreader' },
    { text: '@favware/unescape', icon: <UnescapeLogo />, linkTo: '/unescape' },
    { text: 'Create DJS Bot', icon: <CreateDJSBotLogo />, linkTo: '/create-djsbot' },
    { text: 'ConvertBot', icon: <ConvertBotLogo />, linkTo: '/convertbot' }
  ];

  const drawer = (
    <>
      <Tooltip title="Go back to homepage">
        <Link href={'/'} onClick={closeSidebarOnMobile} className={classes.appBarStretch} nextPage>
          <Typography variant="h6" noWrap>
            Favware
          </Typography>
        </Link>
      </Tooltip>
      <Divider light classes={{ root: classes.divider }} />

      <List>
        <SidenavListItem onClick={closeSidebarOnMobile} key={-1} text="Contact" linkTo="/contact" enableExtraPadding>
          <ContactMailIcon />
        </SidenavListItem>

        <Divider light classes={{ root: classes.divider }} />

        {navItems.map((navItem, index) => (
          <SidenavListItem
            onClick={closeSidebarOnMobile}
            key={index}
            text={navItem.text}
            linkTo={navItem.linkTo}
            enableExtraPadding={navItem.enableExtraPadding}
          >
            {navItem.icon}
          </SidenavListItem>
        ))}
      </List>
    </>
  );

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar} ref={appBarRef}>
        <Toolbar>
          <Hidden smUp>
            <IconButton color="inherit" edge="start" onClick={toggleSidebar} className={classes.menuButton}>
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Box component="nav" className={classes.drawer}>
        <Hidden smUp>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={toggleSidebar}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown>
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </Box>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
};

interface NavItem extends Pick<SidenavListItemProps, 'text' | 'linkTo' | 'enableExtraPadding'> {
  icon: ReactElement;
}
