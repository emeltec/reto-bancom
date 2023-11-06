import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../services/auth.service";


@Injectable({
  providedIn: 'root'
})
export class UserLoggedGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    if (this.authService.isLogin()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}