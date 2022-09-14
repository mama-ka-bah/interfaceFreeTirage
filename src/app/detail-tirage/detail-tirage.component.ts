import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DetailTirageService } from '../services/detail-tirage.service';

@Component({
  selector: 'app-detail-tirage',
  templateUrl: './detail-tirage.component.html',
  styleUrls: ['./detail-tirage.component.css']
})

export class DetailTirageComponent implements OnInit {

  detailTirage!: object;

  detailTirage$!: Observable<any>;



  constructor(private service : DetailTirageService,

      private route: ActivatedRoute

    ) { }

  

  ngOnInit(): void {

   const tirageid = +this.route.snapshot.params["id"];

   this.detailTirage$ = this.service.getListePostulanttirageByNomTirage(tirageid);
  }

  
 

}
