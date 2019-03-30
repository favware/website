import { Component } from '@angular/core';
import { IPrimaryTile, ICodeTile } from 'src/util/interfaces';
import { AWESOME_CRYPTO_YARN, AWESOME_CRYPTO_GITHUB } from 'src/util/constants';


@Component({
  selector: 'favware-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.scss'],
})
export class CryptoComponent {

  public readonly headerTile: IPrimaryTile = {
    header: 'Awesome Crypto',
    subheader: 'Generates secure random numbers using `crypto.randomBytes()`',
    buttons: [
      {
        text: 'yarn add awesome-crypto',
        color: 'primary',
        disabled: true,
      },
      {
        text: 'View on Yarn',
        url: AWESOME_CRYPTO_YARN,
        color: 'yarn',
        outer: true,
      },
      {
        text: 'View on GitHub',
        url: AWESOME_CRYPTO_GITHUB,
        color: 'github',
        outer: true,
      }
    ],
  };

  public readonly usageTile: ICodeTile = {
    header: 'Usage',
    codeFile: '/assets/code/crypto.js',
  };

}

export default CryptoComponent;