import { Component, OnInit } from '@angular/core';

import { AWESOME_CRYPTO_GITHUB, AWESOME_CRYPTO_YARN, ICodeTile, IPrimaryTile, SeoService } from '../../util';


@Component({
  selector: 'favware-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.scss'],
})
export class CryptoComponent implements OnInit {

  constructor (private seo: SeoService) {}

  private readonly metadata = {
    title: 'Awesome Crypto',
    description: 'Easily generate a random cryptographic in NodeJS!',
    image: 'https://favna.xyz/assets/icons/crypto.png',
    imageAlt: 'Awesome Crypto Icon',
    url: '/crypto',
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
    this.seo.generateTags({
      title: this.metadata.title,
      description: this.metadata.description,
      image: this.metadata.image,
      imageAlt: this.metadata.imageAlt,
      url: this.metadata.url,
    });
  }
}
