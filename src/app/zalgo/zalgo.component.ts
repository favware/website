import { Component } from '@angular/core';
import { IPrimaryTile, ICodeTile } from 'src/util/interfaces';
import { AWESOME_ZALGO_YARN, AWESOME_ZALGO_GITHUB } from 'src/util/constants';


@Component({
  selector: 'favware-zalgo',
  templateUrl: './zalgo.component.html',
  styleUrls: ['./zalgo.component.scss'],
})
export class ZalgoComponent {
  public readonly headerTile: IPrimaryTile = {
    header: 'Awesome Zalgo',
    subheader: 'Unleash and banish the Zalgo Monster!',
    buttons: [
      {
        text: 'yarn add awesome-zalgo',
        color: 'primary',
        disabled: true,
      },
      {
        text: 'View on Yarn',
        url: AWESOME_ZALGO_YARN,
        color: 'yarn',
        outer: true,
      },
      {
        text: 'View on GitHub',
        url: AWESOME_ZALGO_GITHUB,
        color: 'github',
        outer: true,
      }
    ],
  };

  public readonly usageTile: ICodeTile = {
    header: 'Usage',
    codeFile: '/assets/code/zalgo.ts',
  };
}

export default ZalgoComponent;