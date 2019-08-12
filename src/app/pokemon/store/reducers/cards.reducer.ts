import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Action, createReducer, on} from '@ngrx/store';
import {Pokemon} from '../../model/pokemon.model';
import {createCard, deleteCard, selectCard, unselectCard, updateCard, updateCardsList} from '../actions/cards.actions';

export const cardAdapter = createEntityAdapter<Pokemon>({
    sortComparer: (a: Pokemon, b: Pokemon) => a.name.localeCompare(b.name),
});

export interface CardsState extends EntityState<Pokemon> {
    card?: Pokemon;
}

const initialState =  cardAdapter.getInitialState();

const reducer = createReducer(
    initialState,
    on(updateCardsList, (state, {cards}) => cardAdapter.addAll(cards, state)),
    on(selectCard, (state, {card}) => ({...state, card})),
    on(unselectCard, updateCard, (state: CardsState) => {
        const {card, ...rest} = state;
        return rest;
    }),
    on(createCard, (state, {card}) => cardAdapter.addOne(card, state)),
    on(deleteCard, (state, {id}) => cardAdapter.removeOne(id, state))
);

export function reducerCards(state: CardsState, action: Action) {
    return reducer(state, action);
}
