import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { oneLine } from 'common-tags';

import { COMMON_META_TAGS, DISCORD_SERVER_URL, IPrimaryTile, RIBBON_GITHUB_URL, RIBBON_INVITE_URL } from '../../util';


@Component({
  selector: 'favware-ribbon',
  templateUrl: './ribbon.component.html',
  styleUrls: ['./ribbon.component.scss'],
})
export class RibbonComponent implements OnInit {

  constructor (private title: Title, private meta: Meta) {}

  private readonly metadata = {
    name: 'Ribbon',
    description: 'Amazing multifunctional Discord bot that can do anything you want anywhere you want',
    image: 'https://favna.xyz/assets/backdrops/ribbon.webp',
    imageAlt: 'Ribbon Preview Image',
  };

  public readonly headerTile: IPrimaryTile = {
    header: 'Ribbon',
    subheader: 'A feature rich, modular Discord.JS-Commando server bot',
    buttons: [
      {
        text: 'Invite Ribbon to your server',
        url: RIBBON_INVITE_URL,
        color: 'primary',
        outer: true,
      },
      {
        text: 'Join the support server',
        url: DISCORD_SERVER_URL,
        color: 'secondary',
        outer: true,
      },
      {
        text: 'View on GitHub',
        url: RIBBON_GITHUB_URL,
        color: 'github',
        outer: true,
      }
    ],
  };
  public readonly aboutTile: IPrimaryTile = {
    header: 'About',
    subheader: '',
    text: [oneLine`
            Ribbon is a public server bot written for the [all-in-one voice and text chat application Discord](https://discordapp.com).
            It offers a rich amount of features to make your experience on Discord much easier, faster and better.
            Ribbon features commands from searching the web, moderating your server to streaming music and a lot more.
            You can check a more extensive list of commands below.`],
  };

  ngOnInit (): void {
    this.title.setTitle(this.metadata.name);
    this.meta.addTags([
      { name: 'og:url', content: '/ribbon' },
      { name: 'og:title', content: this.metadata.name },
      { name: 'og:description', content: this.metadata.description },
      { name: 'og:image', content: this.metadata.image },
      { name: 'og:image:alt', content: this.metadata.imageAlt },
      { name: 'twitter:title', content: this.metadata.name },
      { name: 'twitter:description', content: this.metadata.description },
      { name: 'twitter:image', content: this.metadata.image },
      { name: 'twitter:image:alt', content: this.metadata.imageAlt },
      ...COMMON_META_TAGS
    ]);
  }
}
