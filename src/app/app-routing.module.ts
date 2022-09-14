import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { DetailTirageComponent } from './detail-tirage/detail-tirage.component';
import { DetailsListeComponent } from './details-liste/details-liste.component';
import { TirageComponent } from './tirage/tirage.component';

const routes: Routes = [

  {
    path:'',
    redirectTo:"/accueil",
    pathMatch:"full"
  },

  { path:'accueil',component:AccueilComponent }, 
  { path:'detailsliste/:id_liste',component:DetailsListeComponent }, 
  { path:'tirage',component:TirageComponent }, 
  { path:'detailtirage/:id',component:DetailTirageComponent }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
