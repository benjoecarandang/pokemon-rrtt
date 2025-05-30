import { Link } from "react-router-dom";
import {
  CustomPokemonDataType,
  PokemonEvolutionType
} from "../../../utils/types";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Evolutions: React.FC<PokemonEvolutionType> = ({ evolutions }) => {
  return (
    <div className="">
      <div className="flex justify-center items-center">
        {evolutions?.map((pokemon: CustomPokemonDataType, index: number) => {
          return (
            <Link
              to={`/pokemon/${pokemon.id}`}
              className="flex items-center"
              key={pokemon.id}
            >
              <div>
                <img
                  src={pokemon.image ?? ""}
                  alt={pokemon.name}
                  className="w-40 h-40 object-contain"
                />
                <p className="text-center capitalize text-gray-8 font-bold">
                  {pokemon.name}
                </p>
              </div>
              {/* Render arrow only if it’s not the last item */}
              {index < evolutions.length - 1 && (
                <FaArrowRight className="w-10 h-10 mx-10 text-gray-500" />
              )}{" "}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Evolutions;
