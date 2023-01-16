import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDetailComponent } from './hero-detail.component';



@NgModule({
  declarations: [
    HeroDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
  // Component linked to module must be manually exported
  // in order to be used by other components:
    HeroDetailComponent
  ]
})
export class HeroDetailModule { }
