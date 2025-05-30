import axios from "axios";
import {
  POKEMON_DETAILS_API,
  POKEMON_SPECIES_API
} from "../../../utils/constants";
import { EvolutionChainType, PokemonsResultType } from "../../../utils/types";
import { formatPokemonData } from "../utils/formatPokemonData";
import { formatPokemonTypes } from "../utils/formatPokemonTypes";

const fetchData = async <T>(url: string): Promise<T> => {
  try {
    const response = await axios.get<T>(url);

    if (response.status !== 200) {
      throw new Error(`Unexpected response status: ${response.status}`);
    }

    return response.data;
  } catch (error) {
    throw new Error("An error occurred while fetching data.");
  }
};

const getRecursiveEvolution = (
  evolutionChain: any,
  level: any,
  evolutionData: any
) => {
  if (!evolutionChain?.evolves_to.length) {
    return evolutionData.push({
      pokemon: {
        ...evolutionChain?.species,
        url: evolutionChain?.species.url.replace("pokemon-species", "pokemon")
      },
      level
    });
  }
  evolutionData.push({
    pokemon: {
      ...evolutionChain?.species,
      url: evolutionChain?.species.url.replace("pokemon-species", "pokemon")
    },
    level
  });
  return getRecursiveEvolution(
    evolutionChain.evolves_to[0],
    level + 1,
    evolutionData
  );
};

const getEvolutionData = (evolutionChain: EvolutionChainType[]) => {
  const evolutionData: any = [];
  getRecursiveEvolution(evolutionChain, 1, evolutionData);
  return evolutionData;
};

interface PokemonDetailsType {
  id: number;
  name: string;
  sprites: Record<string, unknown>;
  weight: number;
  height: number;
  stats: [];
  abilities: [];
  types: [];
}

export const fetchPokemonDetails = async (id: string) => {
  const pokemonDetails: PokemonDetailsType = await fetchData(
    `${POKEMON_DETAILS_API}/${id}`
  );

  const pokemonSpecies: any = await fetchData(`${POKEMON_SPECIES_API}/${id}`);
  const pokemonEvolutions: any = pokemonSpecies.evolution_chain
    ? await fetchData(pokemonSpecies.evolution_chain.url)
    : null;

  console.log(pokemonSpecies);

  const description: string =
    pokemonSpecies.flavor_text_entries
      .filter((entry: { version: { name: string }; flavor_text: string }) =>
        ["red", "yellow"].includes(entry.version.name)
      )
      .map((entry: { flavor_text: string; }) => entry.flavor_text.replace(/[\f\n\r\t\v]/g, " ")) // Replaces unwanted whitespace characters
      .map((entry: string) => entry.replace(/\s+/g, " ")) // Ensures single spaces only
      .join(" ") || "Description not available.";

  let evolutionLevel;

  const evolution = await getEvolutionData(pokemonEvolutions.chain);

  evolutionLevel = evolution.find(
    ({ pokemon }: { level: number; pokemon: PokemonsResultType }) =>
      pokemon.name === pokemonDetails.name
  ).level;

  const detailRequest = evolution.map(
    ({ pokemon }: { pokemon: PokemonsResultType }) => axios.get(pokemon.url)
  );

  const detailResponses = await Promise.all(detailRequest);

  const formattedPokemonData = detailResponses.map(({ data }) => {
    return formatPokemonData(data);
  });

  const formattedPokemonTypes = formatPokemonTypes(pokemonDetails.types);

  return {
    id: pokemonDetails.id,
    name: pokemonDetails.name,
    image: (pokemonDetails.sprites as any).other.dream_world.front_default,
    description,
    evolutions: formattedPokemonData,
    evolution_level: evolutionLevel,
    stats: pokemonDetails.stats,
    abilities: pokemonDetails.abilities,
    types: formattedPokemonTypes,
    characteristics: {
      height: `${pokemonDetails.height / 10}m`,
      weight: `${pokemonDetails.weight / 10}kg`
    }
  };
};
