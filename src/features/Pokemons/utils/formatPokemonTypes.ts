import { pokemonTypesObject } from "../../../utils/pokemonTypes";

export const formatPokemonTypes = (types: []) => {
  return types.map(({ type: { name } }: { type: { name: string } }) => {
    return { [name]: pokemonTypesObject[name] };
  });
};
