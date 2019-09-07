import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatIconService } from '@services/mat-icon.service';
import { SeoService, SeoTags } from '@services/seo.service';
import { DISCORD_SERVER_URL, GITHUB_PROFILE, TWITTER_PROFILE } from '@util/constants';
import { SidenavLink } from '@util/interfaces';
import ngForTrackBy from '@util/ngForTrackBy';
import { oneLine } from 'common-tags';

@Component({
  selector: 'favware-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  public ngForTrackBy = ngForTrackBy;
  public sidenavMode = 'side';
  public isFixedInViewport = false;
  public isSidenavOpen = false;
  public isSidenavClosable = true;
  public isSmall = false;
  public githubProfile = GITHUB_PROFILE;
  public discordServer = DISCORD_SERVER_URL;
  public twitterProfile = TWITTER_PROFILE;

  public metadata: SeoTags = {
    title: 'Home',
    description: 'For Hearth and Home! Check out my projects here!',
    image: 'https://favware.tech/assets/og-image.png',
    imageAlt: 'Social Embedding Image',
    url: '/home',
    summary: oneLine`On this website I am listing all the notable projects I have worked on.
      Consider it to be my portfolio of sorts as well as a knowledge base of information.
      There are also some small fun features here and more will be added in the future.`,
    keywords: [],
  };

  public items: SidenavLink[] = [
    {
      routerLink: '.',
      label: 'Home',
      image: 'assets/icons/home.png',
    },
    {
      routerLink: '/ribbon',
      label: 'Ribbon',
      image: 'assets/icons/ribbon.png',
    },
    {
      routerLink: '/dexa',
      label: 'Dexa',
      image: 'assets/icons/dexa.png',
    },
    {
      routerLink: '/seedcheck',
      label: 'SeedChecker',
      image: 'assets/icons/seedcheck.png',
    },
    {
      routerLink: '/convertbot',
      label: 'ConvertBot',
      image: 'assets/icons/convertbot.png',
    },
    {
      routerLink: '/catchcalc',
      label: 'CatchCalc',
      image: 'assets/icons/catchcalc.png',
    },
    {
      routerLink: '/tava',
      label: 'Ta\'Va',
      image: 'assets/icons/tava.png',
    },
    {
      routerLink: '/create-djsbot',
      label: 'Create DJS Bot',
      image: 'assets/icons/create-djsbot.png',
    },
    {
      routerLink: '/unescape',
      label: '@Favware/Unescape',
      image: 'assets/icons/unescape.png',
    },
    {
      routerLink: '/querystring',
      label: '@Favware/Querystring',
      image: 'assets/icons/querystring.png',
    },
    {
      routerLink: '/converter',
      label: '@Favware/Converter',
      image: 'assets/icons/converter.png',
    },
    {
      routerLink: '/milkylint',
      label: '@Favware/Milky-TSLint',
      image: 'assets/icons/milkylint.png',
    },
    {
      routerLink: '/yamlreader',
      label: '@Favware/yamlreader',
      image: 'assets/icons/yamlreader.png',
    },
    {
      routerLink: '/zalgo',
      label: '@Favware/zalgo',
      image: 'assets/icons/zalgo.png',
    },
    {
      routerLink: '/crypto',
      label: '@Favware/crypto',
      image: 'assets/icons/crypto.png',
    },
    {
      routerLink: '/contact',
      label: 'Contact',
      image: 'assets/icons/contact.png',
    }
  ];

  constructor (private matIconService: MatIconService, private breakpointObserver: BreakpointObserver, private seo: SeoService) {
    this.matIconService.init();
  }

  public ngOnInit (): void {
    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.HandsetPortrait])
      .subscribe((state: BreakpointState) => {
        this.isSmall = state.matches;
        if (state.matches) {
          this.isFixedInViewport = true;
          this.isSidenavClosable = true;
          this.isSidenavOpen = false;
          this.sidenavMode = 'over';
        } else {
          this.isFixedInViewport = false;
          this.isSidenavClosable = false;
          this.isSidenavOpen = true;
          this.sidenavMode = 'side';
        }
      });

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
