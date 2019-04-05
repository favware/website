import { Breakpoints, BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { SeoService } from '@services/seo.service';
import { SidenavLink } from '@util/interfaces';
import { oneLine } from 'common-tags';

@Component({
  selector: 'favware-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  public sidenavMode = 'side';
  public isFixedInViewport = false;
  public isSidenavOpen = false;
  public isSidenavClosable = true;
  public isSmall = false;

  metadata = {
    title: 'Home',
    description: 'For Hearth and Home! Check out my projects here!',
    image: 'https://favna.xyz/assets/og-image.png',
    imageAlt: 'Social Embedding Image',
    url: '/home',
    summary: oneLine`On this website I am listing all the notable projects I have worked on.
      Consider it to be my portfolio of sorts as well as a knowledge base of information.
      There are also some small fun features here and more will be added in the future.`,
    keywords: [],
  };

  items: SidenavLink[] = [
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
      routerLink: '/unescape',
      label: 'Unescape-ES6',
      image: 'assets/icons/unescape.png',
    },
    {
      routerLink: '/querystring',
      label: 'Awesome Querystring',
      image: 'assets/icons/querystring.png',
    },
    {
      routerLink: '/converter',
      label: 'Awesome Converter',
      image: 'assets/icons/converter.png',
    },
    {
      routerLink: '/milkylint',
      label: 'Milky TSLint',
      image: 'assets/icons/milkylint.png',
    },
    {
      routerLink: '/yamlreader',
      label: 'Awesome YAML Reader',
      image: 'assets/icons/yamlreader.png',
    },
    {
      routerLink: '/zalgo',
      label: 'Awesome Zalgo',
      image: 'assets/icons/zalgo.png',
    },
    {
      routerLink: '/crypto',
      label: 'Awesome Crypto',
      image: 'assets/icons/crypto.png',
    },
    {
      routerLink: '/contact',
      label: 'Contact',
      image: 'assets/icons/contact.png',
    }
  ];

  constructor (private breakpointObserver: BreakpointObserver, private seo: SeoService) {
  }

  ngOnInit (): void {
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
