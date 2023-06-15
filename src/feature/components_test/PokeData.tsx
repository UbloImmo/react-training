import { Card } from "./Card";
import { usePokemonStore } from "../provider/PokeData.provider";

interface Props {
  pokemonId: number;
}

export const PokeData = ({ pokemonId }: Props) => {
  const pokemonStore = usePokemonStore(pokemonId);
  const { pokemonData, error, isLoading } = pokemonStore;

  if (isLoading) return <h1>Loading...</h1>;

  if (error || !pokemonData) return <h1>Error 😬</h1>;

  return <Card pokemon={pokemonData} />;
};
