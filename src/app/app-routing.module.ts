import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { InfoWindowComponent } from './info-window/info-window.component';

const routes: Routes = [
    {       
        path: 'info',
        component: InfoWindowComponent
    }
];    

@NgModule({
    imports: [
        // BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{
}