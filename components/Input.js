import React from "react";
import styled from "styled-components";

export default function Input({
    labelText,
    borderRadius = 'xs',
    padding = '0',
    background = 'input',
    ...props
}){
    return <div>
        <StyledLabel>{labelText}</StyledLabel>
        <StyledInput 
            padding={padding} 
            background={background}
            borderRadius={borderRadius}
            {...props}
        />
    </div>
}

const StyledInput = styled.input`
    border-radius: ${({theme}) => theme.units['1']};
    padding: ${({theme, padding}) => theme.units[padding]};
    background: ${({theme, background}) => theme.colors[background]};
    border: none;
    width: 100%;
`

const StyledLabel = styled.label`
    display: block;
    margin-bottom: 10px;
`