import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { AWESOME_YAML_READER_GITHUB, AWESOME_YAML_READER_YARN, COMMON_META_TAGS, ICodeTile, IPrimaryTile } from '../../util';


@Component({
  selector: 'favware-yamlreader',
  templateUrl: './yamlreader.component.html',
  styleUrls: ['./yamlreader.component.scss'],
})
export class YamlreaderComponent implements OnInit {

  constructor (private title: Title, private meta: Meta) {}

  private readonly metadata = {
    name: 'Awesome YAML Reader',
    description: 'Awesome minimal wrapper around js-yaml for directly reading in YAML files',
    image: 'https://favna.xyz/assets/icons/yamlreader.png',
    imageAlt: 'Awesome YAML Reader Icon Image',
  };

  public readonly headerTile: IPrimaryTile = {
    header: 'Awesome YAML Reader',
    subheader: 'Awesome minimal wrapper around js-yaml',
    buttons: [
      {
        text: 'yarn add awesome-yaml-reader',
        color: 'primary',
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

  public readonly usageTile: ICodeTile = {
    header: 'Usage',
    codeFile: '/assets/code/yamlreader.js',
  };

  public readonly yamlTile: ICodeTile = {
    header: 'YAML file',
    codeFile: '/assets/code/awesomeyaml.yml',
  };

  ngOnInit (): void {
    this.title.setTitle(this.metadata.name);
    this.meta.addTags([
      { name: 'og:url', content: '/yamlreader' },
      { name: 'og:title', content: this.metadata.name },
      { name: 'og:description', content: this.metadata.description },
      { name: 'og:image', content: this.metadata.image },
      { name: 'og:image:alt', content: this.metadata.imageAlt },
      { name: 'twitter:title', content: this.metadata.name },
      { name: 'twitter:description', content: this.metadata.description },
      { name: 'twitter:image', content: this.metadata.image },
      { name: 'twitter:image:alt', content: this.metadata.imageAlt },
      ...COMMON_META_TAGS
    ]);
  }
}
