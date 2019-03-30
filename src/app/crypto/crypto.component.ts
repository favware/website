import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { AWESOME_CRYPTO_GITHUB, AWESOME_CRYPTO_YARN, COMMON_META_TAGS, ICodeTile, IPrimaryTile } from '../../util';


@Component({
  selector: 'favware-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.scss'],
})
export class CryptoComponent implements OnInit {

  constructor (private title: Title, private meta: Meta) {}

  private readonly metadata = {
    name: 'Awesome Crypto',
    description: 'Easily generate a random cryptographic in NodeJS!',
    image: 'https://favna.xyz/assets/icons/crypto.webp',
    imageAlt: 'Awesome Crypto Icon',
  };

  public readonly headerTile: IPrimaryTile = {
    header: 'Awesome Crypto',
    subheader: 'Generates secure random numbers using `crypto.randomBytes()`',
    buttons: [
      {
        text: 'yarn add awesome-crypto',
        color: 'primary',
        disabled: true,
      },
      {
        text: 'View on Yarn',
        url: AWESOME_CRYPTO_YARN,
        color: 'yarn',
        outer: true,
      },
      {
        text: 'View on GitHub',
        url: AWESOME_CRYPTO_GITHUB,
        color: 'github',
        outer: true,
      }
    ],
  };

  public readonly usageTile: ICodeTile = {
    header: 'Usage',
    codeFile: '/assets/code/crypto.js',
  };

  ngOnInit (): void {
    this.title.setTitle(this.metadata.name);
    this.meta.addTags([
      { name: 'og:url', content: '/crypto' },
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
