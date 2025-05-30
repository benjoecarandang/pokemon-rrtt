import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useEffect, useState, useMemo } from "react";
import { useFetchAllPokemons } from "../hooks/usePokemonsQuery";
import { useLocation, useNavigate } from "react-router-dom";
import clsx from "clsx";
import { useDebounce } from "../hooks/useDebounce"; // Assuming you have a debounce hook

export default function Search() {
  const [, setQuery] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const debouncedSearchInput = useDebounce(searchInput, 300); // Debounce the search input

  const { data: pokemons, isLoading, isError } = useFetchAllPokemons();

  const searchParams = new URLSearchParams(location.search);
  const queryParam = searchParams.get("query");

  useEffect(() => {
    if (queryParam) {
      setQuery(queryParam);
      setSearchInput(queryParam);
    } else {
      setSearchInput("");
    }
  }, [queryParam]);

  const handleSelection = (value: string | null) => {
    if (typeof value === "string") {
      setQuery(value);
      setSearchInput(value);
      navigate(`/pokemons?query=${encodeURIComponent(value)}`);
    }
  };

  const filteredPokemons = useMemo(() => {
    if (!pokemons) return [];
    return pokemons.filter((pokemon: { name: string }) =>
      pokemon.name.toLowerCase().includes(debouncedSearchInput.toLowerCase())
    );
  }, [pokemons, debouncedSearchInput]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching Pokémon data</div>;

  return (
    <div className="mx-auto w-full">
      <Combobox value={searchInput} onChange={handleSelection}>
        <div className="relative">
          <ComboboxInput
            className={clsx(
              "w-full bg-white/5 py-3 px-6 text-sm/6 text-gray-9",
              "focus:outline-none border border-gray-7 rounded-full"
            )}
            displayValue={() => searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter" && searchInput) {
                handleSelection(searchInput);
              }
            }}
            value={searchInput}
            placeholder="Search Pokemons"
            aria-label="Search Pokemons"
          />
          <ComboboxButton className="group absolute inset-y-0 right-0 px-6 top-0">
            <ChevronDownIcon
              className="size-5 fill-gray-8 group-hover:fill-gray-6"
              aria-hidden="true"
            />
          </ComboboxButton>
        </div>

        <ComboboxOptions
          anchor="bottom"
          transition
          className={clsx(
            "w-[var(--input-width)] rounded-xl border bg-white mt-2 border-gray-7",
            "transition duration-100 ease-in opacity-100"
          )}
        >
          {filteredPokemons.length === 0 && (
            <div className="text-sm/6 text-gray-8 capitalize flex items-center gap-2 py-1.5 px-6 select-none">
              Pokemon not found.
            </div>
          )}

          <ComboboxOption
            className="hidden"
            value={searchInput}
          ></ComboboxOption>

          {filteredPokemons.slice(0, 6).map((pokemon: { name: string }) => (
            <ComboboxOption
              key={pokemon.name}
              value={pokemon.name}
              className="group flex cursor-default items-center gap-2 py-1.5 px-6 select-none hover:bg-white/10"
            >
              <div className="text-sm/6 text-gray-8 capitalize flex items-center gap-2">
                {pokemon.name}
              </div>
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </Combobox>
    </div>
  );
}
