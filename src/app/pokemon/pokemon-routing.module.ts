import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PokemonComponent} from './containers/pokemon/pokemon.component';
import {PokemonsComponent} from './containers/pokemons/pokemons.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'pokemons'},
  {path: 'pokemons', component: PokemonsComponent},
  {path: 'pokemon', component: PokemonComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
