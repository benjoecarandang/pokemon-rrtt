import { CustomPokemonDataType, PokemonDataType } from "../../../utils/types";
import { formatPokemonTypes } from "./formatPokemonTypes";

export const formatPokemonData = (
  pokemon: PokemonDataType
): CustomPokemonDataType => {
  const { types, name, id, height, weight, abilities, base_experience } =
    pokemon;

  const pokemonTypes = formatPokemonTypes(types);

  return {
    name: name,
    id: id,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
    types: pokemonTypes,
    weight,
    height,
    abilities,
    base_experience
  };
};
