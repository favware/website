import { Component, OnInit } from '@angular/core';

import { AWESOME_QUERYSTRING_GITHUB, AWESOME_QUERYSTRING_YARN, ICodeTile, IPrimaryTile, SeoService } from '../../util';


@Component({
  selector: 'favware-querystring',
  templateUrl: './querystring.component.html',
  styleUrls: ['./querystring.component.scss'],
})
export class QuerystringComponent implements OnInit {

  constructor (private seo: SeoService) {}

  private readonly metadata = {
    title: 'Awesome Querystring',
    description: 'Querystring that is robust in its working yet remains awesome to TypeScript users',
    image: 'https://favna.xyz/assets/icons/querystring.png',
    imageAlt: 'Awesome Querystring Icon',
    url: '/querystring',
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
    this.seo.generateTags({
      title: this.metadata.title,
      description: this.metadata.description,
      image: this.metadata.image,
      imageAlt: this.metadata.imageAlt,
      url: this.metadata.url,
    });
  }
}
