import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { Observable } from 'rxjs';
import { IPokemonInfoPrincipal, IPokemons } from 'src/app/shared/interfaces/pokemons.model';
import { PokemonsService } from 'src/app/shared/services/pokemons.service';
import { PokemonInfoComponent } from './pokemon-info/pokemon-info.component';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  pokemons!: IPokemons[];

  constructor(
    private pokemonsService: PokemonsService,
    private dialogService: NbDialogService) { }

  ngOnInit() {
    this.pokemonsService.getPokemons().subscribe(pokemons => this.pokemons = pokemons);
  }

  getPokemonImageUrl(name: string): string {
    return this.pokemonsService.getPokemonImageUrl(name);
  }

  showPokemonInfo(name: string) {
    this.dialogService.open(PokemonInfoComponent, {
      context: {
        name: name
      }
    });
  }
}
