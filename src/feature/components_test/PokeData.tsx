import { useCallback, useState } from "react";
import { Card } from "./Card";
import { usePokemon } from "./usePokemon";

interface Props {
  pokemonId: number;
}

export const PokeData = ({ pokemonId }: Props) => {
  const [pokemonNumber, setPokemonNumber] = useState(pokemonId);
  const { isLoading, isSuccess, data } = usePokemon(pokemonNumber);
  const pickRandomPokemon = useCallback(() => {
    setPokemonNumber(Math.floor(Math.random() * 151) + 1);
  }, [setPokemonNumber]);

  if (isLoading) return <h1>Loading ...</h1>;
  if (!isSuccess) return <h1>Something went wrong</h1>;

  return (
    <div>
      <button onClick={pickRandomPokemon}>Random</button>
      <Card pokemon={data} />
    </div>
  );
};
