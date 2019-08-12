import {Component, OnInit} from '@angular/core';
import {Action, select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Pokemon} from '../../model/pokemon.model';
import {PokemonState} from '../../store/reducers/feature.reducers';
import {getAllCards} from '../../store/selectors/cards.selectors';

@Component({
    selector: 'app-pokemons',
    templateUrl: './pokemons.component.html',
    styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {

    cards$: Observable<Pokemon[]>;

    constructor(private store: Store<PokemonState>) {
    }

    ngOnInit() {
      this.cards$ = this.store.pipe(select(getAllCards));
    }

    dispatch(action: Action) {
        this.store.dispatch(action);
    }

}
