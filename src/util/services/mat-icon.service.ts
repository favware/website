import { isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MatIconService {
  private matIconRegistry: MatIconRegistry;
  private domSanitizer: DomSanitizer;

  private domain = isPlatformServer(this.platformId) ? 'https://favware.tech/' : '';

  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer, @Inject(PLATFORM_ID) private platformId: string) {
    this.domSanitizer = domSanitizer;
    this.matIconRegistry = matIconRegistry;
  }

  public init() {
    this.matIconRegistry.addSvgIcon('mat-mail-icon', this.domSanitizer.bypassSecurityTrustResourceUrl(`${this.domain}assets/svgs/mail.svg`));

    this.matIconRegistry.addSvgIcon('mat-discord-icon', this.domSanitizer.bypassSecurityTrustResourceUrl(`${this.domain}assets/svgs/discord.svg`));

    this.matIconRegistry.addSvgIcon('mat-facebook-icon', this.domSanitizer.bypassSecurityTrustResourceUrl(`${this.domain}assets/svgs/facebook.svg`));

    this.matIconRegistry.addSvgIcon('mat-github-icon', this.domSanitizer.bypassSecurityTrustResourceUrl(`${this.domain}assets/svgs/github.svg`));

    this.matIconRegistry.addSvgIcon('mat-linkedin-icon', this.domSanitizer.bypassSecurityTrustResourceUrl(`${this.domain}assets/svgs/linkedin.svg`));

    this.matIconRegistry.addSvgIcon('mat-mail-icon', this.domSanitizer.bypassSecurityTrustResourceUrl(`${this.domain}assets/svgs/mail.svg`));

    this.matIconRegistry.addSvgIcon('mat-reddit-icon', this.domSanitizer.bypassSecurityTrustResourceUrl(`${this.domain}assets/svgs/reddit.svg`));

    this.matIconRegistry.addSvgIcon('mat-twitch-icon', this.domSanitizer.bypassSecurityTrustResourceUrl(`${this.domain}assets/svgs/twitch.svg`));

    this.matIconRegistry.addSvgIcon('mat-twitter-icon', this.domSanitizer.bypassSecurityTrustResourceUrl(`${this.domain}assets/svgs/twitter.svg`));

    this.matIconRegistry.addSvgIcon('mat-youtube-icon', this.domSanitizer.bypassSecurityTrustResourceUrl(`${this.domain}assets/svgs/youtube.svg`));

    this.matIconRegistry.addSvgIcon('mat-tava-puzzle-icon', this.domSanitizer.bypassSecurityTrustResourceUrl(`${this.domain}assets/svgs/icon-puzzle.svg`));

    this.matIconRegistry.addSvgIcon('mat-tava-star-icon', this.domSanitizer.bypassSecurityTrustResourceUrl(`${this.domain}assets/svgs/icon-star.svg`));

    this.matIconRegistry.addSvgIcon('mat-tava-temple-icon', this.domSanitizer.bypassSecurityTrustResourceUrl(`${this.domain}assets/svgs/icon-temple.svg`));
  }
}
