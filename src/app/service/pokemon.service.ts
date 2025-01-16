import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { EvolutionChains } from '../models/evolution-chains';
import { NamedApiResource } from '../models/named-api-resource';
import { Pokemon } from '../models/pokemon';
import { PokemonSpecies } from '../models/pokemon-species';
import { NamedApiResourceList } from './../models/named-api-resource-list';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  readonly baseUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getAllPokemons(): Observable<NamedApiResourceList> {
    return this.http.get<NamedApiResourceList>(`${this.baseUrl}/pokemon?limit=300&offset=0`).pipe(
      tap((response: NamedApiResourceList) => response),
      tap((response) => {
        response.results.map((data: NamedApiResource) => {
          this.getPokemonByName(data.name).subscribe(
            (res) => (data.status = res)
          );
        });
      })
    );
  }

  getPokemonByName(name: string): Observable<Pokemon> {
    return this.http
      .get<Pokemon>(`${this.baseUrl}/pokemon/${name}`)
      .pipe(map((res) => res));
  }

  getPokemonSpecies(name: string): Observable<PokemonSpecies> {
    return this.http
      .get<PokemonSpecies>(`${this.baseUrl}/pokemon-species/${name}`)
      .pipe(map((res) => res));
  }

  getEvolutionChain(url: string): Observable<EvolutionChains> {
    return this.http.get<EvolutionChains>(url).pipe(map((res) => res));
  }

  getPokemonImage(name: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/pokemon/${name}`).pipe(
      tap((response) => response),
      map(
        (response) =>
          (response = response.sprites.other['official-artwork'].front_default)
      )
    );
  }
}
