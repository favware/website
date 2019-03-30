import { Component } from '@angular/core';
import { oneLine } from 'common-tags';

import { DISCORD_SERVER_URL, IPrimaryTile, RIBBON_GITHUB_URL, RIBBON_INVITE_URL } from '../../util';


@Component({
  selector: 'favware-ribbon',
  templateUrl: './ribbon.component.html',
  styleUrls: ['./ribbon.component.scss'],
})
export class RibbonComponent {
  public readonly headerTile: IPrimaryTile = {
    header: 'Ribbon',
    subheader: 'A feature rich, modular Discord.JS-Commando server bot',
    buttons: [
      {
        text: 'Invite Ribbon to your server',
        url: RIBBON_INVITE_URL,
        color: 'primary',
        outer: true,
      },
      {
        text: 'Join the support server',
        url: DISCORD_SERVER_URL,
        color: 'secondary',
        outer: true,
      },
      {
        text: 'View on GitHub',
        url: RIBBON_GITHUB_URL,
        color: 'github',
        outer: true,
      }
    ],
  };
  public readonly aboutTile: IPrimaryTile = {
    header: 'About',
    subheader: '',
    text: [oneLine`
            Ribbon is a public server bot written for the [all-in-one voice and text chat application Discord](https://discordapp.com).
            It offers a rich amount of features to make your experience on Discord much easier, faster and better.
            Ribbon features commands from searching the web, moderating your server to streaming music and a lot more.
            You can check a more extensive list of commands below.`],
  };
}
