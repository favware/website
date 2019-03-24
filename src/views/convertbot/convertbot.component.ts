import { Component } from '@angular/core';
import { oneLine } from 'common-tags';
import { ASSET_BASE_PATH, CONVERTBOT_GITHUB_URL, IMatCarouselOptions, IPrimaryTile } from 'src/util';

@Component({
  selector: 'favware-convertbot',
  templateUrl: './convertbot.component.html',
  styleUrls: ['./convertbot.component.scss'],
})
export class ConvertbotComponent {
  public readonly headerTile: IPrimaryTile = {
    header: 'ConvertBot',
    subheader: 'A C++ based unit conversion utility',
    buttons: [
      {
        text: 'Download ConvertBot',
        url: `${ASSET_BASE_PATH}/website-dist/ConvertBot.exe`,
        color: 'primary',
        outer: true,
      },
      {
        text: 'View on GitHub',
        url: CONVERTBOT_GITHUB_URL,
        color: 'github',
        outer: true,
      }
    ],
  };

  public readonly aboutTile: IPrimaryTile = {
    header: 'About',
    subheader: '',
    text: [oneLine`ConvertBot is a very basic conversion tool I wrote as my final assignment at High School.
    The task was to create something in a programming language that we had not yet covered so I chose C++.
    Together with my best friend at school we went on a search for something we could make for a very long time
    until we got the idea of unit conversion since it really all comes down to mathematical formulae and we both excelled in maths.
    A few months later we finished our tool, dubbed it ConvertBot and passed our course with flying colours.
    I have always held onto the source code for ConvertBot and find it only appropriate to show it off here.`],
  };

  public readonly notesTile: IPrimaryTile = {
    header: 'Notes',
    subheader: 'There are some things to note when using ConvertBot',
    text: [
      '_Numeric Checksums_',
      'Due to a checksum on numeric values it is not possible to give decimal numbers as input value. The separating dots/comma\'s as seen as non-numeric values.',
      '_Input / Output Type Verification_',
      'If you select an input unit from type A and output unit from type B you will be warned that this is not possible. Maybe in the far future we can convert celsius to metres.',
      '_Unit Reference - Tons_',
      'Tons are coded as Metric Tons',
      '_Unit Reference - Miles_',
      'Miles are coded as standard miles',
      '_Unit Reference - Gallons_',
      'Gallons are coded as US Liquid Gallons',
      '_Unit References - Acres_',
      'Acres as coded as regular Acres'
    ],
  };

  public readonly slides: Array<{ url: string }> = [
    { url: '/assets/screenshots/convertbot/base.png' },
    { url: '/assets/screenshots/convertbot/degrees.png' },
    { url: '/assets/screenshots/convertbot/length.png' }
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
    proportion: 40,
    slides: this.slides.length,
    overlayColor: '#00000040',
    hideOverlay: true,
    useKeyboard: true,
    useMouseWheel: true,
    orientation: 'ltr',
  };
}
