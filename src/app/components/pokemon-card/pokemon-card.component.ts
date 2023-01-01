import { Component, Input, OnInit } from '@angular/core';

import { NamedApiResource } from './../../models/named-api-resource';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  @Input() pokemons: NamedApiResource[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
