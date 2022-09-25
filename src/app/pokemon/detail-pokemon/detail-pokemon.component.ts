import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css']
})
export class DetailPokemonComponent implements OnInit {

  listPokemon: Pokemon[]; // ma liste de pokemon
  pokemon: Pokemon | undefined; // pokemon courant

  constructor( private route: ActivatedRoute ,
     private router: Router ,
     private pokemonService: PokemonService) { } // avec < ActivatedRoute > rendre la service route disponible dans le composent

  ngOnInit()  {

      const pokemonId: string| null = this.route.snapshot.paramMap.get('id'); //recuperer l 'id dans l'URL
      if (pokemonId) {
        this.pokemon = this.pokemonService.getPokemonById( +pokemonId); // comparer les deux ID de pokemon
      }else{
        this.pokemon = undefined ;
      }
  }
  goToPokemonList (){
    this.router.navigate(['/pokemons'])
  }

}
