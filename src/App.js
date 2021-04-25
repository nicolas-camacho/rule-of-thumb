import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";

import {theme, GlobalStyle} from "./ui";

import {
    Navbar,
    Header,
} from "./components";

import json from "./resources/data/data.json";

export default () => {
    const [publics, setPublics] = useState([]);

    useEffect(() => {
        if (JSON.parse(localStorage.getItem("publics")).length == 0){
            let mapJsonToData = json.data.map((person, index) => ({...person, "id":index+1, "voted":false}));
            setPublics(mapJsonToData)
        }
    },[]);

    useEffect(() => {
        localStorage.setItem("publics", JSON.stringify(publics))
    },[publics])

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Navbar />
            <Header />
        </ThemeProvider>
    )
}