import { Component, OnInit } from '@angular/core';
import { SeoService } from '@services/seo.service';
import { ZALGO_GITHUB, ZALGO_YARN } from '@util/constants';
import { ICodeTile, IPrimaryTile } from '@util/interfaces';
import ngForTrackBy from '@util/ngForTrackBy';
import { oneLine } from 'common-tags';

@Component({
  selector: 'favware-zalgo',
  templateUrl: './zalgo.component.html',
  styleUrls: ['./zalgo.component.scss'],
})
export class ZalgoComponent implements OnInit {
  public ngForTrackBy = ngForTrackBy;
  public headerTile: IPrimaryTile = {
    header: '@Favware/Zalgo',
    subheader: 'Unleash and banish the Zalgo Monster!',
    buttons: [
      {
        text: '@favware/zalgo',
        color: 'accent',
        disabled: true,
      },
      {
        text: 'View on Yarn',
        url: ZALGO_YARN,
        color: 'yarn',
        outer: true,
      },
      {
        text: 'View on GitHub',
        url: ZALGO_GITHUB,
        color: 'github',
        outer: true,
      }
    ],
  };
  public usageTile: ICodeTile = {
    header: 'Usage',
    codeFile: '/assets/code/zalgo.js',
  };
  public metadata = {
    title: '@Favware/zalgo',
    description: 'Unleash and banish the Zalgo Monster!',
    image: 'https://favware.tech/assets/icons/zalgo.png',
    imageAlt: 'Awezome Zalgo Icon Image',
    url: '/zalgo',
    summary: oneLine`A NodeJS library that can transform any text into standard "zalgo" formatted text,
      as well as banish most common Zalgo. Install it today with "@favware/zalgo"`,
    keywords: ['nodejs', 'javascript', 'typescript', 'library', 'package', 'npm', 'yarn', 'zalgo', 'banish', 'awesome-zalog'],
  };

  constructor (private seo: SeoService) {
  }

  public ngOnInit (): void {
    this.seo.generateTags({
      title: this.metadata.title,
      description: this.metadata.description,
      image: this.metadata.image,
      imageAlt: this.metadata.imageAlt,
      url: this.metadata.url,
      summary: this.metadata.summary,
      keywords: this.metadata.keywords,
    });
  }
}
