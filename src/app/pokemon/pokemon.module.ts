import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {SharedModule} from '../core/shared/shared.module';

import {PokemonRoutingModule} from './pokemon-routing.module';
import {PokemonListComponent} from './components/pokemon-list/pokemon-list.component';
import {PokemonDetailComponent} from './components/pokemon-detail/pokemon-detail.component';
import {PokemonsComponent} from './containers/pokemons/pokemons.component';
import {PokemonComponent} from './containers/pokemon/pokemon.component';
import {CardsEffects} from './store/effects/cards.effects';
import {pokemonReducer} from './store/reducers/feature.reducers';

@NgModule({
    declarations: [PokemonListComponent, PokemonDetailComponent, PokemonsComponent, PokemonComponent],
    imports: [
        CommonModule,
        SharedModule,
        PokemonRoutingModule,
        StoreModule.forFeature('pokemon', pokemonReducer),
        EffectsModule.forFeature([CardsEffects]),
    ]
})
export class PokemonModule {
}
