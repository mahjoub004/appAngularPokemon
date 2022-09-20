import { Component, OnInit } from '@angular/core';
import { POKEMONS } from 'src/app/mock-pokemon-list';
import { Pokemon } from 'src/app/pokemon';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
})
export class ListPokemonComponent  {

  ListPokemons : Pokemon[] = POKEMONS;

}
