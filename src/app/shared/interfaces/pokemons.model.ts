export interface IPokemons {
  next: string;
  results: IResultPokemons[];
}

export interface IResultPokemons {
  name: string;
}

export interface IPokemonInfoPrincipal {
  id: number;
  name: string;
  abilities: IPokemonAbility[];
  types: IPokemonType[];
}

export interface IPokemonAbility {
  ability: {
    name: string;
  }
}

export interface IPokemonType {
  type: {
    name: string;
  }
}

export interface IPokemonInfoSecondary {
  id: number;
  name: string;
  generation: {
    name: string;
  };
  habitat: {
    name: string;
  };
  shape: {
    name: string;
  };
}
