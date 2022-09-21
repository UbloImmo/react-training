import React from "react";
import styled from "styled-components";

export type ChipStatus = "success" | "error" | "warning";

interface Props {
  status: ChipStatus;
  className?: string;
}

export const Chip = (props: Props) => {
  switch (props.status) {
    case "success":
      return <SuccessChip className={props.className}>Success</SuccessChip>;
    case "error":
      return <ErrorChip className={props.className}>Error</ErrorChip>;
    case "warning":
      return <WarningChip className={props.className}>Warning</WarningChip>;
    default:
      return <Never check={props.status} />;
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
