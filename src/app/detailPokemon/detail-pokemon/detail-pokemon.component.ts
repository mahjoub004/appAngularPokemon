import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { POKEMONS } from 'src/app/mock-pokemon-list';
import { Pokemon } from 'src/app/pokemon';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css']
})
export class DetailPokemonComponent implements OnInit {

  listPokemon: Pokemon[]; // ma liste de pokemon
  pokemon: Pokemon | undefined; // pokemon courant

  constructor( private route: ActivatedRoute) { } // avec < ActivatedRoute > rendre la service route disponible dans le composent

  ngOnInit()  {
    this.listPokemon = POKEMONS; // lier la liste pokemon

      const pokemonId: string| null = this.route.snapshot.paramMap.get('id'); //recuperer l 'id dans l'URL
      if (pokemonId) {
        this.pokemon = this.listPokemon.find(pokemon => pokemon.id == +pokemonId) // comparer les deux ID de pokemon
      }else{
        this.pokemon = undefined ;
      }
  }

}
