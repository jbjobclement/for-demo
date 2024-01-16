import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForPracComponent } from './for-prac/for-prac.component';
import { GreenTitleDirective } from './shared/directives/green-title/green-title.directive';
import { DirectiveWithServicePracticeDirective } from './shared/directive-with-service-practice/directive-with-service-practice.directive';

@NgModule({
  declarations: [
    AppComponent,
    ForPracComponent,
    GreenTitleDirective,
    DirectiveWithServicePracticeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
