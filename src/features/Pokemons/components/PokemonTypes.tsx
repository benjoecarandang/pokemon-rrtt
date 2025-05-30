import { PokemonTypesProp, PokemonTypeType } from "../../../utils/types";

const PokemonTypes: React.FC<PokemonTypesProp> = ({ types, variant }) => {
  return (
    <div
      className={`${
        variant === "details" ? "gap-4" : "gap-2"
      } flex align-center items-center justify-left z-20`}
    >
      {types.map((type: PokemonTypeType, index: number) => {
        const keys = Object.keys(type);
        return (
          <span
            style={{ backgroundColor: `${type[keys[0]].hex?.toString()}` }}
            className="flex text-sm items-center pr-2 text-white rounded-md line-height-1 capitalize leading-4"
            key={index}
          >
            <img
              className="w-6"
              src={type[keys[0]].image}
              alt="type"
              key={index}
            />
            {keys[0]}
          </span>
        );
      })}
    </div>
  );
};

export default PokemonTypes;
