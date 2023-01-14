import { Component, Inject } from '@angular/core';
// Service imports:
import { HeroesService } from 'src/app/services/heroes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component {

  // Service injection:
  constructor (
    private heroesService: HeroesService,
    // In strict mode, all variables must be initialized,
    // so 'heroes' is declared as public, inside the constructor
    @Inject(HeroesService) public heroes: any, // Inject decorator is necessary for the dependency to work
    ) {}

  ngOnInit() {
    this.getHeroes();
  }

  // Method for getting a list with all Marvel heroes
  // Data is stored in 'heroes'
  getHeroes(){
    this.heroes = this.heroesService.getAllHeroes();
    // Subscription to Observable won't be used here because
    // the 'async' pipe will be used in the HTML template
    console.log("Result:", this.heroes);
  }

}
