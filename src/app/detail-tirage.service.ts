import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailTirageService {

  constructor(private http:HttpClient) { }

  getListePostulanttirage() : Observable<object>{

    return this.http.get<object>("http://localhost:8080/PostulantTrie/recupererPostulant/Tirage1_liste");

  }


  getListePostulanttirageByNomTirage(nomTirageid: number) : Observable<object>{

    return this.http.get<object>(`http://localhost:8080/PostulantTrie/recupererPostulantTireid/${nomTirageid}`);

  }

  getAllTirages() : Observable<object>{
    return this.http.get<object>("http://localhost:8080/tirage/recupererTirages");
  }

  

  /*
  saveUser(data:any){
    return this.http.post("http://localhost:8080/tirage//createTirage/liste1/1", data);
  }
*/

}