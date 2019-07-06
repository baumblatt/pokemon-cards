import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PokemonDetailComponent} from './containers/pokemon-detail/pokemon-detail.component';
import {PokemonListComponent} from './containers/pokemon-list/pokemon-list.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'list'},
  {path: 'list', component: PokemonListComponent},
  {path: 'detail', component: PokemonDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
