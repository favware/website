import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { AWESOME_QUERYSTRING_GITHUB, AWESOME_QUERYSTRING_YARN, COMMON_META_TAGS, ICodeTile, IPrimaryTile } from '../../util';


@Component({
  selector: 'favware-querystring',
  templateUrl: './querystring.component.html',
  styleUrls: ['./querystring.component.scss'],
})
export class QuerystringComponent implements OnInit {

  constructor (private title: Title, private meta: Meta) {}

  private readonly metadata = {
    name: 'Awesome Querystring',
    description: 'Querystring that is robust in its working yet remains awesome to TypeScript users',
    image: 'https://favna.xyz/assets/icons/querystring.webp',
    imageAlt: 'Awesome Querystring Icon',
  };

  public readonly headerTile: IPrimaryTile = {
    header: 'Awesome Querystring',
    subheader: 'Robust and awesome querystring',
    buttons: [
      {
        text: 'yarn add awesome-querystring',
        color: 'primary',
        disabled: true,
      },
      {
        text: 'View on Yarn',
        url: AWESOME_QUERYSTRING_YARN,
        color: 'yarn',
        outer: true,
      },
      {
        text: 'View on GitHub',
        url: AWESOME_QUERYSTRING_GITHUB,
        color: 'github',
        outer: true,
      }
    ],
  };

  public readonly stringifyUsageTile: ICodeTile = {
    header: 'Usage - Stringify',
    codeFile: '/assets/code/querystring.stringify.js',
  };

  public readonly parseUsageTile: ICodeTile = {
    header: 'Usage - Parse',
    codeFile: '/assets/code/querystring.parse.js',
  };

  ngOnInit (): void {
    this.title.setTitle(this.metadata.name);
    this.meta.addTags([
      { name: 'og:url', content: '/querystring' },
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
