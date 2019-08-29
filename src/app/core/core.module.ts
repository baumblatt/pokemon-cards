import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {HomeComponent} from './containers/home/home.component';
import {LayoutComponent} from './containers/layout/layout.component';
import {LoginComponent} from './containers/login/login.component';

import {CoreRoutingModule} from './core-routing.module';
import {AuthGuard} from './guards/auth.guard';
import {SharedModule} from './shared/shared.module';
import {AuthEffects} from './store/effects/auth.effects';
import {CoreEffects} from './store/effects/core.effects';
import {reducers} from './store/reducers/feature.reducers';

@NgModule({
    declarations: [LayoutComponent, HomeComponent, LoginComponent],
    imports: [
        CommonModule,
        CoreRoutingModule,
        SharedModule,
        EffectsModule.forFeature([CoreEffects, AuthEffects]),
        StoreModule.forFeature('core', reducers),
    ],
    providers: [AuthGuard]
})
export class CoreModule {
}
