import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  readonly baseUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  getAllPokemons(): Observable<any> {
    return this.http.get<any>(this.baseUrl).pipe(
      tap((response: any) => response),
      tap((response) => {
        response.results.map((data: any) => {
          this.getPokemonByName(data.name).subscribe(
            (res) => (data.status = res)
          );
        });
      })
    );
  }

  getPokemonByName(name: string): Observable<any> {
    return this.http.get<any>(`{this.baseUrl}/${name}`);
  }
}
