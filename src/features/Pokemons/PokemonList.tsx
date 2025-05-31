import Pagination from "../../components/ui/Pagination";
import PokemonCard from "./components/PokemonCard";
import { usePokemonsQuery } from "./hooks/usePokemonsQuery";
import { useState } from "react";
import SidebarFilter from "../../components/layouts/SidebarFilter";
import { useParams, useSearchParams } from "react-router-dom";
import LoadingSpinner from "./components/LoadingSpinner";

export const PokemonList = () => {
  const [searchParams, ] = useSearchParams();
  const query = searchParams.get("query") || "";
  const { type } = useParams();

  const [page, setPage] = useState<number>(1);
  const { data, isLoading, isError } = usePokemonsQuery(page, query, type);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  return (
    <SidebarFilter>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {data?.pokemons?.map((pokemon, index) => {
          return <PokemonCard pokemon={pokemon} index={index} key={index} />;
        })}
      </div>
      <Pagination
        setPage={setPage}
        page={page}
        hasNext={!!data?.next}
        count={data?.count ?? 0}
      />
    </SidebarFilter>
  );
};

export default PokemonList;
