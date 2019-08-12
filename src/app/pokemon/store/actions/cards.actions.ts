import {createAction, props} from '@ngrx/store';
import {Pokemon} from '../../model/pokemon.model';

export const updateCardsList = createAction(
    '[Cards] Update cards list.',
    props<{cards: Pokemon[]}>(),
);

export const selectCard = createAction(
    '[Cards] Select card',
    props<{card: Pokemon}>()
);

export const unselectCard = createAction(
    '[Cards] Unselect card.'
);

export const createCard = createAction(
    '[Cards] Create card.',
    props<{card: Pokemon}>()
);

export const updateCard = createAction(
    '[Cards] Update card.',
    props<{card: Pokemon}>()
);

export const deleteCard = createAction(
    '[Cards] Delete cards.',
    props<{id: string}>()
);
