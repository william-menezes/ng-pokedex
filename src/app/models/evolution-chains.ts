import { NamedApiResource } from 'src/app/models/named-api-resource';

import { ChainLink } from './chain-link';

export interface EvolutionChains {
  id: number;
  baby_trigger_item: NamedApiResource;
  chain: ChainLink;
}
