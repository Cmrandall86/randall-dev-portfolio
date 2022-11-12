import React from "react";

import styled from "styled-components";
import { Button } from "@nextui-org/react";

export default function Btn({ children, className, onClick = ()=>{}, ...props  }) {
  return (
    <StyledButton className={className} onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled(Button)`
  border-radius: ${({ theme }) => theme.units.xs};
  padding: ${({ theme }) => theme.units.xs};
  cursor: pointer;
  border: none;
  background: transparent;
`;
