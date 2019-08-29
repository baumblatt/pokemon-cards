import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment} from '@angular/router';
import {Observable} from 'rxjs';
import {map, take} from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

    constructor(private authFire: AngularFireAuth, private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.isAuthenticated();
    }

    canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
        return this.isAuthenticated();
    }

    isAuthenticated(): Observable<boolean> {
        return this.authFire.user.pipe(
            map(user => {
                if (!user) {
                    this.router.navigate(['core', 'layout', 'login']).then();
                }

                return !!user;
            }),
            take(1),
        );
    }


}
