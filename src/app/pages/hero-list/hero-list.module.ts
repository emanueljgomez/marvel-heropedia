import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroListComponent } from './hero-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    HeroListComponent
  ],
  imports: [
    CommonModule,
    // ---------------------------------
    // Required Angular Material modules:
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule
    // ---------------------------------
  ],
  exports: [
  // Component linked to module must be manually exported
  // in order to be used by other components:
    HeroListComponent
  ]
})
export class HeroListModule { }
