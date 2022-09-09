import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit{

  text_accueil!: string;
  libelle_liste!: string;
  total_liste_tire!: number;
  total_tirage!: number;
  nombre_tirage!: number;

  ngOnInit(): void {

    this.text_accueil = "Bienvenue sur votre plateforme de tirage au sort";
    this.libelle_liste = "Listes postulant tirés";
    this.total_liste_tire = 5;
    this.total_tirage = 10;
    this.nombre_tirage = 22;

  }

 
}
