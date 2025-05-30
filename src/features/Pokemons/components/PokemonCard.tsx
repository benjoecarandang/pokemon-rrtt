import { Link } from "react-router-dom";
import PokemonTypes from "./PokemonTypes";
import { CustomPokemonDataType } from "../../../utils/types";
import { FaRegHeart } from "react-icons/fa6";
import { formatPokemonNumber } from "../utils/formatPokemonNumber";
import { useState } from "react";

interface PokemonProps {
  pokemon: CustomPokemonDataType;
  index: number;
}

const PokemonCard: React.FC<PokemonProps> = ({ pokemon, index }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  // Calculate the delay based on the index
  const delay = `${index * 100}ms`;

  return (
    <div
      className="group relative max-w-sm rounded-lg border border-gray-200 shadow-lg overflow-hidden transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl bg-white opacity-0 animate-fade-in"
      style={{ animationDelay: delay }}
      key={pokemon.id}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

      <Link to={`/pokemon/${pokemon.id}`}>
        <div className="p-6 relative">
          <div className="flex justify-between items-center">
            <div className="text-lg font-bold capitalize">{pokemon.name}</div>
            <div className="flex items-center space-x-4">
              <div className="text-sm font-bold">{formatPokemonNumber(pokemon.id)}</div>
              <button onClick={toggleFavorite}>
                <FaRegHeart className={`text-black ${isFavorite ? 'fill-red-500' : ''}`} />
              </button>
            </div>
          </div>

          <img
            src={pokemon.image ?? "default-image-url"}
            alt={pokemon.name}
            className="mx-auto w-36 h-36 z-10 relative my-5 drop-shadow-[3px_5px_2px_rgba(0,0,0,0.4)]"
          />

          <div className="flex justify-center">
            <PokemonTypes types={pokemon.types} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PokemonCard;