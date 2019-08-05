import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Action} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Pokemon} from '../../model/pokemon.model';
import {unselectCard, updateCard} from '../../store/actions/cards.actions';

@Component({
    selector: 'app-pokemon-detail',
    templateUrl: './pokemon-detail.component.html',
    styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

    pokemonForm = this.fb.group({
        id: [''],
        name: [''],
        height: [''],
        weight: [''],
    });
    @Output()
    actionEmitter = new EventEmitter<Action>();

    constructor(private fb: FormBuilder) {
    }

    @Input()
    set card(card: Pokemon) {
        this.pokemonForm.patchValue(card);
    }

    ngOnInit() {
    }

    unselect() {
        this.actionEmitter.emit(unselectCard());
    }

    update() {
        this.actionEmitter.emit(updateCard({card: this.pokemonForm.value}));
    }
}
