import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import {CardsState, reducerCards} from './cards.reducer';

export interface PokemonState {
    cards: CardsState;
}

export const pokemonReducer: ActionReducerMap<PokemonState> = {
    cards: reducerCards
};

export const getPokemonState = createFeatureSelector<PokemonState>(
    'pokemon'
);
