import { Breakpoints, BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

import { ISidenavLink } from '../../util';

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

  public readonly items: ISidenavLink[] = [
    {
      routerLink: '.',
      label: 'Home',
      image: 'assets/icons/home.webp',
    },
    {
      routerLink: '/ribbon',
      label: 'Ribbon',
      image: 'assets/icons/ribbon.webp',
    },
    {
      routerLink: '/dexa',
      label: 'Dexa',
      image: 'assets/icons/dexa.webp',
    },
    {
      routerLink: '/seedcheck',
      label: 'SeedChecker',
      image: 'assets/icons/seedcheck.webp',
    },
    {
      routerLink: '/convertbot',
      label: 'ConvertBot',
      image: 'assets/icons/convertbot.webp',
    },
    {
      routerLink: '/catchcalc',
      label: 'CatchCalc',
      image: 'assets/icons/catchcalc.webp',
    },
    {
      routerLink: '/tava',
      label: 'Ta\'Va',
      image: 'assets/icons/tava.webp',
    },
    {
      routerLink: '/unescape',
      label: 'Unescape-ES6',
      image: 'assets/icons/unescape.webp',
    },
    {
      routerLink: '/querystring',
      label: 'Awesome Querystring',
      image: 'assets/icons/querystring.webp',
    },
    {
      routerLink: '/converter',
      label: 'Awesome Converter',
      image: 'assets/icons/converter.webp',
    },
    {
      routerLink: '/milkylint',
      label: 'Milky TSLint',
      image: 'assets/icons/milkylint.webp',
    },
    {
      routerLink: '/yamlreader',
      label: 'Awesome YAML Reader',
      image: 'assets/icons/yamlreader.webp',
    },
    {
      routerLink: '/zalgo',
      label: 'Awesome Zalgo',
      image: 'assets/icons/zalgo.webp',
    },
    {
      routerLink: '/crypto',
      label: 'Awesome Crypto',
      image: 'assets/icons/crypto.webp',
    },
    {
      routerLink: '/contact',
      label: 'Contact',
      image: 'assets/icons/contact.webp',
    }
  ];

  constructor (private breakpointObserver: BreakpointObserver) {
  }

  ngOnInit () {
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
  }
}
