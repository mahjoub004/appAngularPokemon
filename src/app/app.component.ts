import { Component , OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list'
import { Pokemon } from './pokemon';
@Component({ //décorateur
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //template : `<h1> Liste de Pokémons </h1>`
})


export class AppComponent implements OnInit{
  ListPokemons : Pokemon[] = POKEMONS;

  pokemonSelected: Pokemon| undefined ;

  ngOnInit(): void { // methode lancer au moment  de chargement de la page
    console.table(this.ListPokemons);
    //this.selectPokemon(this.ListPokemons[1])
  }

  selectPokemon(pokemonId: string){
    const pokemon: Pokemon| undefined = this.ListPokemons
    .find(pokemon => pokemon.id == +pokemonId)
    if (pokemon) {
      console.
      log(`vous avez cliqué sur le pokemon ${pokemon.name}`); // backtick
      this.pokemonSelected = pokemon ;
    }else{
      console.
      log(`vous avez demander un pokemon qui n'existe pas`);
      this.pokemonSelected = pokemon ;
    }


  }
}
