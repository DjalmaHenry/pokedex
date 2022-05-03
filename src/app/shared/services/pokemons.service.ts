import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPokemonInfoPrincipal, IPokemonInfoSecondary, IPokemons } from '../interfaces/pokemons.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(
    private http: HttpClient,
  ) { }

  public getPokemons(): Observable<IPokemons[]> {
    return this.http.get<IPokemons[]>('https://pokeapi.co/api/v2/pokemon/?limit=151');
  }

  public getPokemonInfoPrincipal(name: string): Observable<IPokemonInfoPrincipal> {
    return this.http.get<IPokemonInfoPrincipal>(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }

  public getPokemonsSecondary(name: string): Observable<IPokemonInfoSecondary> {
    return this.http.get<IPokemonInfoSecondary>(`https://pokeapi.co/api/v2/pokemon-species/${name}`);
  }

  public getPokemonImageUrl(name: string): string {
    return `https://img.pokemondb.net/artwork/large/${name}.jpg`;
  }

}
