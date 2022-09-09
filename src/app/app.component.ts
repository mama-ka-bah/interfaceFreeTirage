import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title!: string;
  name_company!: string;
  logo_company!: string;
  descp_logo!: string;
  accueil!: string;
  tirage!: string;
  contents_footer!: string;


  ngOnInit(): void {
    this.name_company = "FreeTirage";
    this.logo_company = "../../assets/logo.jpeg";
    this.contents_footer = "CopyRigth 2022 FreeTirage/bamako-Mali";
    this.title = "interfaceFreeTirage";
    this.descp_logo = "logo_free_tirage";
    this.accueil = "Accueil";
    this.tirage = "Tirage";

  }
}
