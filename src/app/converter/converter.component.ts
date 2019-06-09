import { Component, OnInit } from '@angular/core';
import { SeoService, SeoTags } from '@services/seo.service';
import { CONVERTER_GITHUB, CONVERTER_YARN } from '@util/constants';
import { ICodeTile, IPrimaryTile } from '@util/interfaces';
import ngForTrackBy from '@util/ngForTrackBy';
import { oneLine } from 'common-tags';

@Component({
  selector: 'favware-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss'],
})
export class ConverterComponent implements OnInit {
  public ngForTrackBy = ngForTrackBy;
  public headerTile: IPrimaryTile = {
    header: '@Favware/Converter',
    subheader: 'An awesome and typesafe unit converter for NodeJS',
    buttons: [
      {
        text: 'yarn add @favware/converter',
        color: 'accent',
        disabled: true,
      },
      {
        text: 'View on Yarn',
        url: CONVERTER_YARN,
        color: 'yarn',
        outer: true,
      },
      {
        text: 'View on GitHub',
        url: CONVERTER_GITHUB,
        color: 'github',
        outer: true,
      }
    ],
  };
  public usageTile: ICodeTile = {
    header: 'Usage',
    codeFile: '/assets/code/converter.js',
  };
  public metadata: SeoTags = {
    title: '@Favware/Converter',
    description: 'Awesome and typesafe unit converter, supports many different systems of units',
    image: 'https://favware.tech/assets/icons/converter.png',
    imageAlt: '@Favware/Converter Icon',
    url: 'converter',
    summary: oneLine`A NodeJS library that can convert many units to many other units.
    From mass, length and volume to temperature and more!
    Install it today with "yarn add @favware/converter"`,
    keywords: ['nodejs', 'javascript', 'typescript', 'library', 'package', 'npm', 'yarn', 'converter', 'awesome-converter'],
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
