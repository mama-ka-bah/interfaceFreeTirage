import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailTirageService {

  constructor(private http:HttpClient) { }
  
  getListePostulanttirage() : Observable<object>{

    return this.http.get("http://localhost:8080/PostulantTrie/recupererPostulant/Tirage1_liste");

  }

}
