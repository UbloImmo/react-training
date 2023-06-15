import styled from "styled-components";
import { PokemonDto } from "../provider/PokeData.types";

interface Props {
  pokemon: PokemonDto;
}

export const Card = (props: Props) => {
  return <Container>Fill in here</Container>;
};

const Container = styled.div`
  background-color: red;
`;
