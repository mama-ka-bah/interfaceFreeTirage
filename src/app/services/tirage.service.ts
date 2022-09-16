import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tirage } from '../models/tirage';
import { Observable } from 'rxjs';
import { text } from '@fortawesome/fontawesome-svg-core';

@Injectable({
  providedIn: 'root'
})
export class TirageService {

  tir:any;
  private userUrl!: string;

  constructor(private http: HttpClient) { 
   // this.userUrl = `http://localhost:8080/tirage/createTirage/${liste_liste}/${nbre}`;
  }

  posttirage(libelle_liste: string, tirage: Tirage){
    return this.http.post<Tirage>(`http://localhost:8080/tirage/createTirage/${libelle_liste}`, tirage);
  }
  addListe(libelle:string,file:any):Observable<void>{

    let data =new FormData();
    data.append("file",file)
    return this.http.post<void>(`http://localhost:8080/postulant/import/excel/${libelle}`,data);
  }
  
  getNombeTirage():Observable<object>{
    return this.http.get(`http://localhost:8080/tirage/nombretirages`);
  }




  postImportTrie(libelle:string,file:any,tirage:any):Observable<void>{
    console.log(libelle)
    let data =new FormData();
    this.tir ={
      "libellet":tirage.libellet,
      "nbre":tirage.nombre
    }

    data.append("file",file)
   

    return this.http.post<void>(`http://localhost:8080/importTrie/import/excel/${libelle}/${tirage.libellet}/${tirage.nombre}`,data);
  }

}
