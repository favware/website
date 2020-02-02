import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MatIconService {
  private matIconRegistry: MatIconRegistry;
  private domSanitizer: DomSanitizer;

  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    this.domSanitizer = domSanitizer;
    this.matIconRegistry = matIconRegistry;
  }

  public init() {
    this.matIconRegistry.addSvgIcon('mat-mail-icon', this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/svgs/mail.svg`));

    this.matIconRegistry.addSvgIcon('mat-discord-icon', this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/svgs/discord.svg`));

    this.matIconRegistry.addSvgIcon('mat-facebook-icon', this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/svgs/facebook.svg`));

    this.matIconRegistry.addSvgIcon('mat-github-icon', this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/svgs/github.svg`));

    this.matIconRegistry.addSvgIcon('mat-linkedin-icon', this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/svgs/linkedin.svg`));

    this.matIconRegistry.addSvgIcon('mat-mail-icon', this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/svgs/mail.svg`));

    this.matIconRegistry.addSvgIcon('mat-reddit-icon', this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/svgs/reddit.svg`));

    this.matIconRegistry.addSvgIcon('mat-twitch-icon', this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/svgs/twitch.svg`));

    this.matIconRegistry.addSvgIcon('mat-twitter-icon', this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/svgs/twitter.svg`));

    this.matIconRegistry.addSvgIcon('mat-youtube-icon', this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/svgs/youtube.svg`));

    this.matIconRegistry.addSvgIcon('mat-tava-puzzle-icon', this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/svgs/icon-puzzle.svg`));

    this.matIconRegistry.addSvgIcon('mat-tava-star-icon', this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/svgs/icon-star.svg`));

    this.matIconRegistry.addSvgIcon('mat-tava-temple-icon', this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/svgs/icon-temple.svg`));
  }
}
