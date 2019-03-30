import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { AWESOME_CONVERTER_GITHUB, AWESOME_CONVERTER_YARN, COMMON_META_TAGS, ICodeTile, IPrimaryTile } from '../../util';


@Component({
  selector: 'favware-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss'],
})
export class ConverterComponent implements OnInit {

  constructor (private title: Title, private meta: Meta) {}

  private readonly metadata = {
    name: 'Awesome Converter',
    description: 'Awesome and typesafe unit converter, supports many different systems of units',
    image: 'https://favna.xyz/assets/icons/converter.webp',
    imageAlt: 'Awesome Converter Icon',
  };

  public readonly headerTile: IPrimaryTile = {
    header: 'Awesome Converter',
    subheader: 'An awesome and typesafe unit converter for NodeJS',
    buttons: [
      {
        text: 'yarn add awesome-converter',
        color: 'primary',
        disabled: true,
      },
      {
        text: 'View on Yarn',
        url: AWESOME_CONVERTER_YARN,
        color: 'yarn',
        outer: true,
      },
      {
        text: 'View on GitHub',
        url: AWESOME_CONVERTER_GITHUB,
        color: 'github',
        outer: true,
      }
    ],
  };

  public readonly usageTile: ICodeTile = {
    header: 'Usage',
    codeFile: '/assets/code/converter.js',
  };

  ngOnInit (): void {
    this.title.setTitle(this.metadata.name);
    this.meta.addTags([
      { name: 'og:url', content: '/converter' },
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
