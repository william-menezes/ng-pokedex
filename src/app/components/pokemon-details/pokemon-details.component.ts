import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon';

import { PokemonSpecies } from './../../models/pokemon-species';
import { PokemonService } from './../../service/pokemon.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
})
export class PokemonDetailsComponent implements OnInit {
  pokemon!: Pokemon;
  pokemonSpecies!: PokemonSpecies;
  liked: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name') || '';

    this.pokemonService.getPokemonByName(name).subscribe((pokemon: Pokemon) => {
      this.pokemon = pokemon;
      console.log(this.pokemon);
    });

    this.pokemonService
      .getPokemonSpecies(name)
      .subscribe((specie: PokemonSpecies) => {
        this.pokemonSpecies = specie;
        console.log(this.pokemonSpecies);
      });
  }

  comeBack(): void {
    this.router.navigate(['/']);
  }

  like(): void {
    this.liked = !this.liked;
    console.log('Like');
  }
}
