import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailListeService {

  constructor(private http:HttpClient) { }

  getDetailesListe(id_liste: number) : Observable<object>{

    return this.http.get<object>(`http://localhost:8080/tirage/recupererTirageParIdliste/${id_liste}`);

  }

}