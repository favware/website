import { Component, OnInit } from '@angular/core';
import { SeoService, SeoTags } from '@services/seo.service';
import { YAMLREADER_GITHUB, YAMLREADER_YARN } from '@util/constants';
import { ICodeTile, IPrimaryTile } from '@util/interfaces';
import ngForTrackBy from '@util/ngForTrackBy';
import { oneLine } from 'common-tags';

@Component({
  selector: 'favware-yamlreader',
  templateUrl: './yamlreader.component.html',
  styleUrls: ['./yamlreader.component.scss']
})
export class YamlreaderComponent implements OnInit {
  public ngForTrackBy = ngForTrackBy;
  public headerTile: IPrimaryTile = {
    header: '@Favware/yamlreader',
    subheader: 'Awesome minimal wrapper around js-yaml',
    buttons: [
      {
        text: '@favware/yamlreader',
        color: 'accent',
        disabled: true
      },
      {
        text: 'View on Yarn',
        url: YAMLREADER_YARN,
        color: 'yarn',
        outer: true
      },
      {
        text: 'View on GitHub',
        url: YAMLREADER_GITHUB,
        color: 'github',
        outer: true
      }
    ]
  };
  public usageTile: ICodeTile = {
    header: 'Usage',
    codeFile: '/assets/code/yamlreader.js'
  };
  public yamlTile: ICodeTile = {
    header: 'YAML file',
    codeFile: '/assets/code/awesomeyaml.yml'
  };
  public metadata: SeoTags = {
    title: '@Favware/yamlreader',
    description: 'Awesome minimal wrapper around js-yaml for directly reading in YAML files',
    image: 'https://favware.tech/assets/icons/yamlreader.png',
    imageAlt: '@Favware/yamlreader Icon Image',
    url: '/yamlreader',
    summary: oneLine`A NodeJS library that can read YAML files and will output them to a standard JSON object.
      Install it today with "@favware/yamlreader"`,
    keywords: ['nodejs', 'javascript', 'typescript', 'library', 'package', 'npm', 'yarn', 'yaml', 'yamlreader', 'awesome-yaml-reader', 'awesomeyamlreader', 'json']
  };

  constructor(private seo: SeoService) {}

  public ngOnInit(): void {
    this.seo.generateTags({
      title: this.metadata.title,
      description: this.metadata.description,
      image: this.metadata.image,
      imageAlt: this.metadata.imageAlt,
      url: this.metadata.url,
      summary: this.metadata.summary,
      keywords: this.metadata.keywords
    });
  }
}
