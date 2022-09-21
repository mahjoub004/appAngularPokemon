import { Injectable } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

getPokemonList(): Pokemon[]{
  return POKEMONS;
}

getPokemonById(pokemonId: number): Pokemon | undefined{
  return POKEMONS.find(pokemon => pokemonId == pokemon.id)
}

getPokemonTypeList(): string[] {
  return ['Plante', 'Feu',' Eau' , 'Insecte','Normal' , 'Electik', ' Poison' , 'Fée' , 'Combat', 'Psy']
}

}
