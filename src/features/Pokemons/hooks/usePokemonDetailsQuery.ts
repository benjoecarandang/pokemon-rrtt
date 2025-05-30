import { useQuery } from "@tanstack/react-query";
import { fetchPokemonDetails } from "../api/fetchPokemonDetails";

export const usePokemonDetailsQuery = (id: string) => {
  return useQuery({
    queryKey: ["pokemon", id],
    queryFn: () => fetchPokemonDetails(id)
  });
};
