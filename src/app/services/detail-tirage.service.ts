import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailTirageService {

  constructor(private http:HttpClient) { }

<<<<<<< HEAD
    return this.http.get("http://localhost:8080/PostulantTrie/recupererPostulant/Tirage1_liste");
=======

  getListePostulanttirageByNomTirage(tirageid: number) : Observable<object>{

    return this.http.get<object>(`http://localhost:8080/PostulantTrie/recupererPostulantid/${tirageid}`);
>>>>>>> 69ab7aa5f7e170ac4b02c117c0a73e3ffbd77972

  }

  getAllTirages() : Observable<object>{
    return this.http.get<object>("http://localhost:8080/tirage/recupererTirages");
  }


}
