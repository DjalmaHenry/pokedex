import { Component, OnInit } from '@angular/core';
import { IPokemonInfoPrincipal, IPokemons, IResultPokemons } from 'src/app/shared/interfaces/pokemons.model';
import { PokemonsService } from 'src/app/shared/services/pokemons.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  pokemons!: IResultPokemons[];
  morePokemons!: string;

  constructor(
    private pokemonsService: PokemonsService) { }

  ngOnInit() {
    this.pokemonsService.getPokemons().subscribe(pokemons => {
      this.pokemons = pokemons.results;
      this.morePokemons = pokemons.next;
    });
  }

  getPokemonImageUrl(name: string): string {
    return this.pokemonsService.getPokemonImageUrl(name);
  }

  getMorePokemons() {
    this.pokemonsService.getMorePokemons(this.morePokemons).subscribe(pokemons => {
      this.pokemons = this.pokemons.concat(pokemons.results);
      this.morePokemons = pokemons.next;
    });
  }
}
