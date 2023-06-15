import React from "react";
import styled from "styled-components";

export type ChipVariant = "success" | "error" | "warning" | "info";

interface Props {
  variant: ChipVariant;
  label: string;
  className?: string;
}

export const Chip = (props: Props) => {
  switch (props.variant) {
    case "success":
      return (
        <SuccessChip className={props.className}>{props.label}</SuccessChip>
      );
    case "error":
      return <ErrorChip className={props.className}>{props.label}</ErrorChip>;
    case "warning":
      return (
        <WarningChip className={props.className}>{props.label}</WarningChip>
      );
    case "info":
      return <InfoChip className={props.className}>{props.label}</InfoChip>;
    default:
      return <Never check={props.variant} />;
  }
};

const Never = (_props: { check: never }) => {
  return <></>;
};

const BaseChip = styled("div")`
  border-radius: 1rem;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  text-align: center;
`;

const SuccessChip = styled(BaseChip)`
  background-color: green;
`;

const ErrorChip = styled(BaseChip)`
  background-color: red;
`;

const WarningChip = styled(BaseChip)`
  background-color: yellow;
`;

const InfoChip = styled(BaseChip)`
  background-color: lightgray;
`;
