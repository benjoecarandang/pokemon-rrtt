import bug from "../assets/types/bug.png";
import dark from "../assets/types/dark.svg";
import dragon from "../assets/types/dragon.png";
import electric from "../assets/types/electric.svg";
import fairy from "../assets/types/fairy.svg";
import fighting from "../assets/types/fighting.svg";
import fire from "../assets/types/fire.png";
import flying from "../assets/types/flying.png";
import ghost from "../assets/types/ghost.png";
import grass from "../assets/types/grass.png";
import ground from "../assets/types/ground.svg";
import ice from "../assets/types/ice.svg";
import normal from "../assets/types/normal.svg";
import poison from "../assets/types/poison.svg";
import psychic from "../assets/types/psychic.svg";
import rock from "../assets/types/rock.svg";
import steel from "../assets/types/steel.svg";
import water from "../assets/types/water.svg";
import { PokemonTypeType } from "./types";

const Bug = "bug";
const Dark = "dark";
const Dragon = "dragon";
const Electric = "electric";
const Fairy = "fairy";
const Fighting = "fighting";
const Fire = "fire";
const Flying = "flying";
const Ghost = "ghost";
const Grass = "grass";
const Ground = "ground";
const Ice = "ice";
const Normal = "normal";
const Poison = "poison";
const Psychic = "psychic";
const Rock = "rock";
const Steel = "steel";
const Water = "water";

export const pokemonTypesObject: PokemonTypeType = {
  bug: {
    image: bug,
    strength: [Grass, Psychic, Dark],
    weakness: [Fighting, Flying, Poison, Ghost, Steel, Fire, Fairy],
    resistance: [Fighting, Ground, Grass],
    vulnerable: [Flying, Rock, Fire],
    hex: "#9cc430"
  },
  dark: {
    image: dark,
    strength: [Ghost, Psychic],
    weakness: [Fighting, Dark, Fairy],
    resistance: [Ghost, Psychic, Dark],
    vulnerable: [Fighting, Bug, Fairy],
    hex: "#5b5466"
  },
  dragon: {
    image: dragon,
    strength: [Dragon],
    weakness: [Steel, Fairy],
    resistance: [Fire, Water, Grass, Electric],
    vulnerable: [Ice, Dragon, Fairy],
    hex: "#067cbd"
  },
  electric: {
    image: electric,
    strength: [Flying, Water],
    weakness: [Ground, Grass, Electric, Dragon],
    resistance: [Flying, Steel, Electric],
    vulnerable: [Ground],
    hex: "#fbd100"
  },
  fairy: {
    image: fairy,
    strength: [Fighting, Dragon, Dark],
    weakness: [Poison, Steel, Fire],
    resistance: [Fighting, Bug, Dragon, Dark],
    vulnerable: [Poison, Steel],
    hex: "#fb89eb"
  },
  fighting: {
    image: fighting,
    strength: [Normal, Rock, Steel, Ice, Dark],
    weakness: [Flying, Poison, Psychic, Bug, Ghost, Fairy],
    resistance: [Rock, Bug, Dark],
    vulnerable: [Flying, Psychic, Fairy],
    hex: "#e0306a"
  },
  fire: {
    image: fire,
    strength: [Bug, Steel, Grass, Ice],
    weakness: [Rock, Fire, Water, Dragon],
    resistance: [Bug, Steel, Fire, Grass, Ice],
    vulnerable: [Ground, Rock, Water],
    hex: "#ffad4b"
  },
  flying: {
    image: flying,
    strength: [Fighting, Bug, Grass],
    weakness: [Rock, Steel, Electric],
    resistance: [Fighting, Ground, Bug, Grass],
    vulnerable: [Rock, Electric, Ice],
    hex: "#9fb9e9"
  },
  ghost: {
    image: ghost,
    strength: [Ghost, Psychic],
    weakness: [Normal, Dark],
    resistance: [Normal, Fighting, Poison, Bug],
    vulnerable: [Ghost, Dark],
    hex: "#6d70c9"
  },
  grass: {
    image: grass,
    strength: [Ground, Rock, Water],
    weakness: [Flying, Poison, Bug, Steel, Fire, Grass, Dragon],
    resistance: [Ground, Water, Grass, Electric],
    vulnerable: [Flying, Poison, Bug, Fire, Ice],
    hex: "#60ba53"
  },
  ground: {
    image: ground,
    strength: [Poison, Rock, Steel, Fire, Electric],
    weakness: [Flying, Bug, Grass],
    resistance: [Poison, Rock, Electric],
    vulnerable: [Water, Grass, Ice],
    hex: "#e87236"
  },
  ice: {
    image: ice,
    strength: [Flying, Ground, Grass, Dragon],
    weakness: [Steel, Fire, Water, Ice],
    resistance: [Ice],
    vulnerable: [Fighting, Rock, Steel, Fire],
    hex: "#4cd1c0"
  },
  normal: {
    image: normal,
    strength: [],
    weakness: [Rock, Ghost, Steel],
    resistance: [Ghost],
    vulnerable: [Fighting],
    hex: "#919aa2"
  },
  poison: {
    image: poison,
    strength: [Grass, Fairy],
    weakness: [Poison, Ground, Rock, Ghost, Steel],
    resistance: [Fighting, Poison, Grass, Fairy],
    vulnerable: [Ground, Psychic],
    hex: "#b567ce"
  },
  psychic: {
    image: psychic,
    strength: [Fighting, Poison],
    weakness: [Steel, Psychic, Dark],
    resistance: [Fighting, Psychic],
    vulnerable: [Bug, Ghost, Dark],
    hex: "#ff6675"
  },
  rock: {
    image: rock,
    strength: [Flying, Bug, Fire, Ice],
    weakness: [Fighting, Ground, Steel],
    resistance: [Normal, Flying, Poison, Fire],
    vulnerable: [Fighting, Ground, Steel, Water, Grass],
    hex: "#c8b686"
  },
  steel: {
    image: steel,
    strength: [Rock, Ice, Fairy],
    weakness: [Steel, Fire, Water, Electric],
    resistance: [
      Normal,
      Flying,
      Poison,
      Rock,
      Bug,
      Steel,
      Grass,
      Psychic,
      Ice,
      Dragon,
      Fairy
    ],
    vulnerable: [Fighting, Ground, Fire],
    hex: "#5a8ea2"
  },
  water: {
    image: water,
    strength: [Ground, Rock, Fire],
    weakness: [Water, Grass, Dragon],
    resistance: [Steel, Fire, Water, Ice],
    vulnerable: [Grass, Electric],
    hex: "#3692dc"
  }
};
