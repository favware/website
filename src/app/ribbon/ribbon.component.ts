import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { SeoService } from '@services/seo.service';
import { DISCORD_SERVER_URL, RIBBON_GITHUB_URL, RIBBON_INVITE_URL } from '@util/constants';
import { IPrimaryTile } from '@util/interfaces';
import { oneLine } from 'common-tags';
import moment from 'moment';
import { Observable } from 'rxjs';

type Node = {
  header: string;
  value: string;
  id?: any;
};

@Component({
  selector: 'favware-ribbon',
  templateUrl: './ribbon.component.html',
  styleUrls: ['./ribbon.component.scss'],
})
export class RibbonComponent implements OnInit {
  public statsHeader = 'Statistics';
  public headerTile: IPrimaryTile = {
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
  public aboutTile: IPrimaryTile = {
    header: 'About',
    subheader: '',
    text: [oneLine`
            Ribbon is a public server bot written for the [all-in-one voice and text chat application Discord](https://discordapp.com).
            It offers a rich amount of features to make your experience on Discord much easier, faster and better.
            Ribbon features commands from searching the web, moderating your server to streaming music and a lot more.
            You can check a more extensive list of commands below.`],
  };
  public metadata = {
    title: 'Ribbon',
    description: 'Amazing multifunctional Discord bot that can do anything you want anywhere you want',
    image: 'https://favware.tech/assets/icons/ribbon.png',
    imageAlt: 'Ribbon Preview Image',
    url: '/ribbon',
    summary: oneLine`A rich all purpose Discord bot that can make your server both more productive and lots more fun.
      It comes jam-packed with features and it should be your go-to number one bot for any server of any kind or size!`,
    keywords: ['discord', 'ribbon', 'bot', 'all-purpose', 'all', 'purpose', 'chat', 'pokemon', 'casino', 'automod', 'music', 'stream', '8ball', 'fun'],
  };

  public isDoneLoading: boolean;
  public sinceLabel = `Since ${moment('20190406T16:00:00', 'YYYYMMDDTHH:mm:ss').format('MMMM Do YYYY [at] HH:mm')}`;

  public collection: AngularFirestoreCollection<Node>;
  public documents: Observable<Node[]>;

  constructor (private seo: SeoService, private afs: AngularFirestore) {
    this.isDoneLoading = false;
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
    this.collection = this.afs.collection('ribbon', ref => ref.orderBy('label'));
    this.documents = this.collection.valueChanges();
    this.isDoneLoading = true;
  }
}
