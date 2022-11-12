import React from 'react'

import styled from "styled-components";
import mediaQueries from './Breakpoints';

export default function Form({
    onSubmit = ()=> {},
    children,
    name = '',
    method = '',
    width='',
    ...props

}) {
  return (
    <StyledForm
      onSubmit={onSubmit}
      name={name}
      method={method}
      width={width}
    >
      {children}
    </StyledForm>
  )
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: ${props => props.mobileWidth};
  gap: 20px;
  
  ${mediaQueries('min', 'md')}{
    width: ${props => props.width};
  }


`
