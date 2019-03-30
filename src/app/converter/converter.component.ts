import { Component } from '@angular/core';
import { AWESOME_CONVERTER_GITHUB, AWESOME_CONVERTER_YARN } from 'src/util/constants';
import { ICodeTile, IPrimaryTile } from 'src/util/interfaces';


@Component({
  selector: 'favware-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss'],
})
export class ConverterComponent {
  public readonly headerTile: IPrimaryTile = {
    header: 'Awesome Converter',
    subheader: 'An awesome and typesafe unit converter for NodeJS',
    buttons: [
      {
        text: 'yarn add awesome-converter',
        color: 'primary',
        disabled: true,
      },
      {
        text: 'View on Yarn',
        url: AWESOME_CONVERTER_YARN,
        color: 'yarn',
        outer: true,
      },
      {
        text: 'View on GitHub',
        url: AWESOME_CONVERTER_GITHUB,
        color: 'github',
        outer: true,
      }
    ],
  };

  public readonly usageTile: ICodeTile = {
    header: 'Usage',
    codeFile: '/assets/code/converter.js',
  };
}


export default ConverterComponent;
