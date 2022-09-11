import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tirage',
  templateUrl: './tirage.component.html',
  styleUrls: ['./tirage.component.css']
})
export class TirageComponent{
/*
  show: boolean = true;

  changeForm(){

    this.show = !this.show;
  }
  */

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
