import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonSpecies } from 'src/app//models/pokemon-species';
import { PokemonService } from 'src/app//service/pokemon.service';
import { EvolutionChains } from 'src/app/models/evolution-chains';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
})
export class PokemonDetailsComponent implements OnInit {
  pokemon!: Pokemon;
  pokemonSpecies!: PokemonSpecies;
  evolutionChains!: EvolutionChains;

  firstPokemonImg: string = '';
  secondPokemonImg: string = '';
  thirdPokemonImg: string = '';

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

        this.pokemonService
          .getEvolutionChain(this.pokemonSpecies.evolution_chain.url)
          .subscribe((evolutionChain: EvolutionChains) => {
            this.evolutionChains = evolutionChain;
            console.log(this.evolutionChains);

            this.pokemonService
              .getPokemonImage(this.evolutionChains.chain.species.name)
              .subscribe((img) => {
                this.firstPokemonImg = img;
                console.log(this.firstPokemonImg);
              });

            this.pokemonService
              .getPokemonImage(
                this.evolutionChains.chain.evolves_to[0].species.name
              )
              .subscribe((img) => {
                this.secondPokemonImg = img;
                console.log(this.secondPokemonImg);
              });

            this.pokemonService
              .getPokemonImage(
                this.evolutionChains.chain.evolves_to[0].evolves_to[0].species
                  .name
              )
              .subscribe((img) => {
                this.thirdPokemonImg = img;
                console.log(this.thirdPokemonImg);
              });
          });
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
