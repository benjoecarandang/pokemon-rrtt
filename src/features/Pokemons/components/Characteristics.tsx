import { useParams } from "react-router-dom";
import { usePokemonDetailsQuery } from "../hooks/usePokemonDetailsQuery";

const Characteristics = () => {
  const params = useParams();
  const { data: pokemonDetails } = usePokemonDetailsQuery(params.id ?? "");

  return (
    <div className=" p-4 rounded-md  hover:shadow-lg transition duration-300 bg-opacity-80 w-1/3 w-1/3">
      <h2 className="font-semibold text-lg mb-5 text-gray-5">
        Characteristics
      </h2>
      {pokemonDetails?.characteristics &&
        Object.keys(pokemonDetails.characteristics).map((key) => (
          <div className="flex items-center mb-2">
            <div className="capitalize text-sm font-medium text-gray-5">
              {key}:{" "}
            </div>
            <div className="w-fullrounded-lg overflow-hidden text-sm text-gray-5">
              {
                pokemonDetails?.characteristics[
                  key as keyof typeof pokemonDetails.characteristics
                ]
              }
            </div>
          </div>
        ))}

      <h2 className="font-semibold text-lg my-5 text-gray-5">Abilties</h2>
      {pokemonDetails?.abilities.map(
        (ability: { ability: { name: string } }, index) => (
          <div className="flex items-center mb-2">
            <div className="capitalize text-sm font-medium text-gray-5">
              {index + 1}. {ability.ability.name}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Characteristics;
