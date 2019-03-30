import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { COMMON_META_TAGS, ICodeTile, IPrimaryTile, MILKY_TSLINT_GITHUB, MILKY_TSLINT_YARN } from '../../util';


@Component({
  selector: 'favware-milkylint',
  templateUrl: './milkylint.component.html',
  styleUrls: ['./milkylint.component.scss'],
})
export class MilkylintComponent implements OnInit {

  constructor (private title: Title, private meta: Meta) {}

  private readonly metadata = {
    name: 'Milky TSLint',
    description: 'TypeScript linter plugin for Gulp',
    image: 'https://favna.xyz/assets/icons/milkylint.webp',
    imageAlt: 'Milky TSLint Icon',
  };

  public readonly headerTile: IPrimaryTile = {
    header: 'Milky TSLint',
    subheader: 'TypeScript linter plugin for Gulp',
    buttons: [
      {
        text: 'yarn add -D milky-tslint ',
        color: 'primary',
        disabled: true,
      },
      {
        text: 'View on Yarn',
        url: MILKY_TSLINT_YARN,
        color: 'yarn',
        outer: true,
      },
      {
        text: 'View on GitHub',
        url: MILKY_TSLINT_GITHUB,
        color: 'github',
        outer: true,
      }
    ],
  };

  public readonly usageTile: ICodeTile = {
    header: 'Usage',
    codeFile: '/assets/code/milkylint.js',
  };

  ngOnInit (): void {
    this.title.setTitle(this.metadata.name);
    this.meta.addTags([
      { name: 'og:url', content: '/milkylint' },
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
