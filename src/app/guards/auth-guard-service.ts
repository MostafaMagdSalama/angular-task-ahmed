import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";



@Injectable({ providedIn: 'root' })

export class AuthGuardService implements CanActivate {
    constructor(private authService: AuthService, private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const token = this.authService.getToken();
        /**
         * JavaScript has falsy and truthy values, you
         * don't need to write 'if(!!token)' use 'if(token)' 
         * https://developer.mozilla.org/en-US/docs/Glossary/Truthy
         */
        if (!!token) {
            console.log({ authenticated: token, satus: true })
        }
        else {
            console.log({ authenticated: token, s: false })

        }
        if (!!token) return true;

        this.router.navigate(['/login'])
        return false;

    }

}