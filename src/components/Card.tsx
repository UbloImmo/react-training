import React from "react";
import styled from "styled-components";
import { Chip, ChipVariant } from "./Chip";

interface Props {
  imageSrc: string;
  title: string;
  description: string;
  types: string[];
  children?: React.ReactNode;
}

export const Card = (props: Props) => {
  const { types = [] } = props;

  return (
    <Container>
      <InfoContainer>
        <Image src={props.imageSrc} />
        <Content>
          <Title>{props.title}</Title>
          <Description>{props.description}</Description>
          <TypesContainer>
            {types.map((type) => (
              <Chip variant="info" label={type} />
            ))}
          </TypesContainer>
        </Content>
      </InfoContainer>
      {props.children}
    </Container>
  );
};

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  background-color: white;
  border-radius: 0.5rem;
`;

const InfoContainer = styled("div")`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const Image = styled("img")`
  width: 200px;
  height: 200px;
`;

const Content = styled("div")`
  display: flex;
  flex: 1;
  align-self: stretch;
  flex-direction: column;
  align-items: baseline;
  gap: 0.5rem;
`;

const TypesContainer = styled("div")`
  display: flex;
  align-self: stretch;
  justify-content: flex-end;
  gap: 0.5rem;
`;

const Title = styled("h2")``;

const Description = styled("p")`
  flex: 1;
`;

const PositionedChip = styled(Chip)`
  align-self: flex-end;
`;
