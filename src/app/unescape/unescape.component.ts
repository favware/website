import { Component } from '@angular/core';
import { IPrimaryTile, ICodeTile } from 'src/util/interfaces';
import { UNESCAPE_YARN, UNESCAPE_GITHUB } from 'src/util/constants';


@Component({
  selector: 'favware-unescape',
  templateUrl: './unescape.component.html',
  styleUrls: ['./unescape.component.scss'],
})
export class UnescapeComponent {
  public readonly headerTile: IPrimaryTile = {
    header: 'Unescape-ES6',
    subheader: 'Convert HTML entities to HTML characters',
    buttons: [
      {
        text: 'yarn add unescape-es6',
        color: 'primary',
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

  public readonly usageTile: ICodeTile = {
    header: 'Usage',
    codeFile: '/assets/code/unescape.js',
  };

  public readonly characterTile: IPrimaryTile = {
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
}

export default UnescapeComponent;