import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TieFighterComponent } from './tie-fighter/tie-fighter.component';
import { InternalDefensesModule } from './internal-defenses/internal-defenses.module';
import { InfoWindowComponent } from './info-window/info-window.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TieFighterComponent,
    InfoWindowComponent
  ],
  imports: [
    BrowserModule,
    InternalDefensesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
