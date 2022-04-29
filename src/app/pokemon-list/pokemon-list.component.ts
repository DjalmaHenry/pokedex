import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';
import { PokemonService } from './../services/pokemon.service';
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  public pokemons!: Pokemon[];

  teste: any;

  constructor(public pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService
      .getPokemon()
      .pipe(map((value) => value.results))
      .subscribe((r) => {
        this.pokemons = r;
      });

    console.log('img:  ' + this.pokemonService.getPokemonImg('pikachu'));
  }
}
