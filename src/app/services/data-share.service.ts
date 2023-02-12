import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  private _dataStream = new BehaviorSubject("");

  getDataStream(){
    return this._dataStream.asObservable();
  }

  putDataToStream(data: any){
    this._dataStream.next(data);
  }

}
