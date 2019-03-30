import { Component } from '@angular/core';
import {
  CONTACT_FACEBOOK,
  CONTACT_GITHUB,
  CONTACT_LINKEDIN,
  CONTACT_MAIL,
  CONTACT_REDDIT,
  CONTACT_TWITCH,
  CONTACT_TWITTER,
  CONTACT_YOUTUBE,
  DISCORD_SERVER_URL,
  MatIconService
} from 'src/util';
import { IContactMethod, IPrimaryTile } from 'src/util/interfaces';

@Component({
  selector: 'favware-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  public readonly headerTile: IPrimaryTile = {
    header: 'Got questions, concerns or business inquires?',
    subheader: 'Contact me through one of these sources',
    text: ['Or fill in the form below to send an email'],
  };
  public readonly contactMethods: IContactMethod[] = [
    { logo: 'mat-mail-icon', link: CONTACT_MAIL, color: 'mail', contact: 'send an email' },
    { logo: 'mat-github-icon', link: CONTACT_GITHUB, color: 'github', contact: 'find me on github' },
    { logo: 'mat-linkedin-icon', link: CONTACT_LINKEDIN, color: 'linkedin', contact: 'connect on linkedin' },
    { logo: 'mat-discord-icon', link: DISCORD_SERVER_URL, color: 'discord', contact: 'join discord server' },
    { logo: 'mat-twitter-icon', link: CONTACT_TWITTER, color: 'twitter', contact: 'follow me on twitter' },
    { logo: 'mat-facebook-icon', link: CONTACT_FACEBOOK, color: 'facebook', contact: 'send a message on facebook' },
    { logo: 'mat-reddit-icon', link: CONTACT_REDDIT, color: 'reddit', contact: 'send a message on reddit' },
    { logo: 'mat-twitch-icon', link: CONTACT_TWITCH, color: 'twitch', contact: 'watch my twitch streams' },
    { logo: 'mat-youtube-icon', link: CONTACT_YOUTUBE, color: 'youtube', contact: 'subscribe to me on youtube' }
  ];

  private matIconService: MatIconService;

  constructor (matIconService: MatIconService) {
    this.matIconService = matIconService;
    this.matIconService.init();
  }
}
