import styled from "styled-components";

export const Hero = styled.header`
    position: relative; 
    overflow: hidden;
    height: 80vw;
    min-height: 35rem;
    max-height: 38rem;
    margin-bottom: 2rem;

    @media all and (min-width: 768px) {
        max-height: 38rem;
    }

    @media all and (min-width: 1100px) {
        min-height: 700px;
    }
`

export const HeroBackground = styled.img`
    position: absolute;
    left: -35vw;
    width: 160vw;
    height: 100%;
    object-fit: cover;

    @media all and (min-width: 768px) {
        top: -6.5rem;
        left: 0;
        width: 110vw;
        height: auto;
    }

    @media all and (min-width: 1100px) {
        top: -2.5rem;
        left: 0;
        width: 100vw;
        height: auto;
    }
`