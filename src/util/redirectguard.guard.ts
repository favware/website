import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class RedirectGuard implements CanActivate {
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