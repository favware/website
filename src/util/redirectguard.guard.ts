import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class RedirectGuard implements CanActivate {
  private readonly router: Router;

  constructor (router: Router) {
    this.router = router;
  }

  canActivate (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    window.location.href = route.data.externalUrl;
    return true;
  }
}
