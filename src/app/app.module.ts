import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Manual imports:
import { HttpClientModule } from '@angular/common/http';
import { HeroesService } from './services/heroes.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroListModule } from './pages/hero-list/hero-list.module';
import { HeroDetailModule } from './pages/hero-detail/hero-detail.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeroListModule,
    HeroDetailModule
  ],
  providers: [
    HttpClientModule,
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
