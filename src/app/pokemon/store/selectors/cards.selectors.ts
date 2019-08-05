import {createSelector} from '@ngrx/store';
import {cardAdapter} from '../reducers/cards.reducer';
import {getPokemonState} from '../reducers/global.reducer';

export const getCardsState = createSelector(
    getPokemonState,
    state => state.cards
);

export const getAllCards = createSelector(
    getCardsState,
    state => cardAdapter.getSelectors().selectAll(state)
);

export const getSelectedCard = createSelector(
    getCardsState,
    state => state.card
);

