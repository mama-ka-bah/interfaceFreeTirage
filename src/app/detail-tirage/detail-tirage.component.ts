import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DetailTirage } from '../detail-tirage';
import { DetailTirageService } from '../detail-tirage.service';

@Component({
  selector: 'app-detail-tirage',
  templateUrl: './detail-tirage.component.html',
  styleUrls: ['./detail-tirage.component.css']
})

export class DetailTirageComponent implements OnInit {

  listePostulanttirage: any


  detailTirage!: object;

  detailTirage$!: Observable<any>;



  constructor(private service : DetailTirageService,

      private route: ActivatedRoute

    ) { }

  

  ngOnInit(): void {
    /*
    this.service.getListePostulanttirage().subscribe(data=>{
      this.listePostulanttirage=data;
    });
    */
   this.detailTirage$ = this.service.getListePostulanttirage();

   const nomTirageid = +this.route.snapshot.params["id"];

   this.detailTirage$ = this.service.getListePostulanttirageByNomTirage(nomTirageid);
  }

  
 

}
