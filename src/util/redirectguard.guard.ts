import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Component({
  selector: 'favware-redirect-guard',
  template: `
    <span>/<span></span></span>
  `
})
@Injectable()
export class RedirectGuardComponent implements CanActivate {
  public router: Router;
  private isBrowser: boolean;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(router: Router, @Inject(PLATFORM_ID) private platformId: any) {
    this.router = router;
    this.isBrowser = isPlatformBrowser(platformId);
  }

  public canActivate(route: ActivatedRouteSnapshot): boolean {
    if (this.isBrowser) window.location.href = route.data.externalUrl;
    return true;
  }
}
