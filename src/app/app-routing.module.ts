import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPokemonComponent } from './detailPokemon/detail-pokemon/detail-pokemon.component';
import { ListPokemonComponent } from './listPokemon/list-pokemon/list-pokemon.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [

{ path: 'pokemons' , component: ListPokemonComponent},
{ path: 'pokemons/:id' , component: DetailPokemonComponent},
{ path: '' , redirectTo:'pokemons' , pathMatch:'full'},
{path: '**', component: PageNotFoundComponent } // récupere toute les URL qui ne fonctionne pas

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
