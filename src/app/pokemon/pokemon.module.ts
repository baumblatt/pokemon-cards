import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../core/shared/shared.module';

import {PokemonRoutingModule} from './pokemon-routing.module';
import {PokemonListComponent} from './components/pokemon-list/pokemon-list.component';
import {PokemonDetailComponent} from './components/pokemon-detail/pokemon-detail.component';
import {PokemonsComponent} from './containers/pokemons/pokemons.component';
import {PokemonComponent} from './containers/pokemon/pokemon.component';

@NgModule({
    declarations: [PokemonListComponent, PokemonDetailComponent, PokemonsComponent, PokemonComponent],
    imports: [
        CommonModule,
        SharedModule,
        PokemonRoutingModule
    ]
})
export class PokemonModule {
}
