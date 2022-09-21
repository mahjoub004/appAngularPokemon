import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { POKEMONS } from 'src/app/mock-pokemon-list';
import { Pokemon } from 'src/app/pokemon';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
})
export class ListPokemonComponent  {

  ListPokemons : Pokemon[] = POKEMONS;

  constructor(private router: Router){}

  goToPokemon(pokemon: Pokemon){
    console.log(pokemon);
    this.router.navigate(['/pokemons/', pokemon.id])
  }

}
