import { Component } from '@angular/core';
import { AWESOME_ZALGO_GITHUB, AWESOME_ZALGO_YARN, ICodeTile, IPrimaryTile } from 'src/util';

@Component({
  selector: 'favware-zalgo',
  templateUrl: './zalgo.component.html',
  styleUrls: ['./zalgo.component.scss'],
})
export class ZalgoComponent {
  public readonly headerTile: IPrimaryTile = {
    header: 'Awesome YAML Reader',
    subheader: 'Awesome minimal wrapper around js-yaml for directly reading in YAML files',
    buttons: [
      {
        text: 'yarn add awesome-yaml-reader',
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
