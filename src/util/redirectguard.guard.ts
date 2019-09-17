import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'favware-redirect-guard',
  template: `<span>/<span>`,
})
@Injectable()
export class RedirectGuardComponent implements CanActivate {
  public router: Router;
  private isBrowser: boolean;

  constructor (router: Router, @Inject(PLATFORM_ID) private platformId: any) {
    this.router = router;
    this.isBrowser = isPlatformBrowser(platformId);
  }

  public canActivate (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.isBrowser) window.location.href = route.data.externalUrl;
    return true;
  }
}
