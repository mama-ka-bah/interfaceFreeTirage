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

  libellTirage:any;
  date:any;
  tirage:any;

  searchText:any;
  p:any;



  constructor(private service : DetailTirageService,

      private route: ActivatedRoute

    ) { }

  

  ngOnInit(): void {

   const tirageid = +this.route.snapshot.params["id"];

   this.detailTirage$ = this.service.getListePostulanttirageByNomTirage(tirageid);

   this.service.getTirage(tirageid).subscribe(data=>{

    this.tirage=data;
    this.libellTirage = this.tirage.libellet;
    this.date = this.tirage.date;

  })



  }

  

}
