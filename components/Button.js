import React from "react";

import styled from "styled-components";

export default function Button({ children, className, onClick = ()=>{}, ...props  }) {
  return (
    <StyledButton className={className} onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  border-radius: ${({ theme }) => theme.units.xs};
  padding: ${({ theme }) => theme.units.xs};
  cursor: pointer;
  border: none;
  background: transparent;
`;
