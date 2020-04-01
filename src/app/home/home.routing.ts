import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {NgModule} from '@angular/core';

export const ABOUT_PAGE_ROUTES: Routes = [
    {
        path: '', component: HomeComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(ABOUT_PAGE_ROUTES)
    ],
    exports: [
        RouterModule
    ]
})

export class HomeRouting {
}
