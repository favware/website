import { Component } from '@angular/core';
import { oneLine } from 'common-tags';
import { ASSET_BASE_PATH, CATCHCALC_GITHUB_URL } from 'src/util/constants';
import { IMatCarouselOptions, IPrimaryTile } from 'src/util/interfaces';

@Component({
  selector: 'favware-catchcalc',
  templateUrl: './catchcalc.component.html',
  styleUrls: ['./catchcalc.component.scss'],
})
export class CatchcalcComponent {
  public readonly headerTile: IPrimaryTile = {
    header: 'CatchCalc',
    subheader: 'Calculate Pokémon Generation 6 (XYORAS) catch rates',
    buttons: [
      {
        text: 'Download CatchCalc',
        url: `${ASSET_BASE_PATH}/website-dist/catchcalc.java`,
        color: 'primary',
        outer: true,
      },
      {
        text: 'Download Java Corretto',
        url: 'https://aws.amazon.com/corretto/',
        color: 'warn',
        outer: true,
      },
      {
        text: 'View on GitHub',
        url: CATCHCALC_GITHUB_URL,
        color: 'github',
        outer: true,
      }
    ],
  };

  public readonly aboutTile: IPrimaryTile = {
    header: 'About',
    subheader: '',
    text: [oneLine`SEEDChecker is a Java application that can periodically check
            if the decryption seed for a given title is available.
            If a SEED is available it is automatically downloaded to your default "Downloads" folder`],
  };

  public readonly instructionsTile: IPrimaryTile = {
    header: 'Instructions',
    subheader: '',
    text: [
      '_Step 1_',
      'Open up a battle simulator ([Pokémon Showdown](https://play.pokemonshowdown.com/teambuilder)) or a Pokemon editor ([PKHeX](https://projectpokemon.org/home/files/file/1-pkhex/))',
      '_Step 2_',
      'Pick your Pokémon and set the correct level, then make sure the HP IV is set to 31',
      '_Step 3_',
      'Now that you know the maximum possible HP value for the opposing Pokemon you can switch to CatchCalc',
      '_Step 4_',
      'Enter the maximum possible HP for Maximum HP',
      '_Step 5_',
      'Ideally the **Current HP** will be 1, that is if you used False Swipe or Hold Back. If not then you are going have to make a guess and I cannot help here',
      '_Step 6_',
      'Set all your other variables if applicable then press the **Calculate chance to catch** button to have the program do its magic!'
    ],
  };

  public readonly faqTile: IPrimaryTile = {
    header: 'FAQ',
    subheader: '',
    text: [
      '_**Q:** It doesn\'t start!_',
      '**A:** Make sure you have associated the .jar extension with Java. To do so right click the program then **open with** and then select the **Java platform.**',
      '_**Q:** I can\'t find the Java platform in the list!_',
      '**A:** Make sure you install Java using the button above. Amazon Corretto version of Java is guaranteed to work!'
    ],
  };

  public readonly slides: Array<{ url: string }> = [
    { url: '/assets/screenshots/catchcalc/base.png' },
    { url: '/assets/screenshots/catchcalc/easymon.png' },
    { url: '/assets/screenshots/catchcalc/hardmon.png' }
  ];

  public readonly carousel: IMatCarouselOptions = {
    timings: '250ms ease-in',
    autoplay: true,
    interval: 5000,
    loop: true,
    hideArrows: false,
    hideIndicators: false,
    color: 'warn',
    maxWidth: 'auto',
    proportion: 35,
    slides: this.slides.length,
    overlayColor: '#00000040',
    hideOverlay: true,
    useKeyboard: true,
    useMouseWheel: true,
    orientation: 'ltr',
  };
}