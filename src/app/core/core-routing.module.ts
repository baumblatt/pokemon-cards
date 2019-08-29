import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './containers/home/home.component';
import {LayoutComponent} from './containers/layout/layout.component';
import {LoginComponent} from './containers/login/login.component';
import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'layout'},
    {path: 'layout', component: LayoutComponent, children: [
        {path: '', pathMatch: 'full', redirectTo: 'home'},
        {path: 'home', component: HomeComponent},
            {path: 'login', component: LoginComponent},
            {
                path: 'pokemon',
                canActivate: [AuthGuard],
                canLoad: [AuthGuard],
                loadChildren: () => import('../pokemon/pokemon.module').then(mod => mod.PokemonModule)
            }
    ]},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoreRoutingModule {
}
