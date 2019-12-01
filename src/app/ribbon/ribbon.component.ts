import { Component, OnInit } from '@angular/core';
import { SeoService, SeoTags } from '@services/seo.service';
import { RIBBON_GITHUB_URL } from '@util/constants';
import { IPrimaryTile } from '@util/interfaces';
import ngForTrackBy from '@util/ngForTrackBy';
import { oneLine } from 'common-tags';

@Component({
  selector: 'favware-ribbon',
  templateUrl: './ribbon.component.html',
  styleUrls: ['./ribbon.component.scss'],
})
export class RibbonComponent implements OnInit {
  public ngForTrackBy = ngForTrackBy;
  public headerTile: IPrimaryTile = {
    header: 'Ribbon',
    subheader: 'A feature rich, modular Discord.JS-Commando server bot',
    buttons: [
      {
        text: 'View on GitHub',
        url: RIBBON_GITHUB_URL,
        color: 'github',
        outer: true,
      }
    ],
  };
  public aboutTile: IPrimaryTile = {
    header: 'About',
    subheader: '',
    text: [oneLine`
            Ribbon was a public server bot written for the [all-in-one voice and text chat application Discord](https://discordapp.com).
            It offered a rich amount of features to make your experience on Discord much easier, faster and better.
            As of December 1st 2019 Ribbon has been discontinued after about 2 years of continued support. This decision was made for me
            to be able to put my full efforts in the joint project to make Skyra ([website](https://skyra.pw)) an even better Discord bot
            than it already is. Skyra offers all features that Ribbon used to + much much more!`],
  };
  public metadata: SeoTags = {
    title: 'Ribbon',
    description: 'Multifunctional Discord bot',
    image: 'https://favware.tech/assets/icons/ribbon.png',
    imageAlt: 'Ribbon Preview Image',
    url: '/ribbon',
    summary: oneLine`A rich all purpose Discord bot.`,
    keywords: ['discord', 'ribbon', 'bot', 'all-purpose', 'all', 'purpose', 'chat', 'pokemon', 'casino', 'automod', 'music', 'stream', '8ball', 'fun'],
  };

  constructor (private seo: SeoService) {}

  public ngOnInit (): void {
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
