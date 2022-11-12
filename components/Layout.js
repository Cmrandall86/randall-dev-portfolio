import React from 'react'
import styled, {ThemeProvider} from 'styled-components';

import NavBar from './NavBar'
import Footer from './Footer';

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

  fonts: {
    primary:'Oswald, sans-serif',
    secondary: 'Kaushan Script, cursive'

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



export default function Layout({children}) {

  return (
    <>
        <ThemeProvider theme={theme}>
            <NavBar/>
            <main>{children}</main>
            <Footer/>
        </ThemeProvider>
    </>
  )
}
