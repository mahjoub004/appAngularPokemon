import { Component , OnInit } from '@angular/core';

@Component({ //décorateur
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template : `<h1> Welcome to {{title}}</h1>`
})


export class AppComponent implements OnInit{
  title = ['fred' , 'monique' , 'rudy'];

  ngOnInit(): void {

    console.table(this.title);

    this.selectPokemon(this.title[2])
  }

  selectPokemon(pokemonName: string){
    console.log(`vous avez cliqué sur le pokemon ${pokemonName}`); // backtick

  }
}
