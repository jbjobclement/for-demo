import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForPracComponent } from './for-prac/for-prac.component';
import { GreenTitleDirective } from './shared/directives/green-title/green-title.directive';

@NgModule({
  declarations: [
    AppComponent,
    ForPracComponent,
    GreenTitleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
