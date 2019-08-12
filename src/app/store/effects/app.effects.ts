import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {tap} from 'rxjs/operators';
import {showSnackBar} from '../../core/store/actions/core.actions';
import {navigateTo} from '../actions/app.actions';

@Injectable()
export class AppEffects {

    navigateTo$ = createEffect(() => this.actions$.pipe(
        ofType(navigateTo),
        tap(action => this.router.navigate(action.commands)),
    ), {dispatch: false});

    constructor(private actions$: Actions, private router: Router) {
    }
}
