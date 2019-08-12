import {MatSnackBarConfig} from '@angular/material';
import {createAction, props} from '@ngrx/store';

export const showSnackBar = createAction(
    '[App] Show snack bar.',
    props<{ message, config: MatSnackBarConfig }>()
);
