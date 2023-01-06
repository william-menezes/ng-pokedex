import { PokemonSpecies } from './pokemon-species';
import { PokemonAbility } from './pokemon-ability';
export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: any;
  is_default: boolean;
  order: number;
  weight: any;
  abilities: PokemonAbility[];
  forms: any;
  game_indices: any;
  held_items: any;
  location_area_encounters: string;
  moves: any;
  past_types: any;
  sprites: any;
  species: PokemonSpecies;
  stats: any;
  types: any;
}
