import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { TirageComponent } from './tirage/tirage.component';
import { DetailsListeComponent } from './details-liste/details-liste.component';
import { DetailTirageComponent } from './detail-tirage/detail-tirage.component';
/*import { TirageInterfaceComponent } from './tirage-interface/tirage-interface.component';*/


import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';  
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    TirageComponent,
    DetailsListeComponent,
    DetailTirageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(library: FaIconLibrary) {
    library.addIcons(fasStar, farStar);
  }

 }
