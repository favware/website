import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ASSET_BASE_PATH } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class MatIconService {
  private matIconRegistry: MatIconRegistry;
  private domSanitizer: DomSanitizer;

  constructor (matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    this.domSanitizer = domSanitizer;
    this.matIconRegistry = matIconRegistry;
  }

  init () {
    this.matIconRegistry.addSvgIcon(
      'mat-mail-icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl(`${ASSET_BASE_PATH}/website-social-media-fabs/mail.svg`)
    );

    this.matIconRegistry.addSvgIcon(
      'mat-discord-icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl(`${ASSET_BASE_PATH}/website-social-media-fabs/discord.svg`)
    );

    this.matIconRegistry.addSvgIcon(
      'mat-facebook-icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl(`${ASSET_BASE_PATH}/website-social-media-fabs/facebook.svg`)
    );

    this.matIconRegistry.addSvgIcon(
      'mat-github-icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl(`${ASSET_BASE_PATH}/website-social-media-fabs/github.svg`)
    );

    this.matIconRegistry.addSvgIcon(
      'mat-linkedin-icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl(`${ASSET_BASE_PATH}/website-social-media-fabs/linkedin.svg`)
    );

    this.matIconRegistry.addSvgIcon(
      'mat-mail-icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl(`${ASSET_BASE_PATH}/website-social-media-fabs/mail.svg`)
    );

    this.matIconRegistry.addSvgIcon(
      'mat-reddit-icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl(`${ASSET_BASE_PATH}/website-social-media-fabs/reddit.svg`)
    );

    this.matIconRegistry.addSvgIcon(
      'mat-twitch-icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl(`${ASSET_BASE_PATH}/website-social-media-fabs/twitch.svg`)
    );

    this.matIconRegistry.addSvgIcon(
      'mat-twitter-icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl(`${ASSET_BASE_PATH}/website-social-media-fabs/twitter.svg`)
    );

    this.matIconRegistry.addSvgIcon(
      'mat-youtube-icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl(`${ASSET_BASE_PATH}/website-social-media-fabs/youtube.svg`)
    );
  }
}
