import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  constructor( public http: HttpClient ) { }


  getMedicos() {

    return this.http.get('...').pipe(
      map((resp:any) => resp)
    );

  }

}
