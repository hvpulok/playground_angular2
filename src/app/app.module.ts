import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HighlighterDirective } from './shared/directives/highlighter/highlighter.directive';
import { Game1Component } from './features/game-1/game-1.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlighterDirective,
    Game1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
