import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Action} from '@ngrx/store';
import {Pokemon} from '../../model/pokemon.model';
import {selectCard} from '../../store/actions/cards.actions';

@Component({
    selector: 'app-pokemon-list',
    templateUrl: './pokemon-list.component.html',
    styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

    @Input()
    cards: Pokemon[];

    @Output()
    actionEmitter = new EventEmitter<Action>();

    constructor() {
    }

    ngOnInit() {
    }

    select(card: Pokemon) {
        this.actionEmitter.emit(selectCard({card}));
    }

}
