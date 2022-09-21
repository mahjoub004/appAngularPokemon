import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
{ path: '' , redirectTo:'pokemons' , pathMatch:'full'},
{path: '**', component: PageNotFoundComponent } // récupere toute les URL qui ne fonctionne pas

];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //gorRoot pour les routes globale
  exports: [RouterModule]
})
export class AppRoutingModule { }
