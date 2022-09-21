import React from "react";
import styled from "styled-components";
import { Chip, ChipStatus } from "./Chip";

interface Props {
  imageSrc: string;
  title: string;
  description: string;
  status: ChipStatus;
}

export const Card = (props: Props) => {
  return (
    <Container>
      <Image src={props.imageSrc} />
      <Content>
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>
        <PositionedChip status={props.status} />
      </Content>
    </Container>
  );
};

const Container = styled("div")`
  display: flex;
  gap: 0.5rem;
  padding: 1rem;
  align-items: center;
  background-color: white;
  border-radius: 0.5rem;
`;

const Image = styled("img")`
  width: 200px;
  height: 200px;
`;

const Content = styled("div")`
  display: flex;
  align-self: stretch;
  flex-direction: column;
  align-items: baseline;
  gap: 0.5rem;
`;

const Title = styled("h2")``;

const Description = styled("p")`
  flex: 1;
`;

const PositionedChip = styled(Chip)`
  align-self: flex-end;
`;
