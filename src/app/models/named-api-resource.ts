import { Pokemon } from './pokemon';
export interface NamedApiResource {
  name: string;
  url: string;
  status: Pokemon;
}
