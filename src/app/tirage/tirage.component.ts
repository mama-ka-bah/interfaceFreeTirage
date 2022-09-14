import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Fichier, Tirage } from '../models/tirage';
import { DetailTirageService } from '../services/detail-tirage.service';
import { TirageService } from '../services/tirage.service';


@Component({
  selector: 'app-tirage',
  templateUrl: './tirage.component.html',
  styleUrls: ['./tirage.component.css']
})

export class TirageComponent implements OnInit{

  tirageobjet: Tirage = {

    id:  0,
    date: new Date(),
    libellet: '', 
    nbre: 0

  }

  //les attributs qui sont utiliseés pur recuperer les valeurs des chaamps
    id: number = 0;
    date!: Date;
    libellet: string = ''
    libelleListe: string = ''
    nbre: number = 0;

    formmodule!:FormGroup;
    file:any;
    fichier!:Fichier;
  

  constructor(private serviceTirage: TirageService,private formB:FormBuilder) { }

ngOnInit(): void {
   
  this.formmodule=this.formB.group({
      libelle:["",Validators.required],
      file:["",Validators.required],
    })

}
fileChange(e:any){
  this.file=e.target["files"][0]

}

importerliste(){
  this.fichier=this.formmodule.value
  this.serviceTirage.addListe(this.fichier.libelle,this.file).subscribe(data=>{
    this.formmodule.reset()
  })

}

//on vide le formulaire
resetForm(){

  this.libelleListe = '';

  this.libellet = '';

  this.nbre = 0;

}

postTirage(){

  //on recupere la valeur actuelle dans le champ libelle tirage  dans le formulaire
  this.tirageobjet.libellet = this.libellet; 

   // on recupere le nombre à tirer actuelle dans le formulaire
  this.tirageobjet.nbre = this.nbre;

  // on renvoie l'objet tirage et parametre libelle liste à la methode declaré dans la service et qui est chargée de poster les donnée
  this.serviceTirage.posttirage(this.libelleListe, this.tirageobjet).subscribe()

  //on renitialise le formulaire
  this.resetForm();
}



  tirage: boolean = true;

  import: boolean = false;

  tirage_import: boolean = false;

  activetirage(){

     this.tirage = true;

     this.import = false;

     this.tirage_import = false;
  }

  activeimport(){

    this.import = true;

    this.tirage = false;

    this.tirage_import = false;
  }

  activeimport_tirage(){

    this.tirage_import = true;

    this.import = false;

    this.tirage = false;
  }

  

}
