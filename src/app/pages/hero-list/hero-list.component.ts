import { Component, Inject, ViewChild } from '@angular/core';
// Imports:
import { HeroesService } from 'src/app/services/heroes.service';
import { Observable } from 'rxjs';
import { MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort, Sort} from '@angular/material/sort';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent {

  // Service injection:
  constructor (
    private heroesService: HeroesService,
    // In strict mode, all variables must be initialized,
    // so 'heroes' is declared as public, inside the constructor
    @Inject(HeroesService) public heroes: Observable<any>, // Inject decorator is necessary for the dependency to work
    ) {}
  
  displayedColumns: string [] = ['Heroes'];
  dataSource: any = new MatTableDataSource();
  dataArray1: any = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.getHeroes();
    this.getHeroes200();
  }

  ngAfterViewInit() { 
    // This must be executed after data loads
    // in order for Paginator to work properly:
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // Method for getting a list with all Marvel heroes
  // Data is stored in 'heroes'
  getHeroes(){
    this.heroes = this.heroesService.getAllHeroes();
    this.heroes.forEach(element => this.dataSource.data = element);

    console.log("Heroes: ", this.dataSource);
    //this.heroes.forEach(element => console.log("Heroes: ",element));

    // Subscription to Observable won't be used here because
    // the 'async' pipe will be used in the HTML template

    /*
    .subscribe(
      (data) => {
        console.log("HEROES: ", data);
      },
      (error) => {
        console.log(error);
      });
    */
  }

  getHeroes200(){
    this.heroes = this.heroesService.getAllHeroes200();
    this.heroes.forEach(element => this.dataArray1.data = element);

    console.log("Heroes 2: ", this.dataArray1);
  }

  fusionarData() {
    //this.dataSource.data.push(this.dataArray1.data);
    for (let i = 0; i < this.dataArray1.data.length; i++) {
      this.dataSource.data.push(this.dataArray1.data[i]);
    }

    console.log("Heroes MIX: ", this.dataSource);
    console.log("Heroe Nro 200: ", this.dataSource.data[199]);
  }
  
  // ---------- [ TABLE SEARCH FILTER ] ----------

  filterData ($event: any){
    this.dataSource.filter = $event.target.value;
  }


}