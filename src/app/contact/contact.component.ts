import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import {
  COMMON_META_TAGS,
  CONTACT_FACEBOOK,
  CONTACT_GITHUB,
  CONTACT_LINKEDIN,
  CONTACT_MAIL,
  CONTACT_REDDIT,
  CONTACT_TWITCH,
  CONTACT_TWITTER,
  CONTACT_YOUTUBE,
  DISCORD_SERVER_URL,
  IContactMethod,
  IPrimaryTile,
  MatIconService
} from '../../util';

@Component({
  selector: 'favware-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {

  constructor (private matIconService: MatIconService, private title: Title, private meta: Meta) {
    this.matIconService.init();
  }

  private readonly metadata = {
    name: 'Favware Contact',
    description: 'Have questions, support requests or just want to get in contact with Favna? Go here!',
    image: 'https://favna.xyz/assets/icons/contact.png',
    imageAlt: 'Fancy Embedded Image',
  };

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

  ngOnInit (): void {
    this.title.setTitle(this.metadata.name);
    this.meta.addTags([
      { name: 'og:url', content: '/contact' },
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
