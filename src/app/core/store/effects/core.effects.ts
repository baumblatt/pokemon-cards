import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {tap} from 'rxjs/operators';
import {showSnackBar} from '../actions/core.actions';

@Injectable()
export class CoreEffects {

    showSnackBar$ = createEffect(() => this.actions$.pipe(
        ofType(showSnackBar),
        tap(action =>
            this.matSnackBar.open(action.message, null, {
                duration: 3000,
                ...action.config
            })
        ),
    ), {dispatch: false});

    constructor(private actions$: Actions, private matSnackBar: MatSnackBar){
    }
}
