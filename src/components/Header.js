import React from "react";

import { Hero, HeroBackground } from "../ui";

import pope from "url:../resources/images/pope-francis.png";
import pope2x from "url:../resources/images/pope-francis.@2x.png";

export const Header = () => {
    return (
        <Hero>
            <HeroBackground 
                srcSet={`${pope} 750w, ${pope2x} 1440w`}
                sizes="(min-width: 750px) 1440px, 100vw"
                src={`${pope}`}
            />
        </Hero>
    )
}