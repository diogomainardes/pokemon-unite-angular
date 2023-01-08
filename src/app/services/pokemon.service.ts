import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  urlApi: string = 'https://6283929f92a6a5e462260498.mockapi.io/pokemon/';

  constructor(private http: HttpClient) {}

  getList(filter?: any): Observable<any[]> {
    return this.http.get<any[]>(this.urlApi, { params: filter });
  }

  getDetails(uri: string): Observable<any[]> {
    return this.http.get<any[]>(this.urlApi + uri);
  }
}
