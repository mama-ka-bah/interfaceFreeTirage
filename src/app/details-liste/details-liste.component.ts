import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DetailTirageService } from '../detail-tirage.service';

@Component({
  selector: 'app-details-liste',
  templateUrl: './details-liste.component.html',
  styleUrls: ['./details-liste.component.css']
})
export class DetailsListeComponent implements OnInit {


  tirages$!: Observable<any>;

  

  constructor(private service : DetailTirageService,
    
    private route: ActivatedRoute


    ) { }

  ngOnInit(): void {

    this.tirages$ = this.service.getAllTirages();
  }

}
