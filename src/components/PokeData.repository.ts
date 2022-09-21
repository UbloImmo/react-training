import axios from "axios";
import { PokemonDto } from "./PokeData.types";

export const getPokemonById = async (id: number) =>
  (await axios.get<PokemonDto>(`https://pokeapi.co/api/v2/pokemon/${id}`)).data;
