import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { Button } from "@headlessui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

type PokemonNavigatorProps = {
  pokemonId: number;
};

const fetchPokemon = async (id: number) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (!res.ok) throw new Error("Failed to fetch Pokémon");
  return res.json();
};

const PokemonNavigator: React.FC<PokemonNavigatorProps> = ({ pokemonId }) => {
  const navigate = useNavigate();
  const maxPokemonId = 1025; // Last known Pokémon in PokéAPI

  // Fetch current Pokémon details
  // const {
  //   data: currentPokemon,
  //   isLoading,
  //   isError
  // } = useQuery({
  //   queryKey: ["pokemon", pokemonId],
  //   queryFn: () => fetchPokemon(pokemonId),
  //   staleTime: 1000 * 60 * 5 // Cache for 5 minutes
  // });

  // Fetch previous Pokémon details (if not the first Pokémon)
  const { data: prevPokemon } = useQuery({
    queryKey: ["pokemon", pokemonId - 1],
    queryFn: () => fetchPokemon(pokemonId - 1),
    enabled: pokemonId > 1 // Fetch only if not at the start
  });

  // Fetch next Pokémon details (if not the last Pokémon)
  const { data: nextPokemon } = useQuery({
    queryKey: ["pokemon", pokemonId + 1],
    queryFn: () => fetchPokemon(pokemonId + 1),
    enabled: pokemonId < maxPokemonId // Fetch only if not at the end
  });

  // if (isLoading) return <p>Loading...</p>;
  // if (isError) return <p>Error loading Pokémon.</p>;

  return (
    <div className="flex justify-between items-center mt-4 gap-4 relative max-w-screen-xl mx-auto mt-10 ">
      {/* Previous Button */}

      {pokemonId !== 1 ? (
        <Button
          onClick={() => navigate(`/pokemon/${pokemonId - 1}`)}
          className="flex items-center gap-2 px-4 py-2 rounded-full text-gray-9 disabled:bg-gray-400"
        >
          <FaChevronLeft />
          {prevPokemon && (
            <img
              src={prevPokemon.sprites.front_default}
              alt={prevPokemon.name}
              className="w-12 h-12"
            />
          )}
          {/* <span className="capitalize">{prevPokemon?.name}</span> */}
        </Button>
      ) : (
        <div className="flex items-center gap-2"></div>
      )}

      {/* Next Button */}
      <Button
        disabled={pokemonId === maxPokemonId}
        onClick={() => navigate(`/pokemon/${pokemonId + 1}`)}
        className="flex items-center gap-2 px-4 py-2 rounded-full text-gray-9 disabled:bg-gray-400"
      >
        {/* <span className="capitalize">{nextPokemon?.name}</span> */}
        {nextPokemon && (
          <img
            src={nextPokemon.sprites.front_default}
            alt={nextPokemon.name}
            className="w-12 h-12"
          />
        )}
        <FaChevronRight />
      </Button>
    </div>
  );
};

export default PokemonNavigator;
