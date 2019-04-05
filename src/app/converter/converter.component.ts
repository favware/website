import { Component, OnInit } from '@angular/core';
import { SeoService } from '@services/seo.service';
import { AWESOME_CONVERTER_GITHUB, AWESOME_CONVERTER_YARN } from '@util/constants';
import { ICodeTile, IPrimaryTile } from '@util/interfaces';
import { oneLine } from 'common-tags';

@Component({
  selector: 'favware-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss'],
})
export class ConverterComponent implements OnInit {

  headerTile: IPrimaryTile = {
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
  usageTile: ICodeTile = {
    header: 'Usage',
    codeFile: '/assets/code/converter.js',
  };
  metadata = {
    title: 'Awesome Converter',
    description: 'Awesome and typesafe unit converter, supports many different systems of units',
    image: 'https://favna.xyz/assets/icons/converter.png',
    imageAlt: 'Awesome Converter Icon',
    url: 'converter',
    summary: oneLine`A NodeJS library that can convert many units to many other units.
    From mass, length and volume to temperature and more!
    Install it today with "yarn add awesome-converter"`,
    keywords: ['nodejs', 'javascript', 'typescript', 'library', 'package', 'npm', 'yarn', 'converter', 'awesome-converter'],
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
