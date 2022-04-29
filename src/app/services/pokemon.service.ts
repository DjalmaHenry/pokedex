import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private url = 'https://pokeapi.co/api/v2/pokemon';

  constructor(public httpClient: HttpClient) {}

  getPokemon(): Observable<any> {
    return this.httpClient.get<any>(this.url);
  }

  getPokemonImg(pokemon: string): Observable<any> {
    return this.httpClient.get<any>(
      `https://img.pokemondb.net/artwork/large/${pokemon}.jpg`
    );
  }
}
