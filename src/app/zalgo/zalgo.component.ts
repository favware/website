import { Component, OnInit } from '@angular/core';
import { SeoService } from '@services/seo.service';
import { AWESOME_ZALGO_GITHUB, AWESOME_ZALGO_YARN } from '@util/constants';
import { ICodeTile, IPrimaryTile } from '@util/interfaces';
import { oneLine } from 'common-tags';

@Component({
  selector: 'favware-zalgo',
  templateUrl: './zalgo.component.html',
  styleUrls: ['./zalgo.component.scss'],
})
export class ZalgoComponent implements OnInit {

  headerTile: IPrimaryTile = {
    header: 'Awesome Zalgo',
    subheader: 'Unleash and banish the Zalgo Monster!',
    buttons: [
      {
        text: 'yarn add awesome-zalgo',
        color: 'accent',
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
  usageTile: ICodeTile = {
    header: 'Usage',
    codeFile: '/assets/code/zalgo.js',
  };
  metadata = {
    title: 'Awesome Zalgo',
    description: 'Unleash and banish the Zalgo Monster!',
    image: 'https://favna.xyz/assets/icons/zalgo.png',
    imageAlt: 'Awezome Zalgo Icon Image',
    url: '/zalgo',
    summary: oneLine`A NodeJS library that can transform any text into standard "zalgo" formatted text,
      as well as banish most common Zalgo. Install it today with "yarn add awesome-zalgo"`,
    keywords: ['nodejs', 'javascript', 'typescript', 'library', 'package', 'npm', 'yarn', 'zalgo', 'banish', 'awesome-zalog'],
  };

  constructor (private seo: SeoService) {
  }

  ngOnInit (): void {
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
