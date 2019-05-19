import { Component, OnInit } from '@angular/core';
import { SeoService } from '@services/seo.service';
import { MILKY_TSLINT_GITHUB, MILKY_TSLINT_YARN } from '@util/constants';
import { ICodeTile, IPrimaryTile } from '@util/interfaces';
import { oneLine } from 'common-tags';

@Component({
  selector: 'favware-milkylint',
  templateUrl: './milkylint.component.html',
  styleUrls: ['./milkylint.component.scss'],
})
export class MilkylintComponent implements OnInit {

  public headerTile: IPrimaryTile = {
    header: '@Favware/Milky-TSLint',
    subheader: 'TypeScript linter plugin for Gulp',
    buttons: [
      {
        text: '@favware/milky-tslint ',
        color: 'accent',
        disabled: true,
      },
      {
        text: 'View on Yarn',
        url: MILKY_TSLINT_YARN,
        color: 'yarn',
        outer: true,
      },
      {
        text: 'View on GitHub',
        url: MILKY_TSLINT_GITHUB,
        color: 'github',
        outer: true,
      }
    ],
  };
  public usageTile: ICodeTile = {
    header: 'Usage',
    codeFile: '/assets/code/milkylint.js',
  };
  public metadata = {
    title: '@Favware/Milky-TSLint',
    description: 'TypeScript linter plugin for Gulp',
    image: 'https://favware.tech/assets/icons/milkylint.png',
    imageAlt: '@Favware/Milky-TSLint Icon',
    url: '/milkylint',
    summary: oneLine`A NodeJS library meant for Gulp that can lint your TypeScript code.
    Install it today with "yarn add @favware/milky-tslint"`,
    keywords: ['nodejs', 'javascript', 'typescript', 'library', 'package', 'npm', 'yarn', 'gulp', 'typescript', 'tslint', 'milk'],
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
