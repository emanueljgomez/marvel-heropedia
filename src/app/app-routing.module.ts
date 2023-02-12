import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroDetailComponent } from './pages/hero-detail/hero-detail.component';
import { HeroListComponent } from './pages/hero-list/hero-list.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'hero-list',
    pathMatch: 'full'
  },

  {
    path: 'hero-list',
    component: HeroListComponent
  },

  {
    path: 'hero-detail',
    component: HeroDetailComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
