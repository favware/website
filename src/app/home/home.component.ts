import { Component, OnInit } from '@angular/core';
import { oneLine } from 'common-tags';
import moment from 'moment';

import {
  ASSET_BASE_PATH,
  AWESOME_CONVERTER_GITHUB,
  AWESOME_CONVERTER_YARN,
  AWESOME_CRYPTO_GITHUB,
  AWESOME_CRYPTO_YARN,
  AWESOME_QUERYSTRING_GITHUB,
  AWESOME_QUERYSTRING_YARN,
  AWESOME_YAML_READER_GITHUB,
  AWESOME_YAML_READER_YARN,
  AWESOME_ZALGO_GITHUB,
  AWESOME_ZALGO_YARN,
  CATCHCALC_GITHUB_URL,
  CONTACT_MAIL,
  CONVERTBOT_GITHUB_URL,
  DEXA_GITHUB_URL,
  DEXA_SKILL_URL,
  DISCORD_SERVER_URL,
  IPrimaryTile,
  IProjectTile,
  ITile,
  MILKY_TSLINT_GITHUB,
  MILKY_TSLINT_YARN,
  RIBBON_GITHUB_URL,
  RIBBON_INVITE_URL,
  SeoService,
  SEEDCHECKER_GITHUB_URL,
  UNESCAPE_GITHUB,
  UNESCAPE_YARN
} from '../../util';

@Component({
  selector: 'favware-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor (private seo: SeoService) {}

  private readonly metadata = {
    title: 'Favware',
    description: 'For heart and home, find my projects here',
    image: 'https://favna.xyz/assets/og-image.png',
    imageAlt: 'Social Embedding Image',
    url: '',
  };

  public readonly headerTile: IPrimaryTile = {
    header: 'Developer in Web, NodeJS, Unity3D and Java',
    subheader: 'From Web design to discord bots to indie games',
    text: ['Scroll down to see my projects'],
  };
  public readonly aboutTile: ITile = {
    header: 'About me',
    text: [
      'Greetings, My name is Jeroen Claassens (a.k.a. Favna)',
      oneLine`
                    Currently ${moment().diff('1995-02-21', 'years')} years old I am a developer hailing from The Netherlands.
                    Ever since I was a boy I have been a tech enthusiast with my main focus being the software side of the ICT.
                    While attending high school my first choice of optional subject was Informatics and this quickly showed to be my calling.
                    After I graduated from high school I had no seconds thoughts about my next step - Software Engineering at a University.
                    The university of choice ended up being The Hague University of Applied Sciences.
                    After 5 years attending this university I obtained my Bachelor of IT in the summer of 2019. At the time of writing I am
                    working for CGI Inc. in The Netherlands as a Frontend Software Engineer`,
      oneLine`
                    In my free time I have delved in a whole slew of small projects and some of these are used very actively!
                    Notable mentions are my Discord bot "Ribbon" build with NodeJS and a whole slew of NodeJS based libraries.
                    Some of these libraries had their groundwork in JavaScript however I have since learning TypeScript adopted them
                    to this language as these days I have a strong preference for TypeScript and its static type checking.
                    I have also learned C# as I have been delving into the Unity3D Game Engine for the Game Design minor
                    I have followed as part of my Software Engineering major.`,
      oneLine`
                   I still have a very broad future ahead of me and I expect that CGI will help me achieve many of my dreams.
                   That said however, playing games has always been my biggest hobby and now that I have had a taste of
                   creating games I really feel like it would be a perfect match for me.
                   However, I have also grown a passion for the frontend side of software engineering which is why I feel right
                   at home where I found my first job after graduation.`
    ],
  };
  public readonly projectsTile: IProjectTile = {
    header: 'My Projects',
    cards: [
      {
        header: {
          avatar: `assets/icons/ribbon.png`,
          imageAlt: 'Ribbon',
          title: 'Ribbon',
          subtitle: 'Discord Bot',
        },
        content: oneLine`Ever expanding all purpose Discord bot build with Discord.JS in the Commando framework. Want a feature? Request it!`,
        actions: [
          { label: 'add bot', link: RIBBON_INVITE_URL, outer: true },
          { label: 'website', link: '/ribbon', outer: false },
          { label: 'support', link: DISCORD_SERVER_URL, outer: true },
          { label: 'github', link: RIBBON_GITHUB_URL, outer: true }
        ],
      },
      {
        header: {
          avatar: `assets/icons/dexa.png`,
          imageAlt: 'Dexa',
          title: 'Dexa',
          subtitle: 'Advanced PokéDex Skill',
        },
        content: oneLine`Dexa is a PokéDex Skill for Alexa that gives you information on Pokémon, Items, Abilities, Moves and type matchups`,
        actions: [
          { label: 'add skill', link: DEXA_SKILL_URL, outer: true },
          { label: 'website', link: '/dexa', outer: false },
          { label: 'github', link: DEXA_GITHUB_URL, outer: true }
        ],
      },
      {
        header: {
          avatar: `assets/icons/seedcheck.png`,
          imageAlt: 'Seedchecker',
          title: 'Seedchecker',
          subtitle: '3DS Utility',
        },
        content: oneLine`A simple tool to check if the decryption SEED is available for a Nintendo 3DS eShop title`,
        actions: [
          { label: 'download', link: `${ASSET_BASE_PATH}/website-dist/SEEDChecker.jar`, outer: true },
          { label: 'website', link: '/seedchecker', outer: false },
          { label: 'github', link: SEEDCHECKER_GITHUB_URL, outer: true }
        ],
      },
      {
        header: {
          avatar: `assets/icons/convertbot.png`,
          imageAlt: 'Convertbot',
          title: 'Convertbot',
          subtitle: 'Conversion Utility',
        },
        content: oneLine`A basic yet robust C++ tool for unit conversion, supporting temperature, distance, volume and more`,
        actions: [
          { label: 'download', link: `${ASSET_BASE_PATH}/website-dist/ConvertBot.exe`, outer: true },
          { label: 'website', link: '/convertbot', outer: false },
          { label: 'github', link: CONVERTBOT_GITHUB_URL, outer: true }
        ],
      },
      {
        header: {
          avatar: `assets/icons/catchcalc.png`,
          imageAlt: 'CatchCalc',
          title: 'CatchCalc',
          subtitle: 'Pokémon Helper Tool',
        },
        content: oneLine`Java application to calculate the catch rate of Pokemon in the Generation 6 games (XYORAS)`,
        actions: [
          { label: 'download', link: `${ASSET_BASE_PATH}/website-dist/catchcalc.jar`, outer: true },
          { label: 'website', link: '/catchcalc', outer: false },
          { label: 'github', link: CATCHCALC_GITHUB_URL, outer: true }
        ],
      },
      {
        header: {
          avatar: `assets/icons/tava.png`,
          imageAlt: 'Ta\'Va',
          title: 'Ta\'Va - Trial of the Sun God',
          subtitle: 'Aztec adventure game',
        },
        content: oneLine`Embark on a mythological aztec puzzle game to uncover the truth behind an ominous story`,
        actions: [
          { label: 'windows', link: `${ASSET_BASE_PATH}/website-dist/tavawindows.7z`, outer: true },
          { label: 'macos', link: `${ASSET_BASE_PATH}/website-dist/tavamac.7z`, outer: true },
          { label: 'website', link: '/tava', outer: false }
        ],
      },
      {
        header: {
          avatar: `assets/icons/unescape.png`,
          imageAlt: 'Unescape Project',
          title: 'Unescape-es6',
          subtitle: 'yarn add unescape-es6',
        },
        content: oneLine`Convert HTML entities to HTML characters. For example "&amp;" converts to &`,
        actions: [
          { label: 'yarn page', link: UNESCAPE_YARN, outer: true },
          { label: 'website', link: '/unescape', outer: false },
          { label: 'github', link: UNESCAPE_GITHUB, outer: true }
        ],
      },
      {
        header: {
          avatar: `assets/icons/querystring.png`,
          imageAlt: 'Awesome Querystring',
          title: 'Awesome Querystring',
          subtitle: 'yarn add awesome-querystring',
        },
        content: oneLine`Querystring that is robust in its working yet remains awesome to TypeScript users`,
        actions: [
          { label: 'yarn page', link: AWESOME_QUERYSTRING_YARN, outer: true },
          { label: 'website', link: '/querystring', outer: false },
          { label: 'github', link: AWESOME_QUERYSTRING_GITHUB, outer: true }
        ],
      },
      {
        header: {
          avatar: `assets/icons/converter.png`,
          imageAlt: 'Awesome Converter',
          title: 'Awesome Converter',
          subtitle: 'yarn add awesome-converter',
        },
        content: oneLine`Awesome and typesafe unit converter, supports many different systems of units`,
        actions: [
          { label: 'yarn page', link: AWESOME_CONVERTER_YARN, outer: true },
          { label: 'website', link: '/converter', outer: false },
          { label: 'github', link: AWESOME_CONVERTER_GITHUB, outer: true }
        ],
      },
      {
        header: {
          avatar: `assets/icons/milkylint.png`,
          imageAlt: 'Milky TSLint',
          title: 'Milky TSLint',
          subtitle: 'yarn add -D milky-tslint',
        },
        content: oneLine`TypeScript linter plugin for Gulp. Gulp down that milk and lint your code!`,
        actions: [
          { label: 'yarn page', link: MILKY_TSLINT_YARN, outer: true },
          { label: 'website', link: '/milkylint', outer: false },
          { label: 'github', link: MILKY_TSLINT_GITHUB, outer: true }
        ],
      },
      {
        header: {
          avatar: `assets/icons/yamlreader.png`,
          imageAlt: 'Awesome YAML Reader',
          title: 'Awesome YAML Reader',
          subtitle: 'yarn add awesome-yaml-reader',
        },
        content: oneLine`Awesome minimal wrapper around js-yaml for directly reading in YAML files`,
        actions: [
          { label: 'yarn page', link: AWESOME_YAML_READER_YARN, outer: true },
          { label: 'website', link: '/yamlreader', outer: false },
          { label: 'github', link: AWESOME_YAML_READER_GITHUB, outer: true }
        ],
      },
      {
        header: {
          avatar: `assets/icons/zalgo.png`,
          imageAlt: 'Awesome Zalgo',
          title: 'Awesome Zalgo',
          subtitle: 'yarn add awesome-zalgo',
        },
        // tslint:disable-next-line:max-line-length
        content: oneLine`Unleash and banish the Zalgo Monster!  W̘͔̳͛̊ͥͤ̒Ä̺̠̫̮̦̽Ṯ̟̇̌̒̾̋C̳̱̻͐̉̓̋̒̎̚H̺͍̩̖͕̄̇͆̏́ͅ ̡̯̰̐ͨ͗ͫ̒̅O̯̠̞̯̒̂͗̾̔̕Ư̠͚̾͌̈́̇͆T̘̬̞͈̻̰͓ͯ͋͌ͬ̆ͨ̊!̤̮̯̜̟͂̉͂͊̚ ̟͚̟̩͚̉̓͑ͤͯḪ͙̦̦̘̣̳̅̈͆̿ͦ̓͜Ẹ̜̰͆ͨͪ̎ ͖͍͉̗͕̘ͯ̓ͣ̎̐͋ͧC͙̉̓̄̚͘O͓ͯ̑Ṃ̮̣͑̌̓̈́Ẹ͓͍̯̼̜̮͂͑͡S͇̣̣ͧ͒ͤ!̠͘  `,
        actions: [
          { label: 'yarn page', link: AWESOME_ZALGO_YARN, outer: true },
          { label: 'website', link: '/zalgo', outer: false },
          { label: 'github', link: AWESOME_ZALGO_GITHUB, outer: true }
        ],
      },
      {
        header: {
          avatar: `assets/icons/crypto.png`,
          imageAlt: 'Awesome Crypto',
          title: 'Awesome Crypto',
          subtitle: 'yarn add awesome-crypto',
        },
        content: oneLine`Generates secure random numbers using crypto.randomBytes(). Numbers can be of any magnitude and in any base from 2 to 64.`,
        actions: [
          { label: 'yarn page', link: AWESOME_CRYPTO_YARN, outer: true },
          { label: 'website', link: '/yamlreader', outer: false },
          { label: 'github', link: AWESOME_CRYPTO_GITHUB, outer: true }
        ],
      },
      {
        header: {
          avatar: `assets/icons/filler.png`,
          imageAlt: 'TBA',
          title: 'Something mysterious',
          subtitle: 'Filler slot',
        },
        content: oneLine`Reserving this slot for any future project. Who knows what is next on the horizon`,
        actions: [
          { label: 'the void', link: '/', outer: false }
        ],
      },

      {
        header: {
          avatar: `assets/icons/contact.png`,
          imageAlt: 'Contact Page',
          title: 'Contact Page',
          subtitle: 'Get in touch',
        },
        content: oneLine`Have questions, support requests or just want to get in contact? Go here!`,
        actions: [
          { label: 'Get in touch', link: '/contact', outer: false },
          { label: 'email now', link: CONTACT_MAIL, outer: true }
        ],
      }
    ],
  };

  ngOnInit (): void {
    this.seo.generateTags({
      title: this.metadata.title,
      description: this.metadata.description,
      image: this.metadata.image,
      imageAlt: this.metadata.imageAlt,
      url: this.metadata.url,
    });
  }
}
