import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPokemonInfoPrincipal, IPokemonInfoSecondary } from 'src/app/shared/interfaces/pokemons.model';
import { PokemonsService } from 'src/app/shared/services/pokemons.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  name!: string;

  pokemonInfoPrincipal!: IPokemonInfoPrincipal;
  pokemonInfoSecondary!: IPokemonInfoSecondary;

  constructor(
    private route: ActivatedRoute,
    private pokemonsService: PokemonsService,
    ) {
    this.route.params.subscribe(params => this.name = params['name']);
  }

  ngOnInit() {
    this.pokemonsService.getPokemonInfoPrincipal(this.name).subscribe(pokemonInfoPrincipal => this.pokemonInfoPrincipal = pokemonInfoPrincipal);
    this.pokemonsService.getPokemonsSecondary(this.name).subscribe(pokemonInfoSecondary => this.pokemonInfoSecondary = pokemonInfoSecondary);
  }

  getPokemonImageUrl(name: string): string {
    return this.pokemonsService.getPokemonImageUrl(name);
  }

}
