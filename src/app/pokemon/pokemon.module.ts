import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './listPokemon/list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { RouterModule, Routes } from '@angular/router';
import { PokemonService } from './pokemon.service';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';

const pokemonRoutes: Routes = [

  { path: 'pokemons' , component: ListPokemonComponent},
  { path: 'pokemons/:id' , component: DetailPokemonComponent},


  ];

@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    PokemonFormComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(pokemonRoutes) // forChild pour les routes fis
  ],
  providers:[PokemonService] // injecter un service au niveau de module
})
export class PokemonModule { }
