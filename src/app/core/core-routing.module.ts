import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './containers/home/home.component';
import {LayoutComponent} from './containers/layout/layout.component';

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'layout'},
    {path: 'layout', component: LayoutComponent, children: [
        {path: '', pathMatch: 'full', redirectTo: 'home'},
        {path: 'home', component: HomeComponent},
        {path: 'pokemon', loadChildren:
                    () => import('../pokemon/pokemon.module').then(mod => mod.PokemonModule)}
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoreRoutingModule {
}
