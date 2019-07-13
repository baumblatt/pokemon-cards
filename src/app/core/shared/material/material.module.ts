import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatCardModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';

@NgModule({
    declarations: [],
    imports: [
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
    ]
})
export class MaterialModule {
}
