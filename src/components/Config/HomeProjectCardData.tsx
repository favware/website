import SkyraLogo from '@Assets/Svgs/SkyraLogo';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import AppleIcon from '@material-ui/icons/Apple';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';
import Link from '@Mui/Link';
import type { CardProps } from '@Mui/ProjectCard';
import {
  CATCHCALC_DOWNLOAD_URL,
  CATCHCALC_GITHUB_URL,
  CONVERTBOT_DOWNLOAD_URL,
  CONVERTBOT_GITHUB_URL,
  CONVERTER_GITHUB,
  CONVERTER_YARN,
  CREATE_DJSBOT_GITHUB,
  CREATE_DJSBOT_YARN,
  CRYPTO_GITHUB,
  CRYPTO_YARN,
  DEXA_GITHUB_URL,
  DEXA_SKILL_URL,
  GRAPHQL_POKEMON_GITHUB_URL,
  GRAPHQL_POKEMON_PLAYGROUND,
  MILKY_TSLINT_YARN,
  NINTENDO_SWITCH_ESHOP_GITHUB,
  NINTENDO_SWITCH_ESHOP_YARN,
  QUERYSTRING_GITHUB,
  QUERYSTRING_YARN,
  RIBBON_GITHUB_URL,
  SEEDCHECKER_DOWNLOAD_URL,
  SEEDCHECKER_GITHUB_URL,
  SKIP_DEPENDENCY_GITHUB,
  SKIP_DEPENDENCY_YARN,
  SKYRA_GITHUB_URL,
  SKYRA_INVITE_URL,
  SKYRA_SERVER_URL,
  TAVA_MAC_DOWNLOAD,
  TAVA_WINDOWS_DOWNLOAD,
  UNESCAPE_GITHUB,
  UNESCAPE_YARN,
  ZALGO_GITHUB,
  ZALGO_YARN
} from '@Utils/constants';
import AlexaIcon from 'mdi-react/AmazonAlexaIcon';
import DiscordIcon from 'mdi-react/DiscordIcon';
import GraphIcon from 'mdi-react/GraphIcon';
import GraphqlIcon from 'mdi-react/GraphqlIcon';
import CPPIcon from 'mdi-react/LanguageCppIcon';
import JavaIcon from 'mdi-react/LanguageJavaIcon';
import WindowsIcon from 'mdi-react/MicrosoftWindowsIcon';
import NpmIcon from 'mdi-react/NpmIcon';
import React from 'react';

const HomeProjectCardData: CardProps[] = [
  {
    textContent:
      "Skyra is the single most advanced moderation bot you'll ever need. She's a configurable Discord Bot with moderation, fun, and much more!",
    logo: <SkyraLogo />,
    logoAlt: 'Skyra Logo',
    actions: [
      { to: '/skyra', icon: <LanguageIcon />, tooltipTitle: 'More information' },
      { to: SKYRA_INVITE_URL, icon: <AddIcon />, tooltipTitle: 'Add to your server', external: true },
      { to: SKYRA_SERVER_URL, icon: <DiscordIcon />, tooltipTitle: 'Get support with Skyra', external: true },
      {
        to: SKYRA_GITHUB_URL,
        icon: <GitHubIcon />,
        tooltipTitle: 'Check out the source code on GitHub',
        external: true
      }
    ],
    cardHeaderProps: {
      title: 'Skyra',
      subheader: 'Multipurpose Discord Bot'
    }
  },
  {
    textContent: 'Dexa is a PokéDex Skill for Alexa that gives you information on Pokémon, Items, Abilities and Moves.',
    logo: 'dexa',
    logoAlt: 'D',
    actions: [
      { to: '/dexa', icon: <LanguageIcon />, tooltipTitle: 'More information' },
      { to: DEXA_SKILL_URL, icon: <AlexaIcon />, tooltipTitle: 'Add skill to your Alexa-enabled device', external: true },
      {
        to: DEXA_GITHUB_URL,
        icon: <GitHubIcon />,
        tooltipTitle: 'Check out the source code on GitHub',
        external: true
      }
    ],
    cardHeaderProps: {
      title: 'Dexa',
      subheader: 'Advanced PokéDex Skill'
    }
  },
  {
    textContent: (
      <Typography component="span" color="textSecondary" variant="body2">
        {'GraphQL based API offering a massive amount of Pokémon data - currently serving at least '}
        <Link href="/skyra" nextPage>
          <Typography component="span" color="primary" variant="body2">
            Skyra
          </Typography>
        </Link>
        {' and '}
        <Link href="/dexa" nextPage>
          <Typography component="span" color="primary" variant="body2">
            Dexa
          </Typography>
        </Link>
        {'.'}
      </Typography>
    ),
    logo: 'gqlp',
    logoAlt: 'GP',
    actions: [
      { to: '/graphql-pokemon', icon: <LanguageIcon />, tooltipTitle: 'More information' },
      { to: GRAPHQL_POKEMON_PLAYGROUND, icon: <GraphqlIcon />, tooltipTitle: 'Use the GraphQL-Playground', external: true },
      {
        to: GRAPHQL_POKEMON_GITHUB_URL,
        icon: <GitHubIcon />,
        tooltipTitle: 'Check out the source code on GitHub',
        external: true
      }
    ],
    cardHeaderProps: {
      title: 'GraphQL-Pokemon',
      subheader: 'Advanced GraphQL Pokémon Data API'
    }
  },
  {
    textContent: 'Querystring that is robust in its working yet remains awesome to TypeScript users.',
    logo: 'querystring',
    logoAlt: 'Q',
    actions: [
      { to: '/querystring', icon: <LanguageIcon />, tooltipTitle: 'More information' },
      { to: QUERYSTRING_YARN, icon: <NpmIcon />, tooltipTitle: 'View on Yarnpkg', external: true },
      { to: QUERYSTRING_GITHUB, icon: <GitHubIcon />, tooltipTitle: 'View on Yarnpkg', external: true }
    ],
    cardHeaderProps: {
      title: (
        <span>
          @favware/
          <wbr />
          querystring
        </span>
      ),
      subheader: 'yarn add @favware/querystring'
    }
  },
  {
    textContent: 'Awesome and typesafe unit converter, supports many different systems of units.',
    logo: 'converter',
    logoAlt: 'AC',
    actions: [
      { to: '/converter', icon: <LanguageIcon />, tooltipTitle: 'More information' },
      { to: CONVERTER_YARN, icon: <NpmIcon />, tooltipTitle: 'View on Yarnpkg', external: true },
      { to: CONVERTER_GITHUB, icon: <GitHubIcon />, tooltipTitle: 'View GitHub repository', external: true }
    ],
    cardHeaderProps: {
      title: (
        <span>
          @favware/
          <wbr />
          converter
        </span>
      ),
      subheader: 'yarn add @favware/converter'
    }
  },
  {
    textContent: (
      <Typography component="span" color="textSecondary" variant="body2">
        {'Generates secure random numbers using '}
        <code>crypto.randomBytes()</code>
        {' Numbers can be of any magnitude and in any base from 2 to 64.'}
      </Typography>
    ),
    logo: 'crypto',
    logoAlt: 'C',
    actions: [
      { to: '/crypto', icon: <LanguageIcon />, tooltipTitle: 'More information' },
      { to: CRYPTO_YARN, icon: <NpmIcon />, tooltipTitle: 'View on Yarnpkg', external: true },
      { to: CRYPTO_GITHUB, icon: <GitHubIcon />, tooltipTitle: 'View GitHub repository', external: true }
    ],
    cardHeaderProps: {
      title: '@favware/crypto',
      subheader: 'yarn add @favware/crypto'
    }
  },
  {
    textContent:
      "A Node.JS library written to extract Nintendo Switch's eShop game and pricing information. Supports eShop data from America, Europe and Asia!",
    logo: 'nintendoeshop',
    logoAlt: 'NSE',
    actions: [
      { to: NINTENDO_SWITCH_ESHOP_YARN, icon: <NpmIcon />, tooltipTitle: 'View on Yarnpkg', external: true },
      { to: NINTENDO_SWITCH_ESHOP_GITHUB, icon: <GitHubIcon />, tooltipTitle: 'View GitHub repository', external: true }
    ],
    cardHeaderProps: {
      title: 'nintendo-switch-eshop',
      subheader: 'yarn add nintendo-switch-eshop'
    }
  },
  {
    textContent: 'Embark on a mythological aztec puzzle game to uncover the truth behind an ominous story.',
    logo: 'tava',
    logoAlt: 'T',
    actions: [
      { to: '/tava', icon: <LanguageIcon />, tooltipTitle: 'More information' },
      { to: TAVA_WINDOWS_DOWNLOAD, icon: <WindowsIcon />, tooltipTitle: 'Download for Windows', external: true },
      { to: TAVA_MAC_DOWNLOAD, icon: <AppleIcon />, tooltipTitle: 'Download for MacOS', external: true }
    ],
    cardHeaderProps: {
      title: "Ta'Va - Trial of the Sun God",
      subheader: 'Aztec adventure game'
    }
  },
  {
    textContent: 'All purpose Discord bot build with Discord.JS in the Commando framework. Superseded by Skyra in public production.',
    logo: 'ribbon',
    logoAlt: 'R',
    actions: [
      { to: '/ribbon', icon: <LanguageIcon />, tooltipTitle: 'More information' },
      { to: RIBBON_GITHUB_URL, icon: <GitHubIcon />, tooltipTitle: 'View GitHub repository', external: true }
    ],
    cardHeaderProps: {
      title: 'Ribbon',
      subheader: 'Multipurpose Discord Bot'
    }
  },
  {
    textContent: 'A simple tool to check if the decryption SEED is available for a Nintendo 3DS eShop title.',
    logo: 'seedcheck',
    logoAlt: 'SC',
    actions: [
      { to: '/seedcheck', icon: <LanguageIcon />, tooltipTitle: 'More information' },
      { to: SEEDCHECKER_DOWNLOAD_URL, icon: <JavaIcon />, tooltipTitle: 'Download', external: true },
      { to: SEEDCHECKER_GITHUB_URL, icon: <GitHubIcon />, tooltipTitle: 'View GitHub repository', external: true }
    ],
    cardHeaderProps: {
      title: 'Seedchecker',
      subheader: '3DS Utility'
    }
  },
  {
    textContent: 'Java application to calculate the catch rate of Pokémon in the Generation 6 games (XYORAS).',
    logo: 'catchcalc',
    logoAlt: 'CC',
    actions: [
      { to: '/catchcalc', icon: <LanguageIcon />, tooltipTitle: 'More information' },
      { to: CATCHCALC_DOWNLOAD_URL, icon: <JavaIcon />, tooltipTitle: 'Download', external: true },
      { to: CATCHCALC_GITHUB_URL, icon: <GitHubIcon />, tooltipTitle: 'View GitHub repository', external: true }
    ],
    cardHeaderProps: {
      title: 'Convertbot',
      subheader: 'Pokémon Helper Tool'
    }
  },
  {
    textContent: `Unleash and banish the Zalgo Monster!
    T͕̖͈̤̲͉̘ͨh̴͖͚̻̲̋̉͛͋̊͂ê͙͇̥̱͙͖͗̄ͫ ̐hi͊͊̅̋ͤͪ͘vͧͯ̒̇̃eͩ̾̏ͭͨ̔m͙̜i͚̳̝̞̭͇͖ń̙̪͓̝̬̯̦͂̐ͦ͘d̍͋ͭ̓̌̈̐̕ ͉͓̝̦̜̼̆r̳̣̟̘̪̺̰̓̐ͭ͛e̗͎͋ï̤̺̥̣͔̭̫̊̓͌͊͟g̢͊n͓͚ͪ̑ͤͧ̚s̥̗̝͈̀͗̈ ̟̄ͨͨ̌͛̚̚s̵̫̬͇̎ͅủ͓͇͎̟ͤ͒p̪̰͉͔͓̝ͩ͊͐͑̚r̴̎e̶̮̮͉͍̲̭m̳͍̪͉̅ͮ̋̋͊e̖̱̙̬̽̃̽ͭͪ̀͒
̢̜͙̗̣̽͊͒͆̽̎I̜͓̺͔̽͊̀͛t̴ͥ ̻̺̠̮̭ͥ̾͋̔̈͘i̮͓̙s̵̖̠̠̆ ̯̻ͯͩͩ̋u͉̞͒̆̅̐͛̚n͕̲͔͞s̟͍̖̠̬̯͑ͫͯ̉ͭ̑͝ṫ̗͉̙̠͖̫͆ͅo̭͕̼̝ͬ͆̽͑͞p͚͑̇͟p̫͆̓̂ͤ̕ͅa͈̫͇̖̺͚͌ͥ̏b̻͉̤͔̟̍̿ḷ̠͈̺͋͑͗̓̈e͋ͬ̓͋҉̲̭̠̯
̜̣̩ͥͭ̑̀̅̽̑ͅẈ̛̪̝̙̖͎A̜̗̱̞͍̗ͥ̈́̽̈̽T̰̥͔̺̺̤̟ͪC͔̪ͧͅH̒͐҉̜̟̭̘͈ ̸͉̟͙͔̎̅͒ͫ̽Ō̜͕̮̱͠U̶̪͐̃̑̓́̍̈́T͎̝̮!̜̉ ̹̻̼̞̺̦̎̉̎ͩ̊̿̽͠Ḫ͂̐̋ͫͨ͌E̸̦ ̧̲̖̻̖͍̗͙ͧC̶̗̰̤̮͔̐O̻̞̭̦͙̿͐͌̀̏M͖͉͍̌͑̽́E͇̳̖̯̖͛͠S̴͙̺̤̝̋̆͊̊̍ͅ!̥̣̣͙̌̿ͫ̌̆͡`,
    logo: 'zalgo',
    logoAlt: 'Z',
    actions: [
      { to: '/zalgo', icon: <LanguageIcon />, tooltipTitle: 'More information' },
      { to: ZALGO_YARN, icon: <NpmIcon />, tooltipTitle: 'View on Yarnpkg', external: true },
      { to: ZALGO_GITHUB, icon: <GitHubIcon />, tooltipTitle: 'View GitHub repository', external: true }
    ],
    cardHeaderProps: {
      title: '@favware/zalgo',
      subheader: 'yarn add @favware/zalgo'
    }
  },
  {
    textContent: 'Awesome and typesafe minimal warpper around js-yaml for directly reading in YAML files.',
    logo: 'yamlreader',
    logoAlt: 'YR',
    actions: [
      { to: '/converter', icon: <LanguageIcon />, tooltipTitle: 'More information' },
      { to: CONVERTER_YARN, icon: <NpmIcon />, tooltipTitle: 'View on Yarnpkg', external: true },
      { to: CONVERTER_GITHUB, icon: <GitHubIcon />, tooltipTitle: 'View GitHub repository', external: true }
    ],
    cardHeaderProps: {
      title: (
        <span>
          @favware/
          <wbr />
          yamlreader
        </span>
      ),
      subheader: 'yarn add @favware/yamlreader'
    }
  },
  {
    textContent: 'Convert HTML entities to HTML characters. Fully compatible for both Node.JS backends and any frontend application.',
    logo: 'unescape',
    logoAlt: 'U',
    actions: [
      { to: '/unescape', icon: <LanguageIcon />, tooltipTitle: 'More information' },
      { to: UNESCAPE_YARN, icon: <NpmIcon />, tooltipTitle: 'View on Yarnpkg', external: true },
      { to: UNESCAPE_GITHUB, icon: <GitHubIcon />, tooltipTitle: 'View GitHub repository', external: true }
    ],
    cardHeaderProps: {
      title: (
        <span>
          @favware/
          <wbr />
          unescape
        </span>
      ),
      subheader: 'yarn add @favware/unescape'
    }
  },
  {
    textContent: '⚡ CLI tool for to bootstrap a Discord.JS bot using the Commando framework. Has templates for both JavaScript and TypeScript.',
    logo: 'create-djsbot',
    logoAlt: 'CDB',
    actions: [
      { to: '/create-djsbot', icon: <LanguageIcon />, tooltipTitle: 'More information' },
      { to: CREATE_DJSBOT_YARN, icon: <NpmIcon />, tooltipTitle: 'View on Yarnpkg', external: true },
      { to: CREATE_DJSBOT_GITHUB, icon: <GitHubIcon />, tooltipTitle: 'View GitHub repository', external: true }
    ],
    cardHeaderProps: {
      title: 'create-djsbot',
      subheader: 'yarn create djsbot'
    }
  },
  {
    textContent: "This is for when some dependency you're pulling in is forcing some other dependency you just don't like.",
    logo: <GraphIcon style={{ fill: 'white' }} />,
    logoAlt: 'SD',
    actions: [
      { to: SKIP_DEPENDENCY_YARN, icon: <NpmIcon />, tooltipTitle: 'View on Yarnpkg', external: true },
      { to: SKIP_DEPENDENCY_GITHUB, icon: <GitHubIcon />, tooltipTitle: 'View GitHub repository', external: true }
    ],
    cardHeaderProps: {
      title: '@favware/skip-dependency',
      subheader: 'Skip pesky dependencies with ease'
    }
  },
  {
    textContent: 'TypeScript linter Gulp plugin, based on gulp-tslint but updated for modernization. Gulp down that milk and lint your code!',
    logo: 'milkylint',
    logoAlt: 'MT',
    actions: [{ to: MILKY_TSLINT_YARN, icon: <NpmIcon />, tooltipTitle: 'View on Yarnpkg', external: true }],
    cardHeaderProps: {
      title: '@favware/milky-tslint',
      subheader: 'yarn add --dev @favware/milky-tslint'
    }
  },
  {
    textContent: 'A basic yet robust C++ tool for unit conversion, supporting temperature, distance, volume, and more.',
    logo: 'convertbot',
    logoAlt: 'CB',
    actions: [
      { to: '/convertbot', icon: <LanguageIcon />, tooltipTitle: 'More information' },
      { to: CONVERTBOT_DOWNLOAD_URL, icon: <CPPIcon />, tooltipTitle: 'Download', external: true },
      { to: CONVERTBOT_GITHUB_URL, icon: <GitHubIcon />, tooltipTitle: 'View GitHub repository', external: true }
    ],
    cardHeaderProps: {
      title: 'Convertbot',
      subheader: 'Conversion Utility'
    }
  }
];

export default HomeProjectCardData;
