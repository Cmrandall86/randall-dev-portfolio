import React from 'react'

import styled from 'styled-components'


const StyledText = styled.span`
    font-size: ${props => props.xl ? '24px' : '14px' };
    font-family: sans-serif;
`

export default StyledText