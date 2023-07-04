import styled from "styled-components";
import { PokemonDto } from "../provider/PokeData.types";
import { useMemo } from "react";

interface Props {
  pokemon: PokemonDto;
}

export const Card = ({ pokemon }: Props) => {
  const sum = useMemo(
    () =>
      pokemon?.stats?.reduce((prev, current) => prev + current.base_stat, 0),
    [pokemon]
  );

  return (
    <Container>
      <ImageContainer>
        <Image>
          <img src={pokemon.sprites.front_default} alt="" />
        </Image>
        <Label>
          {pokemon?.types?.map((t) => (
            <LabelElement>{t.type.name}</LabelElement>
          ))}
        </Label>
      </ImageContainer>
      <PokeName>{pokemon.name}</PokeName>
      <StatsGrid>
        {pokemon?.stats?.map((element) => (
          <div>
            {element.stat.name}: <b> {element.base_stat}</b>
          </div>
        ))}
      </StatsGrid>
      <TotalScore> Total : {sum}</TotalScore>
    </Container>
  );
};

const Container = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 270px;
  height: 476px;
  padding: 32px;
  gap: 24px;
  border-radius: 8px;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04))
    drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
  box-shadow: 0px 12px 30px 0px #25227514;
  box-shadow: 0px 0px 1px 0px #0c1a4b1a;
`;
const ImageContainer = styled.div`
  background-color: #efefef;
  width: 100%;
  height: 294px;
  position: relative;
`;
const Image = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  & > img {
    height: 90%;
  }
`;
const Label = styled.div`
  position: absolute;
  display: inline-flex;
  right: 10px;
  height: 24px;
  top: 10px;
  z-index: 1;
`;
const LabelElement = styled.div`
  display: inline-flex;
  background-color: #7d7e9d;
  border-radius: 40px;
  padding: 2px 10px 2px 10px;
  margin-left: 0.625rem;
  color: white;
  font-family: "Avenir", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  min-width: 80px;
  justify-content: center;
  text-transform: capitalize;
`;

const PokeName = styled.div`
  align-self: flex-start;
  display: flex;
  font-family: "Avenir", sans-serif;
  font-weight: 900;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.5px;
  color: #010b13;
  text-transform: capitalize;
  height: 32px;
  margin: 0;
`;
const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-content: space-between;
  justify-content: space-between;
  width: 100%;
  grid-row-gap: 9px;
  grid-column-gap: 40px;

  > div {
    text-transform: capitalize;
    font-size: 12px;
  }
`;
const TotalScore = styled.div`
  display: flex;
  width: 100%;
  height: 24px;
  border-radius: 8px;
  padding: 8px;
  justify-content: center;
  color: #ffc542;
  background-color: #fff9ec;
`;
