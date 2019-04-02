import { Component, OnInit } from '@angular/core';

import { ICodeTile, IPrimaryTile, MILKY_TSLINT_GITHUB, MILKY_TSLINT_YARN, SeoService } from '../../util';


@Component({
  selector: 'favware-milkylint',
  templateUrl: './milkylint.component.html',
  styleUrls: ['./milkylint.component.scss'],
})
export class MilkylintComponent implements OnInit {

  constructor (private seo: SeoService) {}

  private readonly metadata = {
    title: 'Milky TSLint',
    description: 'TypeScript linter plugin for Gulp',
    image: 'https://favna.xyz/assets/icons/milkylint.png',
    imageAlt: 'Milky TSLint Icon',
    url: '/milkylint',
  };

  public readonly headerTile: IPrimaryTile = {
    header: 'Milky TSLint',
    subheader: 'TypeScript linter plugin for Gulp',
    buttons: [
      {
        text: 'yarn add -D milky-tslint ',
        color: 'primary',
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

  public readonly usageTile: ICodeTile = {
    header: 'Usage',
    codeFile: '/assets/code/milkylint.js',
  };

  ngOnInit (): void {
    this.seo.generateTags({
      title: this.metadata.title,
      description: this.metadata.description,
      image: this.metadata.image,
      imageAlt: this.metadata.imageAlt,
      url: this.metadata.url,
    });
  }
}
