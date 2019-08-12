import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {from, of} from 'rxjs';
import {catchError, concatMap, exhaustMap, map} from 'rxjs/operators';
import {showSnackBar} from '../../../core/store/actions/core.actions';
import {navigateTo} from '../../../store/actions/app.actions';
import {Pokemon} from '../../model/pokemon.model';
import {updateCard, updateCardsList} from '../actions/cards.actions';


@Injectable()
export class CardsEffects {

    updateCardsList$ = createEffect(() =>
        this.firestore.collection<Pokemon>('cards').valueChanges().pipe(
            map(cards => updateCardsList({cards})),
        ));

    updateCard$ = createEffect(() => this.actions$.pipe(
        ofType(updateCard),
        exhaustMap((action) =>
            from(this.firestore.doc(`cards/${action.card.id}`).set(action.card)).pipe(
                concatMap(() => from([
                    navigateTo({commands: ['core', 'layout', 'pokemon']}),
                    showSnackBar({message: `${action.card.name} updated.`, config: {}})
                ])),
                catchError(() => of(showSnackBar({
                    message: 'Ops, something goes wrong.', config: {
                        duration: 5000
                    }
                })))
            )
        ),
    ));

    constructor(private actions$: Actions, private firestore: AngularFirestore) {
    }
}
