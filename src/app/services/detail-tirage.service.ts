import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailTirageService {

  constructor(private http:HttpClient) { }

  getListePostulanttirageByNomTirage(tirageid: number) : Observable<object>{

    return this.http.get<object>(`http://localhost:8080/PostulantTrie/recupererPostulantid/${tirageid}`);
    
  }

  getAllTirages() : Observable<object>{
    return this.http.get<object>("http://localhost:8080/tirage/recupererTirages");
  }
}
