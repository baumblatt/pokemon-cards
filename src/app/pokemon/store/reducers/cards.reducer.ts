import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Action, createReducer, on} from '@ngrx/store';
import {Pokemon} from '../../model/pokemon.model';
import {createCard, deleteCard, selectCard, unselectCard, updateCard} from '../actions/cards.actions';

export const cardAdapter = createEntityAdapter<Pokemon>({
    sortComparer: (a: Pokemon, b: Pokemon) => a.name.localeCompare(b.name),
});

export interface CardsState extends EntityState<Pokemon> {
    card?: Pokemon;
}

// START POG
const pog = [
    {id: 1, name: 'Lunala'},
    {id: 2, name: 'Solgaleo'},
    {id: 3, name: 'Picachu'},
    {id: 4, name: 'Challizard'},
];

const initialState = cardAdapter.addAll(pog, cardAdapter.getInitialState());
// END POG

// const initialState =  cardAdapter.getInitialState();

const reducer = createReducer(
    initialState,
    on(selectCard, (state, {card}) => ({...state, card})),
    on(unselectCard, (state: CardsState) => {
        const {card, ...rest} = state;
        return rest;
    }),
    on(createCard, (state, {card}) => cardAdapter.addOne(card, state)),
    on(updateCard, (state, {card}) =>
        cardAdapter.updateOne({id: card.id, changes: card}, state)
    ),
    on(deleteCard, (state, {id}) => cardAdapter.removeOne(id, state))
);

export function reducerCards(state: CardsState, action: Action) {
    return reducer(state, action);
}
