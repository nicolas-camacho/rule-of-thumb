import styled from "styled-components";

import pope from "url:../resources/images/pope-francis.png";

export const Card = styled.div`
    position: relative;
    top: 5.5rem;
    left: 1rem;
    overflow: hidden;
    width: 55vw;
    max-height: 25rem;

    @media all and (min-width: 1100px) {
        left: 0;
        width: 50%;
        min-width: 600px;
        max-height: unset;
        margin-top: 2.5rem;
    }

`

export const GlassedCardEffect = styled.div`
    position: absolute;
    top: -20%;
    left: -20%;
    width: 140%;
    height: 140%;
    background:
        center no-repeat linear-gradient(
            ${props => props.theme.darkBackground},
            ${props => props.theme.darkBackground}
        ),
        -25vw 0/160vw no-repeat url('${pope}');
    filter: blur(1rem);

    @media all and (min-width: 768px) {
        background:
            center no-repeat linear-gradient(
                ${props => props.theme.darkBackground}, 
                ${props => props.theme.darkBackground}
            ),
            7vw -6.5rem/115vw auto no-repeat url(${pope});
    }

    @media all and (min-width: 1100px) {
        background:
            center no-repeat linear-gradient(
                ${props => props.theme.darkBackground}, 
                ${props => props.theme.darkBackground}
            ),
            calc(-50vw + 650px) -6rem/105vw auto no-repeat url(${pope});
    }
`

export const CardContentContainer = styled.div`
    position: relative;
    padding: 1rem;
    color: ${props => props.theme.white};

    @media all and (min-width: 768px) {
        padding: 2rem 1.5rem;
    }

    @media all and (min-width: 1100px) {
        padding: 2rem 1.5rem;
    }
`