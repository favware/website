import { Component, OnInit } from '@angular/core';
import { SeoService } from '@services/seo.service';
import { AWESOME_QUERYSTRING_GITHUB, AWESOME_QUERYSTRING_YARN } from '@util/constants';
import { ICodeTile, IPrimaryTile } from '@util/interfaces';
import { oneLine } from 'common-tags';

@Component({
  selector: 'favware-querystring',
  templateUrl: './querystring.component.html',
  styleUrls: ['./querystring.component.scss'],
})
export class QuerystringComponent implements OnInit {

  headerTile: IPrimaryTile = {
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
  stringifyUsageTile: ICodeTile = {
    header: 'Usage - Stringify',
    codeFile: '/assets/code/querystring.stringify.js',
  };
  parseUsageTile: ICodeTile = {
    header: 'Usage - Parse',
    codeFile: '/assets/code/querystring.parse.js',
  };
  metadata = {
    title: 'Awesome Querystring',
    description: 'Querystring that is robust in its working yet remains awesome to TypeScript users',
    image: 'https://favna.xyz/assets/icons/querystring.png',
    imageAlt: 'Awesome Querystring Icon',
    url: '/querystring',
    summary: oneLine`A NodeJS library that can stringify and parse any querystring.
    It is in a sense similar to many other querystringifiers, with the exception of being written
    in TypeScript thus offering great support to TypeScript users.
    Install it today with "yarn add awesome-querystring"`,
    keywords: ['nodejs', 'javascript', 'typescript', 'library', 'package', 'npm', 'yarn', 'querystring', 'awesome-querystring', 'stringify', 'parse', 'safe'],
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
