import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material';
import {StoreModule} from '@ngrx/store';
import {SharedModule} from '../core/shared/shared.module';

import {PokemonRoutingModule} from './pokemon-routing.module';
import {PokemonListComponent} from './components/pokemon-list/pokemon-list.component';
import {PokemonDetailComponent} from './components/pokemon-detail/pokemon-detail.component';
import {PokemonsComponent} from './containers/pokemons/pokemons.component';
import {PokemonComponent} from './containers/pokemon/pokemon.component';
import {pokemonReducer} from './store/reducers/global.reducer';

@NgModule({
    declarations: [PokemonListComponent, PokemonDetailComponent, PokemonsComponent, PokemonComponent],
    imports: [
        CommonModule,
        SharedModule,
        PokemonRoutingModule,
        StoreModule.forFeature('pokemon', pokemonReducer),
    ]
})
export class PokemonModule {
}
