import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { oneLine } from 'common-tags';

import { COMMON_META_TAGS, DEXA_GITHUB_URL, DEXA_SKILL_URL, DISCORD_SERVER_URL, IPrimaryTile } from '../../util';


@Component({
  selector: 'favware-dexa',
  templateUrl: './dexa.component.html',
  styleUrls: ['./dexa.component.scss'],
})
export class DexaComponent implements OnInit {

  constructor (private title: Title, private meta: Meta) {}

  private readonly metadata = {
    name: 'Dexa',
    description: 'Turn your Alexa device into your own personal PokéDex',
    image: 'https://favna.xyz/assets/icons/dexa.webp',
    imageAlt: 'Dexa Preview Image',
  };

  public readonly headerTile: IPrimaryTile = {
    header: 'Dexa',
    subheader: 'Simple, Complete and Expansive PokeDex for the Amazon Alexa assisstant',
    buttons: [
      {
        text: 'Add Skill to your Alexa',
        url: DEXA_SKILL_URL,
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
        url: DEXA_GITHUB_URL,
        color: 'github',
        outer: true,
      }
    ],
  };

  public readonly aboutTile: IPrimaryTile = {
    header: 'About',
    subheader: '',
    text: [oneLine`
            Dexa makes your Alexa just as smart as the PokéDex! It offers data about your favorite Pokémon, items,
            abilities, movies and type matches just a voice command away. And if your device has a screen you even get a visual
            description as well, or you can view this in your Alexa app as well! The name Dexa has been derived by
            combining "Dex" with "Alexa". Dexa is made for
            [the Alexa devices from Amazon](https://www.amazon.com/Amazon-Echo-And-Alexa-Devices/b?ie=UTF8&node=9818047011).`],
  };

  ngOnInit (): void {
    this.title.setTitle(this.metadata.name);
    this.meta.addTags([
      { name: 'og:url', content: '/dexa' },
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
