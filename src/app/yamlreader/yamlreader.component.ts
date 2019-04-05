import { Component, OnInit } from '@angular/core';
import { SeoService } from '@services/seo.service';
import { AWESOME_YAML_READER_GITHUB, AWESOME_YAML_READER_YARN } from '@util/constants';
import { ICodeTile, IPrimaryTile } from '@util/interfaces';
import { oneLine } from 'common-tags';

@Component({
  selector: 'favware-yamlreader',
  templateUrl: './yamlreader.component.html',
  styleUrls: ['./yamlreader.component.scss'],
})
export class YamlreaderComponent implements OnInit {

  headerTile: IPrimaryTile = {
    header: 'Awesome YAML Reader',
    subheader: 'Awesome minimal wrapper around js-yaml',
    buttons: [
      {
        text: 'yarn add awesome-yaml-reader',
        color: 'accent',
        disabled: true,
      },
      {
        text: 'View on Yarn',
        url: AWESOME_YAML_READER_YARN,
        color: 'yarn',
        outer: true,
      },
      {
        text: 'View on GitHub',
        url: AWESOME_YAML_READER_GITHUB,
        color: 'github',
        outer: true,
      }
    ],
  };
  usageTile: ICodeTile = {
    header: 'Usage',
    codeFile: '/assets/code/yamlreader.js',
  };
  yamlTile: ICodeTile = {
    header: 'YAML file',
    codeFile: '/assets/code/awesomeyaml.yml',
  };
  metadata = {
    title: 'Awesome YAML Reader',
    description: 'Awesome minimal wrapper around js-yaml for directly reading in YAML files',
    image: 'https://favna.xyz/assets/icons/yamlreader.png',
    imageAlt: 'Awesome YAML Reader Icon Image',
    url: '/yamlreader',
    summary: oneLine`A NodeJS library that can read YAML files and will output them to a standard JSON object.
      Install it today with "yarn add awesome-yaml-reader"`,
    keywords: ['nodejs', 'javascript', 'typescript', 'library', 'package', 'npm', 'yarn', 'yaml', 'yamlreader', 'awesome-yaml-reader', 'awesomeyamlreader', 'json'],
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
