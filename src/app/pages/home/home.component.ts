import { Component, OnInit, Output } from '@angular/core';
import { NamedApiResource } from 'src/app/models/named-api-resource';

import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from './../../service/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @Output() pokemonsList: NamedApiResource[] = [];
  hasError: boolean = false;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(): void {
    this.pokemonService.getAllPokemons().subscribe((pokemonList) => {
      this.pokemonsList = pokemonList.results;
      console.log(this.pokemonsList);
    });
  }

  getPokemonByName(name: string | null) {
    if (name) {
      this.pokemonService.getPokemonByName(name).subscribe(
        (pokemon) => {
          this.pokemonsList = [];
          this.pokemonsList.push(this.transformPokemonToNamedResource(pokemon));
        },
        (error) => {
          this.hasError = true;
          setTimeout(() => {
            this.close();
          }, 4000);
        }
      );
    } else {
      if (this.pokemonsList.length == 1) {
        this.getPokemons();
      } else {
        return;
      }
    }
  }

  transformPokemonToNamedResource(pokemon: Pokemon) {
    const namedApiResource: NamedApiResource = {
      name: pokemon.name,
      url: `https://pokeapi.co/api/v2/pokemon/${pokemon.id}`,
      status: pokemon,
    };

    return namedApiResource;
  }

  close() {
    this.hasError = false;
  }
}
