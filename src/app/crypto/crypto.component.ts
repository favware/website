import { Component, OnInit } from '@angular/core';
import { SeoService } from '@services/seo.service';
import { AWESOME_CRYPTO_GITHUB, AWESOME_CRYPTO_YARN } from '@util/constants';
import { ICodeTile, IPrimaryTile } from '@util/interfaces';
import { oneLine } from 'common-tags';

@Component({
  selector: 'favware-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.scss'],
})
export class CryptoComponent implements OnInit {

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
  private readonly metadata = {
    title: 'Awesome Crypto',
    description: 'Easily generate a random cryptographic in NodeJS!',
    image: 'https://favna.xyz/assets/icons/crypto.png',
    imageAlt: 'Awesome Crypto Icon',
    url: '/crypto',
    summary: oneLine`A NodeJS library that can generate secure random cryptographic strings using NodeJS's own "Crypto.RandomBytes()" function.
    Written in TypeScript so it is entirely typesafe!
    Install it today with "yarn add awesome-crypto"`,
    keywords: ['nodejs', 'javascript', 'typescript', 'library', 'package', 'npm', 'yarn', 'crypto', 'awesome-crypto', 'cryptography'],
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
