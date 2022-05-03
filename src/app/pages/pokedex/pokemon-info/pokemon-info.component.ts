import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { IPokemonInfoPrincipal, IPokemonInfoSecondary } from 'src/app/shared/interfaces/pokemons.model';
import { PokemonsService } from 'src/app/shared/services/pokemons.service';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.scss']
})
export class PokemonInfoComponent implements OnInit {

  @Input() name!: string;

  pokemonInfoPrincipal!: IPokemonInfoPrincipal;
  pokemonInfoSecondary!: IPokemonInfoSecondary;

  constructor(
    protected dialogRef: NbDialogRef<PokemonInfoComponent>,
    private pokemonsService: PokemonsService
    ) { }

  ngOnInit() {
    this.pokemonsService.getPokemonInfoPrincipal(this.name).subscribe(pokemonInfoPrincipal => this.pokemonInfoPrincipal = pokemonInfoPrincipal);
    this.pokemonsService.getPokemonsSecondary(this.name).subscribe(pokemonInfoSecondary => this.pokemonInfoSecondary = pokemonInfoSecondary);
  }

}
