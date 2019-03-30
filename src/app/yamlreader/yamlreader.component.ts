import { Component } from '@angular/core';
import { AWESOME_YAML_READER_GITHUB, AWESOME_YAML_READER_YARN } from 'src/util/constants';
import { ICodeTile, IPrimaryTile } from 'src/util/interfaces';


@Component({
  selector: 'favware-yamlreader',
  templateUrl: './yamlreader.component.html',
  styleUrls: ['./yamlreader.component.scss'],
})
export class YamlreaderComponent {
  public readonly headerTile: IPrimaryTile = {
    header: 'Awesome YAML Reader',
    subheader: 'Awesome minimal wrapper around js-yaml for directly reading in YAML files',
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
}

export default YamlreaderComponent;
