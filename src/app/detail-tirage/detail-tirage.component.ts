import { Component, OnInit } from '@angular/core';
import { DetailTirageService } from '../detail-tirage.service';

@Component({
  selector: 'app-detail-tirage',
  templateUrl: './detail-tirage.component.html',
  styleUrls: ['./detail-tirage.component.css']
})

export class DetailTirageComponent implements OnInit {

  listePostulanttirage: any;


  constructor(private service : DetailTirageService) { }

  

  ngOnInit(): void {
    this.service.getListePostulanttirage().subscribe(data=>{
      this.listePostulanttirage=data;
    })
  }

}
