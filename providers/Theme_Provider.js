'use client'

import React from 'react'
import {ThemeProvider} from 'styled-components';

const theme = {
  colors: {
    primary: 'green',
    secondary: 'blue',
    default: 'unset', 
    input: '#D9D9D9',
  },

  breakpoints: {
    xs: '650px',
    sm: '960px',
    md: '1280px',
    lg: '1400px',
    xl: '1920px'
  },

  units: {
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    half: '50%',
    full: '100%',
  }
}

export default function Theme_Provider({children}) {

  return (
    <div>
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    </div>
  )
}
