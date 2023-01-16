import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroListComponent } from './hero-list.component';



@NgModule({
  declarations: [
    HeroListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
  // Component linked to module must be manually exported
  // in order to be used by other components:
    HeroListComponent
  ]
})
export class HeroListModule { }
