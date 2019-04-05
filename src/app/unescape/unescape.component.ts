import { Component, OnInit } from '@angular/core';
import { SeoService } from '@services/seo.service';
import { UNESCAPE_GITHUB, UNESCAPE_YARN } from '@util/constants';
import { ICodeTile, IPrimaryTile } from '@util/interfaces';
import { oneLine } from 'common-tags';

@Component({
  selector: 'favware-unescape',
  templateUrl: './unescape.component.html',
  styleUrls: ['./unescape.component.scss'],
})
export class UnescapeComponent implements OnInit {

  headerTile: IPrimaryTile = {
    header: 'Unescape-ES6',
    subheader: 'Convert HTML entities to HTML characters',
    buttons: [
      {
        text: 'yarn add unescape-es6',
        color: 'accent',
        disabled: true,
      },
      {
        text: 'View on Yarn',
        url: UNESCAPE_YARN,
        color: 'yarn',
        outer: true,
      },
      {
        text: 'View on GitHub',
        url: UNESCAPE_GITHUB,
        color: 'github',
        outer: true,
      }
    ],
  };
  usageTile: ICodeTile = {
    header: 'Usage',
    codeFile: '/assets/code/unescape.js',
  };
  characterTile: IPrimaryTile = {
    header: 'Characters',
    subheader: 'For performance, this library only handles the following common entities',
    text: [
      `
      | **Character** |          **Description**           | **Entity Name** | **Entity Decimal** |    **Entity Hex**   |
      | :-----------: | ---------------------------------- | :--------------: | :----------------: | :-----------------: |
      |   "           | double quotation mark              | \`&quot;\`       | \`&#34;\`          |        \`&#x22;\`   |
      |   '           | single quotation mark (apostrophe) | \`&apos;\`       | \`&#39;\`          |        \`&#x27;\`   |
      |   &           | ampersand                          | \`&amp;\`        | \`&#38;\`          |        \`&#x26;\`   |
      |   >           | greater than                       | \`&gt;\`         | \`&#62;\`          |        \`&#x3e;\`   |
      |   <           | less than                          | \`&lt;\`         | \`&#60;\`          |        \`&#x3c;\`   |
      |               | Single regular space               | \`&nbsp;\`       |  \`&#160\`         |        \`&#xa0;\`   |
      |   ©           | copyright                          | \`&copy;\`       | \`&#169;\`         |        \`&#xa9;\`   |
      |   ¢           | cent                               | \`&cent;\`       | \`&#162;\`         |        \`&#xa2;\`   |
      |   ®           | registered trademark               | \`&reg;\`        | \`&#174;\`         |        \`&#xae;\`   |
      |   €           | euro                               | \`&euro;\`       | \`&#8364;\`        |       \` N.A.\`     |
      |   £           | pound                              | \`&pound;\`      | \`&#163;\`         |        \`&#xa3;\`   |
      |   ¥           | yen                                | \`&yen;\`        | \`&#165;\`         |        \`&#xa5;\`   |
  `
    ],
  };
  metadata = {
    title: 'Unescape ES6',
    description: 'Convert HTML entities to HTML characters. For example "&amp;" converts to &',
    image: 'https://favna.xyz/assets/icons/unescape.png',
    imageAlt: 'Unescape Icon Image',
    url: '/unescape',
    summary: oneLine`A NodeJS library that can transform HTML tags to their unescaped variants.
    Install it today with "yarn add unescape-es6"`,
    keywords: ['nodejs', 'javascript', 'typescript', 'library', 'package', 'npm', 'yarn', 'unescape', 'unescape-es6', 'escape', 'html', 'entities'],
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
