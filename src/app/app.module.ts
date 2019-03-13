import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameComponentComponent } from './game-component/game-component.component';
import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    GameComponentComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
