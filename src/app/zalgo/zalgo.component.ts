import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { AWESOME_ZALGO_GITHUB, AWESOME_ZALGO_YARN, COMMON_META_TAGS, ICodeTile, IPrimaryTile } from '../../util';


@Component({
  selector: 'favware-zalgo',
  templateUrl: './zalgo.component.html',
  styleUrls: ['./zalgo.component.scss'],
})
export class ZalgoComponent implements OnInit {

  constructor (private title: Title, private meta: Meta) {}

  private readonly metadata = {
    name: 'Awesome Zalgo',
    description: 'Unleash and banish the Zalgo Monster!',
    image: 'https://favna.xyz/assets/icons/zalgo.webp',
    imageAlt: 'Awezome Zalgo Icon Image',
  };

  public readonly headerTile: IPrimaryTile = {
    header: 'Awesome Zalgo',
    subheader: 'Unleash and banish the Zalgo Monster!',
    buttons: [
      {
        text: 'yarn add awesome-zalgo',
        color: 'primary',
        disabled: true,
      },
      {
        text: 'View on Yarn',
        url: AWESOME_ZALGO_YARN,
        color: 'yarn',
        outer: true,
      },
      {
        text: 'View on GitHub',
        url: AWESOME_ZALGO_GITHUB,
        color: 'github',
        outer: true,
      }
    ],
  };

  public readonly usageTile: ICodeTile = {
    header: 'Usage',
    codeFile: '/assets/code/zalgo.js',
  };

  ngOnInit (): void {
    this.title.setTitle(this.metadata.name);
    this.meta.addTags([
      { name: 'og:url', content: '/zalgo' },
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
