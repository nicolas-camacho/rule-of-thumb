//CORE
import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
//COMPONENTS
import {
    Navbar
} from "./components";

const theme = {
    "fontFamily": "'Lato', sans-serif",
    "greenPositive": "60, 187, 180",
    "yellowNegative": "249, 173, 29",
    "darkBackground": "rgba(0, 0, 0, .4)",
    "darkerBackground": "rgba(0, 0, 0, .6)",
    "darkerGray": "rgba(51, 51, 51, 1)",
    "darkGray": "rgba(70, 70, 70, 1)",
    "lightGray": "rgba(235, 235, 235, 1)",
    "lightBackground": "rgba(255, 255, 255, .4)",
    "lighterBackground": "rgba(255, 255, 255, .8)",
    "white": "rgba(255, 255, 255, 1)"
}

const GlobalStyle = createGlobalStyle`
    body {
        font-family: ${props => props.theme.fontFamily};
        width: 100%;
        margin: 0;
        background-color: ${props => props.theme.white};
        font-size: 12px;
        font-weight: 400;
    }
`

export default () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Navbar />
        </ThemeProvider>
    )
}