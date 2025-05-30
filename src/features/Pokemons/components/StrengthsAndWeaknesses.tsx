import { pokemonTypesObject } from "../../../utils/pokemonTypes";
import { PokemonTypeType } from "../../../utils/types";

interface StrengthsAndWeaknessesProps {
  currentPokemonTypes: PokemonTypeType[];
}

const StrengthsAndWeaknesses: React.FC<StrengthsAndWeaknessesProps> = ({
  currentPokemonTypes
}) => {
  const StrengthsAndWeaknessesImageMap = currentPokemonTypes.map(
    (typeObject, index) => {
      return Object.entries(typeObject).map(([key, value]) => {
        return (
          <>
            <div className="flex items-center gap-2 mb-2" key={key}>
              <p className="capitalize text-sm w-[138px]">Type </p>
              <img className="w-6" src={value.image} alt="test" />
            </div>

            <div className="flex items-center gap-2 mb-2" key={key}>
              <p className="capitalize text-sm w-[138px]">Strengths </p>
              {value.strength.map((strength) => (
                <img
                  key={strength}
                  className="w-6"
                  src={pokemonTypesObject[strength].image}
                  alt={strength}
                />
              ))}
            </div>

            <div className="flex items-center gap-2 mb-2" key={key}>
              <p className="capitalize text-sm w-[138px]">Weakness </p>
              {value.weakness.map((strength) => (
                <img
                  key={strength}
                  className="w-6"
                  src={pokemonTypesObject[strength].image}
                  alt={strength}
                />
              ))}
            </div>

            <div className="flex items-center gap-2 mb-2" key={key}>
              <p className="capitalize text-sm w-[138px]">Resistance </p>
              {value.resistance.map((strength) => (
                <img
                  key={strength}
                  className="w-6"
                  src={pokemonTypesObject[strength].image}
                  alt={strength}
                />
              ))}
            </div>

            <div
              className={`flex items-center gap-2 mb-2 ${
                index === 0 ? "mb-0" : ""
              }`}
              key={key}
            >
              <p className="capitalize text-sm w-[138px]">Vulnerable </p>
              {value.vulnerable.map((strength) => (
                <img
                  key={strength}
                  className="w-6"
                  src={pokemonTypesObject[strength].image}
                  alt={strength}
                />
              ))}
            </div>

            {index < currentPokemonTypes.length - 1 && (
              <hr className="my-4 border-gray-300" /> // Separator between different types
            )}
          </>
        );
      });
    }
  );

  return (
    <>
      <div className=" text-gray-5 rounded-md transition duration-300 bg-opacity-80">
        <h2 className="font-bold text-xl text-gray-8 mb-4">
          Strengths & Weaknesses
        </h2>
        {StrengthsAndWeaknessesImageMap}
      </div>
    </>
  );
};

export default StrengthsAndWeaknesses;
