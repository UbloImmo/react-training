import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { getPokemonById } from "./PokeData.repository";
import { PokemonDto } from "./PokeData.types";

export const usePokemonStore = (pokemonId: number) => {
  const [pokemonData, setPokemonData] = useState<PokemonDto | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setLoading] = useState(true);

  const fetchPokemonData = useCallback(() => {
    setLoading(true);
    getPokemonById(pokemonId)
      .then((data) => {
        setPokemonData(data);
      })
      .catch((error) => {
        setError("An error occurred");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [pokemonId]);

  useEffect(() => {
    fetchPokemonData();
  }, [pokemonId]);

  return { pokemonData, error, isLoading } as UseQueryResult;
};

interface QueryLoading {
  isLoading: true;
  error: unknown;
  pokemonData: null;
}

interface QueryError {
  isLoading: false;
  error: string;
  pokemonData: null;
}

interface QuerySuccess {
  isLoading: false;
  error: null;
  pokemonData: PokemonDto;
}

type UseQueryResult = QueryLoading | QueryError | QuerySuccess;

const PokeDataContext = createContext<UseQueryResult>({} as UseQueryResult);

export const PokemonStoreProvider = PokeDataContext.Provider;
export const usePokemonContext = () => useContext(PokeDataContext);

/**
 * - C1 => <PokemonProvider pokemon={pokemon} />
 *  - C2
 *   - C3 => usePokemonContext().name => pokemon.name
 *    - Chip => name
 */
