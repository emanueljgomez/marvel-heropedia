import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { Test2Component } from './components/test2/test2.component';

// Manual imports:
import { HttpClientModule } from '@angular/common/http';
import { HeroesService } from './services/heroes.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [
    HttpClientModule,
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
