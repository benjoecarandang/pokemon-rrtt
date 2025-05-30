import { useQuery } from "@tanstack/react-query";
import { fetchPokemons, fetchAllPokemons } from "../api/fetchPokemons";

export const usePokemonsQuery = (page: number, query?: string, type?: string) => {
  return useQuery({
    queryKey: ["pokemons", page, query || type],
    queryFn: () => fetchPokemons(page, query, type)
  });
};

export const useFetchAllPokemons = () => {
  return useQuery({
    queryKey: ["allPokemons"],
    queryFn: () => fetchAllPokemons()
  });
};
