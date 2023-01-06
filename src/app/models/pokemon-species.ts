import { NamedApiResource } from './named-api-resource';
export interface PokemonSpecies {
  id: number;
  name: string;
  order: number;
  gender_rate: number;
  capture_rate: number;
  base_happiness: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  hatch_counter: number;
  has_gender_differences: boolean;
  forms_switchable: boolean;
  growth_rate: NamedApiResource; //GrowthRate
  pokedex_numbers: any; //PokemonSpeciesDexEntry[]
  egg_groups: NamedApiResource[]; //EggGroup
  color: NamedApiResource; //PokemonColor
  shape: NamedApiResource; //PokemonShape
  evolves_from_species: NamedApiResource; //PokemonSpecies
  evolution_chain: any;
  habitat: NamedApiResource; //PokemonHabitat
  generation: NamedApiResource; //Generation
  names: any; //Name[]
  pal_park_encounters: any; //PalParkEncounterArea[]
  flavor_text_entries: any; //FlavorText[]
  form_descriptions: any; //Description[]
  genera: any; //Genus[]
  varieties: any; //PokemonSpeciesVariety[]
}
