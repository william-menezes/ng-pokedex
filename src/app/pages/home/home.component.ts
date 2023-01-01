import { Component, OnInit, Output } from '@angular/core';
import { NamedApiResource } from 'src/app/models/named-api-resource';

import { PokemonService } from './../../service/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Output() pokemonsList: NamedApiResource[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(): void {
    this.pokemonService.getAllPokemons().subscribe(response => {
      this.pokemonsList = response.results;
    });
  }

}
