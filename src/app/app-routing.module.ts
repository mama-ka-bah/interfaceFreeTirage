import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { DetailsListeComponent } from './details-liste/details-liste.component';

const routes: Routes = [

  {
    path:'',
    redirectTo:"/accueil",
    pathMatch:"full"
  },
  { path:'accueil',component:AccueilComponent }, 
  { path:'detailsl',component:DetailsListeComponent }, 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
