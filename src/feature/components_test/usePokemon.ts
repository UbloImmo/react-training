import { useQuery } from "react-query";
import { getPokemon } from "./pokemon.api";

export const usePokemon = (id: number) => {
  return useQuery(["pokemon", id], () => getPokemon(id));
};
