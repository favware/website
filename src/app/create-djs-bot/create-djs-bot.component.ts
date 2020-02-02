import { Component, OnInit } from '@angular/core';
import { SeoService, SeoTags } from '@services/seo.service';
import { CREATE_DJSBOT_GITHUB, CREATE_DJSBOT_YARN } from '@util/constants';
import { ICodeTile, IPrimaryTile } from '@util/interfaces';
import ngForTrackBy from '@util/ngForTrackBy';
import { oneLine } from 'common-tags';

@Component({
  selector: 'favware-create-djs-bot',
  templateUrl: './create-djs-bot.component.html',
  styleUrls: ['./create-djs-bot.component.scss']
})
export class CreateDjsBotComponent implements OnInit {
  public ngForTrackBy = ngForTrackBy;
  public headerTile: IPrimaryTile = {
    header: 'Create DJS Bot',
    subheader: '⚡Bootstrapping CLI tool for quickly setting up a Discord bot project',
    buttons: [
      {
        text: 'yarn create djsbot',
        color: 'accent',
        disabled: true
      },
      {
        text: 'View on Yarn',
        url: CREATE_DJSBOT_YARN,
        color: 'yarn',
        outer: true
      },
      {
        text: 'View on GitHub',
        url: CREATE_DJSBOT_GITHUB,
        color: 'github',
        outer: true
      }
    ]
  };

  public createDjsBotYarnTile: ICodeTile = {
    header: 'Usage - npx or yarn',
    codeFile: '/assets/code/createdjsbot.yarn.bash'
  };

  public createDjsBotGlobalTile: ICodeTile = {
    header: 'Usage - global usage',
    codeFile: '/assets/code/createdjsbot.global.bash'
  };

  public metadata: SeoTags = {
    title: 'Create-DJSBot',
    description: '⚡Bootstrapping CLI tool for quickly setting up a Discord bot project',
    image: 'https://favware/tech/assets/icons/create-djsbot.png',
    imageAlt: 'Create-DJSBot Icon',
    url: 'create-djsbot',
    summary: oneLine`A NodeJS library that helps you to quickly get started with your Discord bot by providing a ready-to-run boilerplate
    using the Discord.JS-Commando framework. Supports a JavaScript and a TypeScript template`,
    keywords: ['nodejs', 'javascript', 'typescript', 'discord', 'boilerplate', 'create', 'discord.js', 'djs', 'commando', 'discord.js-commando']
  };

  constructor(private seo: SeoService) {}

  public ngOnInit() {
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
