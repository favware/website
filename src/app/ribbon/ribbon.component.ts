import { Component, OnInit } from '@angular/core';
import { oneLine } from 'common-tags';

import { DISCORD_SERVER_URL, IPrimaryTile, RIBBON_GITHUB_URL, RIBBON_INVITE_URL, SeoService } from '../../util';


@Component({
  selector: 'favware-ribbon',
  templateUrl: './ribbon.component.html',
  styleUrls: ['./ribbon.component.scss'],
})
export class RibbonComponent implements OnInit {

  constructor (private seo: SeoService) {}

  private readonly metadata = {
    title: 'Ribbon',
    description: 'Amazing multifunctional Discord bot that can do anything you want anywhere you want',
    image: 'https://favna.xyz/assets/icons/ribbon.png',
    imageAlt: 'Ribbon Preview Image',
    url: '/ribbon',
    summary: oneLine`A rich all purpose Discord bot that can make your server both more productive and lots more fun.
      It comes jam-packed with features and it should be your go-to number one bot for any server of any kind or size!`,
    keywords: ['discord', 'ribbon', 'bot', 'all-purpose', 'all', 'purpose', 'chat', 'pokemon', 'casino', 'automod', 'music', 'stream', '8ball', 'fun'],
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
    this.seo.generateTags({
      title: this.metadata.title,
      description: this.metadata.description,
      image: this.metadata.image,
      imageAlt: this.metadata.imageAlt,
      url: this.metadata.url,
      summary: this.metadata.summary,
      keywords: this.metadata.keywords,
    });
  }
}
