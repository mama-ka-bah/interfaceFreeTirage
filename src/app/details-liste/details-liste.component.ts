import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DetailListeService } from '../services/detail-liste.service';


@Component({
  selector: 'app-details-liste',
  templateUrl: './details-liste.component.html',
  styleUrls: ['./details-liste.component.css']
})
export class DetailsListeComponent implements OnInit {


  //tirages$!: Observable<any>;

  detailslistes$!: Observable<any>;

  searchText:any;
  p:any;

  liste:any;
  libelle:any;
  date:any;


  

  constructor(private service : DetailListeService,
    
    private route: ActivatedRoute


    ) { }
    

  ngOnInit(): void {

    const id_liste = +this.route.snapshot.params["id_liste"];

   this.detailslistes$ = this.service.getDetailesListe(id_liste);
   //this.libelleListe = this.detailslistes$.idliste.id;

   this.service.getListe(id_liste).subscribe(data=>{
    this.liste=data;
    this.libelle = this.liste.libelle;
    this.date = this.liste.date_liste;
  })

  }

}
