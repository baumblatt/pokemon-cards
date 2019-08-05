import {Component, OnInit} from '@angular/core';
import {Action, select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Pokemon} from '../../model/pokemon.model';
import {PokemonState} from '../../store/reducers/global.reducer';
import {getSelectedCard} from '../../store/selectors/cards.selectors';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  card$: Observable<Pokemon>;

  constructor(private store: Store<PokemonState>) {
  }

  ngOnInit() {
    this.card$ = this.store.pipe(select(getSelectedCard));
  }


  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
