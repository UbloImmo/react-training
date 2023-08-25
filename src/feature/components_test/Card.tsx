import { useMemo } from "react";
import styled, { css } from "styled-components";

export interface Pokemon {
  name: string;
  imageUrl: string;
  type: string;
  stats: Array<{ name: string; value: number }>;
}

interface Props {
  pokemon: Pokemon;
}

export const Card = (props: Props) => {
  const total = useMemo(
    () => props.pokemon.stats.reduce((acc, stat) => acc + stat.value, 0),
    [props.pokemon.stats]
  );

  return (
    <Container>
      <ImageContainer>
        <Image src={props.pokemon.imageUrl} />
        <TypeTag>{props.pokemon.type}</TypeTag>
      </ImageContainer>
      <Name>{props.pokemon.name}</Name>
      <Stats>
        {props.pokemon.stats.map((stat) => (
          <Stat key={stat.name}>
            {stat.name}: <b>{stat.value}</b>
          </Stat>
        ))}
      </Stats>
      <Total>Total: {total}</Total>
    </Container>
  );
};

const bodyTypography = css`
  font-family: Avenir;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

const h2Typography = css`
  font-family: Avenir;
  font-size: 24px;
  font-style: normal;
  font-weight: 800;
  line-height: 32px; /* 133.333% */
  letter-spacing: 0.5px;
`;

const h3Typography = css`
  font-family: Avenir;
  font-size: 18px;
  font-style: normal;
  font-weight: 800;
  line-height: 28px; /* 155.556% */
  letter-spacing: 0.5px;
`;

const capitalize = css`
  &:first-letter {
    text-transform: uppercase;
  }
`;

const Container = styled.div`
  font-family: Avenir;
  max-width: 294px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  box-shadow: 0px 12px 30px 0px rgba(37, 34, 117, 0.08),
    0px 0px 1px 0px rgba(12, 26, 75, 0.1);
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 126px;
`;

const TypeTag = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background-color: #7d7e9d;
  padding: 2px 1.5rem;
  border-radius: 666px;
  color: white;
  ${bodyTypography}
  ${capitalize}
`;

const Name = styled.div`
  ${h2Typography}
  ${capitalize}
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 0.5rem;
  grid-row-gap: 0.5rem;
`;

const Stat = styled.div`
  ${bodyTypography}
  ${capitalize}
`;

const Total = styled.div`
  ${h3Typography}
  border-radius: 0.5rem;
  text-align: center;
  padding: 0.5rem;
  background: #fff9ec;
  color: #ffc542;
`;
