import { Component, OnInit } from '@angular/core';
import { SeoService, SeoTags } from '@services/seo.service';
import { SKYRA_DASHBOARD_URL, SKYRA_GITHUB_URL, SKYRA_INVITE_URL, SKYRA_SERVER_URL } from '@util/constants';
import { IMatCarouselOptions, IPrimaryTile } from '@util/interfaces';
import ngForTrackBy from '@util/ngForTrackBy';

@Component({
  selector: 'favware-skyra',
  templateUrl: './skyra.component.html',
  styleUrls: ['./skyra.component.scss']
})
export class SkyraComponent implements OnInit {
  public ngForTrackBy = ngForTrackBy;
  public headerTile: IPrimaryTile = {
    header: 'Skyra',
    subheader: 'Multipurpose Discord Bot',
    buttons: [
      {
        text: 'Invite Skyra to your server',
        url: SKYRA_INVITE_URL,
        color: 'primary',
        outer: true
      },
      {
        text: 'Join support server',
        url: SKYRA_SERVER_URL,
        color: 'secondary',
        outer: true
      },
      {
        text: 'Go to webdashboard',
        url: SKYRA_DASHBOARD_URL,
        color: 'warn',
        outer: true
      },
      {
        text: 'View on GitHub',
        url: SKYRA_GITHUB_URL,
        color: 'github',
        outer: true
      }
    ]
  };

  public aboutTile: IPrimaryTile = {
    header: 'About',
    subheader: '',
    text: [
      [
        "Skyra is the single most advanced moderation bot you'll ever need.",
        "She's a configurable Discord Bot with fun commands, social, moderation, and much more!",
        "Skyra has all the features that Ribbon did plus much much more. She's a joint effort of myself and many other developers",
        "who are just as passionate about making the best Discord bot experience that you'll ever find!"
      ].join(' '),
      '',
      '# Moderation',
      [
        'Skyra offers all the standard moderation commands you expect, like banning, muting, kicking, softbanning and',
        'more. However she includes a wide range of unique features such as logging images and reactions, and a very',
        'advanced filter. For a full list of moderation commands, visit [the commands page](https://skyra.pw/commands).'
      ].join(' '),
      '# Fun',
      [
        'Skyra can brighten up your server with many commands aimed at just adding fun, social interaction to your server',
        'She can find a random blurb of text using markov, roll a magic eightball, generate memes and much much more!'
      ].join(' '),
      '# Tools',
      [
        'Skyra will add a powerful toolset at your fingertips. From searching YouTube or Wikipedia to looking up games on',
        'IGDB or the Nintendo eShop or movies on TheMovieDatabase. She can also create polls, quote messages, get full',
        "size versions of users' avatars and many more tools alike!"
      ].join(' '),
      '# Pokémon',
      ['Skyra has a rich dataset of Pokémon data, utilizing [graphql-pokemon](/graphql-pokemon).', 'Query for data on any Pokémon, get details on items, moves and abilities,'].join(' '),
      '# Weeb',
      [
        'This is for you people of the modern age who love anime. Skyra has many anime related commands. You can make',
        "Skyra slap that annoying guy that likes Ram instead of Rem or get the cutest anime cats that you just can't wait to",
        "cuddle to death. If you're just looking for your next watch or read then Skyra has got you covered by offering you to",
        'look up anime and manga on kitsu.io.'
      ].join(' ')
    ]
  };

  public metadata: SeoTags = {
    title: 'Skyra',
    description: 'Multipurpose Discord Bot.',
    image: 'https://favware.tech/assets/icons/skyra-avatar.png',
    imageAlt: 'Skyra Logo',
    url: 'skyra',
    summary: `Skyra is the single most advanced moderation bot you\'ll ever need!`,
    keywords: ['discord', 'bot', 'skyra', 'kyra', 'favna', 'pokemon', 'moderation', 'dashboard']
  };

  public slides: { url: string }[] = [
    { url: '/assets/screenshots/skyra/moderation.png' },
    { url: '/assets/screenshots/skyra/fun.png' },
    { url: '/assets/screenshots/skyra/tools.png' },
    { url: '/assets/screenshots/skyra/pokemon.png' },
    { url: '/assets/screenshots/skyra/weeb.png' }
  ];
  public carousel: IMatCarouselOptions = {
    timings: '250ms ease-in',
    autoplay: true,
    interval: 5000,
    loop: true,
    hideArrows: false,
    hideIndicators: false,
    color: 'warn',
    maxWidth: 'auto',
    proportion: 35,
    slides: this.slides.length,
    overlayColor: '#0036393f',
    hideOverlay: true,
    useKeyboard: true,
    useMouseWheel: true,
    orientation: 'ltr'
  };

  constructor(private seo: SeoService) {}

  public ngOnInit(): void {
    this.seo.generateTags({
      title: this.metadata.title,
      description: this.metadata.description,
      image: this.metadata.image,
      imageAlt: this.metadata.imageAlt,
      url: this.metadata.url,
      summary: this.metadata.summary,
      keywords: this.metadata.keywords
    });
  }
}
