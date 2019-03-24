import { Component } from '@angular/core';
import { oneLine } from 'common-tags';
import { ASSET_BASE_PATH, IMatCarouselOptions, IPrimaryTile, SEEDCHECKER_GITHUB_URL } from 'src/util';

@Component({
  selector: 'favware-seedcheck',
  templateUrl: './seedcheck.component.html',
  styleUrls: ['./seedcheck.component.scss'],
})
export class SeedcheckComponent {
  public readonly headerTile: IPrimaryTile = {
    header: 'SEEDChecker',
    subheader: 'Periodically check if the SEED for a Nintendo 3DS title is available',
    buttons: [
      {
        text: 'Download SEEDChecker',
        url: `${ASSET_BASE_PATH}/website-dist/SEEDChecker.java`,
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
        url: SEEDCHECKER_GITHUB_URL,
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
      'Get the TitleID for your title. Recommended sites are [3dsdb](http://www.3dsdb.com) or [3ds titlekeys](http://3ds.titlekeys.gq/)',
      '_Step 2_',
      'Get the ISO Alpha 2 Country Code for your country of choice, you can find the list at [nations online](http://www.nationsonline.org/oneworld/country_code_list.htm)',
      '_Step 3_',
      'Choose your repeat interval',
      '_Step 4_',
      'Press **Start SEED Checking** to start the process',
      '_Quitting_',
      'If you want to quit checking either close the program or click the **Cancel SEED Checking** button'
    ],
  };

  public readonly faqTile: IPrimaryTile = {
    header: 'FAQ',
    subheader: '',
    text: [
      '_**Q:** It doesn\'t start!_',
      '**A:** Make sure you have associated the .jar extension with Java. To do so right click the program then `open with and then select the Java platform.`',
      '_**Q:** I can\'t find the Java platform in the list!_',
      '**A:** Make sure you install Java using the button above. Amazon Corretto version of Java is guaranteed to work!'
    ],
  };

  public slides: Array<{ url: string }> = [
    { url: '/assets/screenshots/seedcheck/base.png' },
    { url: '/assets/screenshots/seedcheck/noseed.png' },
    { url: '/assets/screenshots/seedcheck/seed.png' }
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
    proportion: 45,
    slides: this.slides.length,
    overlayColor: '#00000040',
    hideOverlay: false,
    useKeyboard: true,
    useMouseWheel: true,
    orientation: 'ltr',
  };
}
