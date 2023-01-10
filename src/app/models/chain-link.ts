import { NamedApiResource } from 'src/app/models/named-api-resource';

import { EvolutionDetail } from './evolution-detail';

export interface ChainLink {
  is_baby: boolean;
  species: NamedApiResource;
  evolution_details: EvolutionDetail[];
  evolves_to: ChainLink[];
}
