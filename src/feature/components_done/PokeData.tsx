import { Card } from "./Card";
import {
  PokemonStoreProvider,
  usePokemonStore,
} from "../provider/PokeData.provider";
import { PokeStat } from "./PokeStat";

interface Props {
  pokemonId: number;
}

export const PokeData = ({ pokemonId }: Props) => {
  const pokemonStore = usePokemonStore(pokemonId);
  const { pokemonData, error, isLoading } = pokemonStore;

  if (isLoading)
    return (
      <Card
        imageSrc="https://via.placeholder.com/200"
        title="Chargement en cours"
        description="Veuillez patienter"
        types={[]}
      />
    );

  if (error !== null)
    return (
      <Card
        imageSrc="https://via.placeholder.com/200"
        title="Erreur:"
        description={error}
        types={[]}
      />
    );

  return (
    <PokemonStoreProvider value={pokemonStore}>
      <Card
        imageSrc={pokemonData.sprites.front_default}
        title={pokemonData.name}
        description="pas de description"
        types={pokemonData.types.map((type) => type.type.name)}
      >
        <PokeStat />
      </Card>
    </PokemonStoreProvider>
  );
};
