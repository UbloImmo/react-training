import React, { useCallback, useMemo } from "react";
import styled from "styled-components";
import { usePokemonContext } from "./PokeData.provider";

export const PokeStat = () => {
  const { pokemonData, isLoading, error } = usePokemonContext();

  if (isLoading || error !== null) return <></>;

  const totalStat = useMemo(
    () => pokemonData.stats.reduce((acc, stat) => acc + stat.base_stat, 0),
    [pokemonData]
  );

  return (
    <Container>
      <h1>Stats:</h1>
      {pokemonData.stats.map((stat) => (
        <Stat
          key={stat.stat.url}
        >{`${stat.stat.name}: ${stat.base_stat}`}</Stat>
      ))}
      <h2>{`Total: ${totalStat}`}</h2>
    </Container>
  );
};

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Stat = styled("div")``;
