import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { ISidenavLink } from 'src/util/interfaces';

@Component({
  selector: 'favware-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  public sidenavMode = 'side';
  public isFixedInViewport = false;
  public isSidenavOpen = false;
  public isSidenavClosable = true;
  public isSmall = false;

  public readonly items: ISidenavLink[] = [
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

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
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

export default SidenavComponent;
