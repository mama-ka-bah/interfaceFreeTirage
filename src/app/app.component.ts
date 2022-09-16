import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

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

  active_barre: boolean = false;
  active_trait:boolean = true;
  active_burreau:boolean = true;


  aficheMenu(): void{
   

  }

  actualise():void{
    setInterval(()=>{
    }, 1000, clearInterval(1500));
  }

  constructor(public breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.name_company = "FreeTirage";
    this.logo_company = "../../assets/logo.jpeg";
    this.contents_footer = "CopyRigth 2022 FreeTirage/bamako-Mali";
    this.title = "interfaceFreeTirage";
    this.descp_logo = "logo_free_tirage";
    this.accueil = "Accueil";
    this.tirage = "Tirage";



    this.breakpointObserver
      .observe(['(max-width: 450px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.active_burreau = false;
          this.actualise();
        } else {
          this.active_burreau = true;
          this.actualise();
        }
      });

  }

  mobile(){
    this.active_barre = true;
    this.active_trait = false;
  }
  mobile1(){
    this.active_barre = false;
    this.active_trait = true;
  }
}
