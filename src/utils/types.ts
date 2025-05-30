export interface InitialPokemonsType {
  origPokemonData: OrigPokemonsDataType | undefined;
  customPokemonData: CustomPokemonDataType[] | undefined;
}

export interface OrigPokemonsDataType {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonsResultType[];
  pokemon: any;
}

export interface PokemonsResultType {
  name: string;
  url: string;
}

export interface CustomPokemonDataType {
  name: string;
  id: number;
  image: string | null;
  types: PokemonTypeType[];
  weight: string;
  height: string;
  abilities: [];
  base_experience: string;
}

export interface PokemonEvolutionType {
  evolutions: CustomPokemonDataType[];
}

export interface PokemonTypeType {
  [key: string | number]: {
    image: string;
    strength: string[];
    weakness: string[];
    resistance: string[];
    vulnerable: string[];
    hex?: string;
  };
}

export interface EvolutionChainType {
  evolution_details: [];
  evolves_to: [];
  is_baby: boolean;
  species: {
    name: string;
    url: string;
  };
}

export interface PokemonDataType {
  types: [];
  name: string;
  id: number;
  weight: string;
  height: string;
  abilities: [];
  base_experience: string;
}

export interface PokemonTypesProp {
  types: PokemonTypeType[];
  variant?: string;
}
