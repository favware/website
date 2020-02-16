import { Component, OnInit } from '@angular/core';
import { SeoService, SeoTags } from '@services/seo.service';
import { QUERYSTRING_GITHUB, QUERYSTRING_YARN } from '@util/constants';
import { CodeTile, PrimaryTile } from '@util/interfaces';
import ngForTrackBy from '@util/ngForTrackBy';
import { oneLine } from 'common-tags';

@Component({
  selector: 'favware-querystring',
  templateUrl: './querystring.component.html',
  styleUrls: ['./querystring.component.scss']
})
export class QuerystringComponent implements OnInit {
  public ngForTrackBy = ngForTrackBy;
  public headerTile: PrimaryTile = {
    header: '@favware/querystring',
    subheader: 'Robust and awesome querystring',
    buttons: [
      {
        text: 'yarn add @favware/querystring',
        color: 'accent',
        disabled: true
      },
      {
        text: 'View on Yarn',
        url: QUERYSTRING_YARN,
        color: 'yarn',
        outer: true
      },
      {
        text: 'View on GitHub',
        url: QUERYSTRING_GITHUB,
        color: 'github',
        outer: true
      }
    ]
  };
  public stringifyUsageTile: CodeTile = {
    header: 'Usage - Stringify',
    codeFile: '/assets/code/querystring.stringify.js'
  };
  public parseUsageTile: CodeTile = {
    header: 'Usage - Parse',
    codeFile: '/assets/code/querystring.parse.js'
  };
  public metadata: SeoTags = {
    title: '@favware/querystring',
    description: 'Querystring that is robust in its working yet remains awesome to TypeScript users',
    image: 'https://favware.tech/assets/icons/querystring.png',
    imageAlt: '@favware/querystring Icon',
    url: 'querystring',
    summary: oneLine`A NodeJS library that can stringify and parse any querystring.
    It is in a sense similar to many other querystringifiers, with the exception of being written
    in TypeScript thus offering great support to TypeScript users.
    Install it today with "yarn add @favware/querystring"`,
    keywords: ['nodejs', 'javascript', 'typescript', 'library', 'package', 'npm', 'yarn', 'querystring', 'awesome-querystring', 'stringify', 'parse', 'safe']
  };

  constructor(private seo: SeoService) {}

  public ngOnInit(): void {
    this.seo.generateTags({
      title: this.metadata.title,
      description: this.metadata.description,
      image: this.metadata.image,
      imageAlt: this.metadata.imageAlt,
      url: this.metadata.url,
      summary: this.metadata.summary,
      keywords: this.metadata.keywords
    });
  }
}
