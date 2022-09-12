import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailTirageService } from '../detail-tirage.service';


@Component({
  selector: 'app-tirage',
  templateUrl: './tirage.component.html',
  styleUrls: ['./tirage.component.css']
})
export class TirageComponent implements OnInit{
/*
  show: boolean = true;

  changeForm(){

    this.show = !this.show;
  }
  */

  

  constructor() { }

ngOnInit(): void {


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
