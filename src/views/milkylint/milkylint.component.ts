import { Component } from '@angular/core';
import { ICodeTile, IPrimaryTile, MILKY_TSLINT_GITHUB, MILKY_TSLINT_YARN } from 'src/util';

@Component({
  selector: 'favware-milkylint',
  templateUrl: './milkylint.component.html',
  styleUrls: ['./milkylint.component.scss'],
})
export class MilkylintComponent {
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
}
