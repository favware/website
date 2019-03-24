import { Component } from '@angular/core';
import { AWESOME_QUERYSTRING_GITHUB, AWESOME_QUERYSTRING_YARN, ICodeTile, IPrimaryTile } from 'src/util';

@Component({
  selector: 'favware-querystring',
  templateUrl: './querystring.component.html',
  styleUrls: ['./querystring.component.scss'],
})
export class QuerystringComponent {
  public readonly headerTile: IPrimaryTile = {
    header: 'Awesome Querystring',
    subheader: 'Querystring that is robust in its working yet remains awesome to TypeScript users',
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
}
