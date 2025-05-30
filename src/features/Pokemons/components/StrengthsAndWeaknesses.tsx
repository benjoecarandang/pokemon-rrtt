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
                index === 0 ? "mb-8" : ""
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
          </>
        );
      });
    }
  );

  return (
    <>
      <div className=" text-gray-5 p-4 rounded-md hover:shadow-lg transition duration-300 bg-opacity-80 w-1/3">
        <h2 className="font-semibold text-lg mb-5">Strengths & Weaknesses</h2>
        {StrengthsAndWeaknessesImageMap}
      </div>
    </>
  );
};

export default StrengthsAndWeaknesses;
