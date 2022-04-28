import { Type } from './type.model';
export interface Pokemon {
  image: string;
  number: number;
  name: string;
  types: Type[];
}
