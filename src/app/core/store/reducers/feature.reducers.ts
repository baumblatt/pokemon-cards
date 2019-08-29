import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import {AuthState, authReducer} from './auth.reducer';

export interface CoreState {
    auth: AuthState;
}

export const reducers: ActionReducerMap<CoreState> = {
    auth: authReducer
};

export const getCoreState = createFeatureSelector<CoreState>(
    'core'
);
