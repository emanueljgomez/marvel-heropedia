import { Component, Inject, ViewChild } from '@angular/core';
// Imports:
import { HeroesService } from 'src/app/services/heroes.service';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DataShareService } from 'src/app/services/data-share.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent {

  // Service injection:
  constructor (
    private dataShareService : DataShareService,
    private router: Router,
    private heroesService: HeroesService,
    // In strict mode, all variables must be initialized,
    // so 'heroes' is declared as public, inside the constructor
    @Inject(HeroesService) public heroes: Observable<any>, // Inject decorator is necessary for the dependency to work
    ) {}

  // Calculating total amount of required data arrays:
  //totalHeroes = 2708;
  //splitHeroes = 2708 / 100;
  //totalArrays = Math.round(this.splitHeroes); // +1
  //maxOffsetIndex = 1500;
  //totalArrays = (this.maxOffsetIndex / 100) + 1;
  //x = 0;

  tome_n: any;
  tableHeader: any;
  offsetArray = [];
  romanArray = [ 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI' ];
  lettersArray = [ 'A-B', 'B-C', 'C-D', 'D-E', 'E-G', 'G-I', 'I-L', 'L-M', 'M', 'M-P', 'P-R', 'R-S', 'S', 'S-T', 'T-W', 'W-Z' ];
  
  // Data variables for Material Table:
  displayedColumns: string [] = ['Heroes'];
  
  // =========================================================
  // ==================== [ DATASOURCE ] ====================
  // =========================================================

  dataSource: any = new MatTableDataSource();
  
  //auxDataSource: any = new MatTableDataSource();
  //dataArray = []; // This array contains all Data Sources from consecutive API calls

  // Variables for URL generation:
  PUBLIC_KEY = 'ddbe649e8f64b8a35ba2a6203c2e9b86';
  // HASH is generated by passing this string combination: 1 + Private Key + Public Key
  // through a MD5 Hash Generator ( https://letmegooglethat.com/?q=MD5+hash+generator )
  // The Public and Private Keys are provided by the API ( https://developer.marvel.com/ )
  HASH = '1c820bbadd4cd42eb3139d95fe35aa64';  
  //OFFSET = 0; // URL parameter: controls the amount of elements skipped per call
  INDEX = 0; // Index for dataArray
  /*
  URL_API = `https:gateway.marvel.com/v1/public/characters?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}&offset=${this.OFFSET}&limit=100`; // '&limit=100' controls amount of elements returned (max 100 per call)
  //URL_API_2 = `https:gateway.marvel.com/v1/public/characters?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}&offset=100&limit=100`; <--- OUT OF USE
  */

  // Additional Mat Table functionalities:
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  // ------------------------------------------------------------
  // ============================================================
  // ------------------------------------------------------------

  ngOnInit() {
    //this.initializeDataArray();
    this.getHeroes(0, 0);
    //this.getHeroes200();
    //this.dataSourceSetup();
  }

  ngAfterViewInit() { 
    // This must be executed after data loads
    // in order for Paginator to work properly:
    //this.getHeroes(); ---- Comentado porque: getHeroes va a ser llamado desde botones en el HTML
    this.dataSourceSetup();
    this.offsetArraySetup();
  }

  /*
  initializeDataArray() {
    for (let i = 0; i < this.totalArrays; ++i) {
      this.dataArray[i] = new MatTableDataSource();
    }
  } */


  // Method for getting a list with all Marvel heroes
  // Data is stored in 'heroes'
  getHeroes(offsetValue: any, index: any) {  // offsetValue un nro de 100 en 100, empezando en 0 y hasta 1500

    this.checkTomeNumber(offsetValue);

  //this.initializeDataArray();
  //for (let i = 0; i < this.totalArrays; i+100) {    
    let URL_API = `https:gateway.marvel.com/v1/public/characters?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}&offset=${offsetValue}&limit=100`; // 1500 max admitted offset (retrieves all heroes until the Z) -- ${this.OFFSET}
    //console.log("URL: ", URL_API)

    this.heroes = this.heroesService.getAllHeroes(URL_API);  // Subscription to Observable is not necessary, RxJS manages subscription
    this.heroes.forEach(element => this.dataSource.data = element);
    //console.log("Characters: ", this.dataSource); 
    
    this.tableHeader = this.lettersArray[index];

  }

  public publishCharacterId(id) {
    this.dataShareService.putDataToStream(id);
    this.router.navigate(['/hero-detail']);
  }
  
  // ---------- [ TABLE SEARCH FILTER ] ----------

  filterData ($event: any){
    this.dataSource.filter = $event.target.value; // Tarea: ver si le puedo pasar el dataSource a la funcion
  }

  // =========================================================
  // ================= [ HELPER FUNCTIONS ] ==================
  // =========================================================

  dataSourceSetup() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  offsetArraySetup() {

    let offset = 0;

    for (let i = 0; i < 16; i++)
    {
      this.offsetArray[i] = offset;
      offset = offset +100;
      //console.log("this.offsetArray - Index: ",i , " - Value: ", this.offsetArray[i]);
    }
  }

  checkTomeNumber(n) {

    switch (n) {

      case 0: this.tome_n = 'I';
        break;
      case 100: this.tome_n = 'II';
        break;
      case 200: this.tome_n = 'III';
        break;
      case 300: this.tome_n = 'IV';
        break;
      case 400: this.tome_n = 'V';
        break;
      case 500: this.tome_n = 'VI';
        break;
      case 600: this.tome_n = 'VII';
        break;
      case 700: this.tome_n = 'VIII';
        break;
      case 800: this.tome_n = 'IX';
        break;
      case 900: this.tome_n = 'X'
        break;
      case 1000: this.tome_n = 'XI';
        break;
      case 1100: this.tome_n = 'XII';
        break;
      case 1200: this.tome_n = 'XIII';
        break;
      case 1300: this.tome_n = 'XIV';
        break;
      case 1400: this.tome_n = 'XV';
        break;
      case 1500: this.tome_n = 'XVI';
        break;

    }

  }

}