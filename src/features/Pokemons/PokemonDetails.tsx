import { useParams } from "react-router-dom";
import Stats from "./components/Stats";
import Evolutions from "./components/Evolutions";
import { usePokemonDetailsQuery } from "./hooks/usePokemonDetailsQuery";
import PokemonTypes from "./components/PokemonTypes";
import { useExtractColors } from "../../../node_modules/react-extract-colors";
import LoadingSpinner from "./components/LoadingSpinner";
import { formatPokemonNumber } from "./utils/formatPokemonNumber";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import PokemonNavigator from "./components/PokemonNavigator";
import StrengthsAndWeaknesses from "./components/StrengthsAndWeaknesses";

const PokemonDetails = () => {
  const params = useParams();

  const {
    data: pokemonDetails,
    isLoading,
    isError,
  } = usePokemonDetailsQuery(params.id ?? "");

  const { colors } = useExtractColors(pokemonDetails?.image);

  const categories: Array<{
    name: string;
    posts: Array<{ id: number; title: React.ReactElement }>;
  }> = [
    {
      name: "About",
      posts: [
        {
          id: 1,
          title: (
            <div className="">
              <div className="mb-4">
                <h3 className="font-bold text-xl text-gray-8 mb-2 ">
                  Description
                </h3>
                <p className="text-gray-8">{pokemonDetails?.description}</p>
              </div>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <h3 className="font-bold text-xl text-gray-8 mb-2 ">
                    Height
                  </h3>
                  <p className="text-gray-8">
                    {pokemonDetails?.characteristics.height}
                  </p>
                </div>
                <div className="w-1/2">
                  <h3 className="font-bold text-xl text-gray-8 mb-2 ">
                    Weight
                  </h3>
                  <p className="text-gray-8">
                    {pokemonDetails?.characteristics.weight}
                  </p>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      name: "Stats",
      posts: [
        {
          id: 1,
          title: <Stats stats={pokemonDetails?.stats ?? []} />
        }
      ]
    },
    {
      name: "Defense",
      posts: [
        {
          id: 1,
          title: (
            <StrengthsAndWeaknesses
              currentPokemonTypes={pokemonDetails?.types ?? []}
            />
          )
        }
      ]
    },
    {
      name: "Abilities",
      posts: [
        {
          id: 1,
          title: (
            <div className="">
              <div className="mb-4">
                <h3 className="font-bold text-xl text-gray-8 mb-2 ">
                  Description
                </h3>
                <p className="text-gray-8">{pokemonDetails?.description}</p>
              </div>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <h3 className="font-bold text-xl text-gray-8 mb-2 ">
                    Height
                  </h3>
                  <p className="text-gray-8">
                    {pokemonDetails?.characteristics.height}
                  </p>
                </div>
                <div className="w-1/2">
                  <h3 className="font-bold text-xl text-gray-8 mb-2 ">
                    Weight
                  </h3>
                  <p className="text-gray-8">
                    {pokemonDetails?.characteristics.weight}
                  </p>
                </div>
              </div>
            </div>
          )
        }
      ]
    }
  ];

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  return (
    <>
      <div className="absolute w-full h-full top-0 left-[50%] opacity-25">
        <svg
          className="w-full h-full"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke={`${colors?.[0]}`}
            strokeWidth="2"
            fill="url(#a)"
            fillOpacity="0.8"
          ></circle>

          <circle
            cx="12"
            cy="12"
            r="6"
            stroke={`${colors?.[2]}`}
            strokeWidth="2"
            fill="url(#a)"
            fillOpacity="0.8"
          ></circle>
        </svg>
      </div>

      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-4 pb-10">
        {/* Column 1 */}
        <div className="flex-1 z-10">
          <div className="pt-10 pb-10 relative w-full flex items-center">
            <h1 className="z-0 capitalize absolute text-[166px] -left-4 bg-clip-text text-transparent bg-gradient-to-r font-bold from-gray-6 to-white opacity-50 top-1/2 transform -translate-y-1/2 select-none">
              {pokemonDetails?.name}
            </h1>

            <div className="w-full mx-auto pt-10">
              <div className="relative flex items-center z-10">
                <span
                  className="w-3 h-14 -mt-1 mr-2 rounded-full"
                  style={{
                    backgroundImage: `linear-gradient(to bottom, ${colors?.[0]}, ${colors?.[2]})` // Example gradient
                  }}
                ></span>
                <h1 className="capitalize text-[80px] font-bold text-black">
                  {pokemonDetails?.name}
                </h1>
              </div>
              <div className="flex gap-4 items-center">
                <p className="font-bold">
                  {formatPokemonNumber(pokemonDetails?.id ?? 0)}
                </p>
                <PokemonTypes
                  variant="details"
                  types={pokemonDetails?.types ?? []}
                />
              </div>
            </div>
          </div>

          {/* bentabs */}
          <div className="w-full justify-center">
            <TabGroup>
              <TabList className="flex justify-between">
                {categories.map(({ name }) => (
                  <Tab
                    key={name}
                    className="rounded-full py-3 text-sm/6 font-semibold text-gray-9 focus:outline-none data-[selected]:text-blue-500 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white text-xl"
                  >
                    {name}
                  </Tab>
                ))}
              </TabList>

              <hr className="border-2 my-3" />

              <TabPanels className="mt-3">
                {categories.map(({ name, posts }) => (
                  <TabPanel key={name} className="rounded-xl bg-white/5 py-3">
                    <ul>
                      {posts.map((post) => (
                        <li
                          key={post.id}
                          className="relative rounded-md pb-3 text-sm/6 transition"
                        >
                          <div className="font-semibold text-gray-9">
                            {post.title}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>
          </div>

          <hr className="border-2 mb-4" />

          <div>
            <h3 className="font-bold text-xl text-gray-8 mb-2 mt-6">
              Evolution
            </h3>
            <Evolutions evolutions={pokemonDetails?.evolutions ?? []} />
          </div>

          {params.id && <PokemonNavigator pokemonId={+params.id} />}
        </div>

        {/* Column 2 */}
        <div className="flex-1 p-6 z-10 text-right relative">
          <img
            className="absolute h-full w-full z-10 pl-10 lg:-right-[10%]"
            src={pokemonDetails?.image}
          />
        </div>
      </div>
    </>
  );
};

export default PokemonDetails;
