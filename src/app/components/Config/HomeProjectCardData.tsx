import DexaLogo from '@Assets/DexaLogo';
import GraphqlPokemonLogo from '@Assets/GraphqlPokemonLogo';
import { Typography, Avatar } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import AssistantIcon from '@material-ui/icons/Assistant';
import ChatIcon from '@material-ui/icons/Chat';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import Link from '@Mui/Link';
import { CardProps } from '@Mui/ProjectCard';
import SkyraLogo from '@Svgs/SkyraLogo';
import {
  DEXA_GITHUB_URL,
  DEXA_SKILL_URL,
  GRAPHQL_POKEMON_GITHUB_URL,
  GRAPHQL_POKEMON_PLAYGROUND,
  SKYRA_GITHUB_URL,
  SKYRA_INVITE_URL,
  SKYRA_SERVER_URL
} from '@Utils/constants';
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
      { to: SKYRA_SERVER_URL, icon: <ChatIcon />, tooltipTitle: 'Get support with Skyra', external: true },
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
    textContent: 'Dexa is a PokéDex Skill for Alexa that gives you information on Pokémon, Items, Abilities and Moves',
    logo: <DexaLogo />,
    logoAlt: 'Dexa Logo',
    actions: [
      { to: '/dexa', icon: <LanguageIcon />, tooltipTitle: 'More information' },
      { to: DEXA_SKILL_URL, icon: <AssistantIcon />, tooltipTitle: 'Add skill to your Alexa-enabled device', external: true },
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
        <Link href="/skyra" naked>
          <Typography component="span" color="secondary" variant="body2">
            Skyra
          </Typography>
        </Link>
        {' and '}
        <Link href="/dexa" naked>
          <Typography component="span" color="secondary" variant="body2">
            Dexa
          </Typography>
        </Link>
      </Typography>
    ),
    logo: <GraphqlPokemonLogo />,
    logoAlt: 'GraphQL-Pokemon Logo',
    actions: [
      { to: '/graphql-pokemon', icon: <LanguageIcon />, tooltipTitle: 'More information' },
      { to: GRAPHQL_POKEMON_PLAYGROUND, icon: <PlayCircleFilledWhiteIcon />, tooltipTitle: 'Use the GraphQL-Playground', external: true },
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
    textContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id est convallis, venenatis turpis non, convallis',
    logo: <Avatar>L</Avatar>,
    logoAlt: 'Test',
    actions: [{ to: '/dexa', icon: <LanguageIcon />, tooltipTitle: 'More information' }],
    cardHeaderProps: {
      title: 'Lipsum',
      subheader: 'Lorum ipsum'
    }
  },
  {
    textContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id est convallis, venenatis turpis non, convallis',
    logo: <Avatar>L</Avatar>,
    logoAlt: 'Test',
    actions: [{ to: '/dexa', icon: <LanguageIcon />, tooltipTitle: 'More information' }],
    cardHeaderProps: {
      title: 'Lipsum',
      subheader: 'Lorum ipsum'
    }
  },
  {
    textContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id est convallis, venenatis turpis non, convallis',
    logo: <Avatar>L</Avatar>,
    logoAlt: 'Test',
    actions: [{ to: '/dexa', icon: <LanguageIcon />, tooltipTitle: 'More information' }],
    cardHeaderProps: {
      title: 'Lipsum',
      subheader: 'Lorum ipsum'
    }
  },
  {
    textContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id est convallis, venenatis turpis non, convallis',
    logo: <Avatar>L</Avatar>,
    logoAlt: 'Test',
    actions: [{ to: '/dexa', icon: <LanguageIcon />, tooltipTitle: 'More information' }],
    cardHeaderProps: {
      title: 'Lipsum',
      subheader: 'Lorum ipsum'
    }
  },
  {
    textContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id est convallis, venenatis turpis non, convallis',
    logo: <Avatar>L</Avatar>,
    logoAlt: 'Test',
    actions: [{ to: '/dexa', icon: <LanguageIcon />, tooltipTitle: 'More information' }],
    cardHeaderProps: {
      title: 'Lipsum',
      subheader: 'Lorum ipsum'
    }
  },
  {
    textContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id est convallis, venenatis turpis non, convallis',
    logo: <Avatar>L</Avatar>,
    logoAlt: 'Test',
    actions: [{ to: '/dexa', icon: <LanguageIcon />, tooltipTitle: 'More information' }],
    cardHeaderProps: {
      title: 'Lipsum',
      subheader: 'Lorum ipsum'
    }
  },
  {
    textContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id est convallis, venenatis turpis non, convallis',
    logo: <Avatar>L</Avatar>,
    logoAlt: 'Test',
    actions: [{ to: '/dexa', icon: <LanguageIcon />, tooltipTitle: 'More information' }],
    cardHeaderProps: {
      title: 'Lipsum',
      subheader: 'Lorum ipsum'
    }
  },
  {
    textContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id est convallis, venenatis turpis non, convallis',
    logo: <Avatar>L</Avatar>,
    logoAlt: 'Test',
    actions: [{ to: '/dexa', icon: <LanguageIcon />, tooltipTitle: 'More information' }],
    cardHeaderProps: {
      title: 'Lipsum',
      subheader: 'Lorum ipsum'
    }
  },
  {
    textContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id est convallis, venenatis turpis non, convallis',
    logo: <Avatar>L</Avatar>,
    logoAlt: 'Test',
    actions: [{ to: '/dexa', icon: <LanguageIcon />, tooltipTitle: 'More information' }],
    cardHeaderProps: {
      title: 'Lipsum',
      subheader: 'Lorum ipsum'
    }
  },
  {
    textContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id est convallis, venenatis turpis non, convallis',
    logo: <Avatar>L</Avatar>,
    logoAlt: 'Test',
    actions: [{ to: '/dexa', icon: <LanguageIcon />, tooltipTitle: 'More information' }],
    cardHeaderProps: {
      title: 'Lipsum',
      subheader: 'Lorum ipsum'
    }
  },
  {
    textContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id est convallis, venenatis turpis non, convallis',
    logo: <Avatar>L</Avatar>,
    logoAlt: 'Test',
    actions: [{ to: '/dexa', icon: <LanguageIcon />, tooltipTitle: 'More information' }],
    cardHeaderProps: {
      title: 'Lipsum',
      subheader: 'Lorum ipsum'
    }
  },
  {
    textContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id est convallis, venenatis turpis non, convallis',
    logo: <Avatar>L</Avatar>,
    logoAlt: 'Test',
    actions: [{ to: '/dexa', icon: <LanguageIcon />, tooltipTitle: 'More information' }],
    cardHeaderProps: {
      title: 'Lipsum',
      subheader: 'Lorum ipsum'
    }
  },
  {
    textContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id est convallis, venenatis turpis non, convallis',
    logo: <Avatar>L</Avatar>,
    logoAlt: 'Test',
    actions: [{ to: '/dexa', icon: <LanguageIcon />, tooltipTitle: 'More information' }],
    cardHeaderProps: {
      title: 'Lipsum',
      subheader: 'Lorum ipsum'
    }
  },
  {
    textContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id est convallis, venenatis turpis non, convallis',
    logo: <Avatar>L</Avatar>,
    logoAlt: 'Test',
    actions: [{ to: '/dexa', icon: <LanguageIcon />, tooltipTitle: 'More information' }],
    cardHeaderProps: {
      title: 'Lipsum',
      subheader: 'Lorum ipsum'
    }
  },
  {
    textContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id est convallis, venenatis turpis non, convallis',
    logo: <Avatar>L</Avatar>,
    logoAlt: 'Test',
    actions: [{ to: '/dexa', icon: <LanguageIcon />, tooltipTitle: 'More information' }],
    cardHeaderProps: {
      title: 'Lipsum',
      subheader: 'Lorum ipsum'
    }
  }
];

export default HomeProjectCardData;
