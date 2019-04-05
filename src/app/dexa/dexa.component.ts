import { Component, OnInit } from '@angular/core';
import { SeoService } from '@services/seo.service';
import { DEXA_GITHUB_URL, DEXA_SKILL_URL, DISCORD_SERVER_URL } from '@util/constants';
import { IPrimaryTile } from '@util/interfaces';
import { oneLine } from 'common-tags';

@Component({
  selector: 'favware-dexa',
  templateUrl: './dexa.component.html',
  styleUrls: ['./dexa.component.scss'],
})
export class DexaComponent implements OnInit {

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
  private readonly metadata = {
    title: 'Dexa',
    description: 'Turn your Alexa device into your own personal PokéDex',
    image: 'https://favna.xyz/assets/icons/dexa.png',
    imageAlt: 'Dexa Preview Image',
    url: '/dexa',
    summary: oneLine`A skill for Alexa enabled devices that allows you to look up virtually any data from the Pokémon Pokédex.
      Ask Dexa questions such as "Ask dexa pokemon data on Dragonite" to get a lot of information about the best dragon in the Pokémon franchise!`,
    keywords: ['alexa', 'skill', 'pokemon', 'pokedex', 'info', 'search', 'voice', 'invocation'],
  };

  constructor (private seo: SeoService) {
  }

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
