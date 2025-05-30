import axios, { AxiosResponse } from "axios";
import { POKEMON_API, POKEMON_ROUTES_API } from "../../../utils/constants";
import { OrigPokemonsDataType, PokemonsResultType } from "../../../utils/types";
import { formatPokemonData } from "../utils/formatPokemonData";

const LIMIT = 12; // Default limit

export const fetchAllPokemons = async () => {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=9999"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch Pokémon data");
  }
  const data = await response.json();
  return data.results; // Returns an array of Pokémon objects
};


export const fetchPokemons = async (page: number, query?: string, type?: string) => {
  try {

    let apiUrl = type ? `${POKEMON_API}/type/${type}` : `${POKEMON_ROUTES_API}?offset=${
      (page - 1) * LIMIT
    }&limit=${LIMIT}`;

    let allPokemons: PokemonsResultType[] = [];

    if (query) {
      // Fetch all (or a high enough limit)
      const response: AxiosResponse<OrigPokemonsDataType> = await axios.get(
        `${POKEMON_ROUTES_API}?limit=9999&offset=0`
      );

      if (response.status !== 200) {
        throw new Error(`Unexpected response status: ${response.status}`);
      }

      // Filter based on query
      allPokemons = response.data.results.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase())
      );

      console.log(allPokemons.length);

      // Paginate manually AFTER filtering
      const start = (page - 1) * LIMIT;
      const end = start + LIMIT;
      const paginatedPokemons = allPokemons.slice(start, end);

      // Fetch details only for paginated results
      const detailResponses = await Promise.all(
        paginatedPokemons.map((pokemon) => axios.get(pokemon.url))
      );

      const formattedPokemonData = detailResponses.map(({ data }) =>
        formatPokemonData(data)
      );

      return {
        pokemons: formattedPokemonData,
        count: allPokemons.length, // Use filtered count for pagination
        prev: page > 1 ? page - 1 : null,
        next: end < allPokemons.length ? page + 1 : null
      };
    }

    // Regular pagination for non-search
    const response: AxiosResponse<OrigPokemonsDataType> = await axios.get(
      apiUrl
    );

    if (response.status !== 200) {
      throw new Error(`Unexpected response status: ${response.status}`);
    }

    let detailRequests: Promise<AxiosResponse<any>>[] = [];

    if (type) {
      // Extract { name, url } from the nested type structure
      const typePokemonList = response.data.pokemon.map(
        (entry: any) => entry.pokemon
      );
    
      detailRequests = typePokemonList.map((pokemon: any) =>
        axios.get(pokemon.url)
      );
    } else {
      // Default: response.data.results is already a flat list
      detailRequests = response.data.results.map((pokemon: any) =>
        axios.get(pokemon.url)
      );
    }

    const detailResponses = await Promise.all(
      detailRequests
    );

    console.log(detailResponses);

    const formattedPokemonData = detailResponses.map(({ data }) =>
      formatPokemonData(data)
    );

    return {
      pokemons: formattedPokemonData,
      count: response.data.count,
      prev: response.data.previous,
      next: response.data.next
    };
  } catch (error) {
    console.error("Failed to fetch pokemons:", error);
    throw new Error("An error occurred while fetching Pokémon data.");
  }
};
