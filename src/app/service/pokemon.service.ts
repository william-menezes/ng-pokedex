import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

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
    return this.http.get<NamedApiResourceList>(`${this.baseUrl}/pokemon`).pipe(
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
}
