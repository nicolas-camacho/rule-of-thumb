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
        -25vw 0/160vw no-repeat url(${pope});
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

export const RulingCard = styled.div`
    position: relative;
    height: 348px;
    background: linear-gradient(
        ${props => props.theme.darkBackground}, 
        ${props => props.theme.darkBackground}
    ),
    url(${props => props.photo}) center;
    background-size: cover;
`

export const RulingCardHeader = styled.div`
    display: grid;
    margin: 0rem 4rem 0rem 0;
    grid-template-columns: auto 100%;
    align-items: flex-end;
    grid-gap: 0.5rem;

    & > h1 {
        align-self: flex-end;
    }
`

export const RulingCardBody = styled.div`
    margin-left: 2rem;
    margin-right: 2rem;
    display: flex;
    flex-direction: column;

    p {
        color: ${props => props.theme.white};
        font-size: 15px;
        font-weight: 300;
    }

    span {
        color: ${props => props.theme.white};
        align-self: flex-end; 
        font-size: 12px;
    }
`

export const CardVoteSection = styled.div`
    display: flex;
    align-self: flex-end;
    margin: 1rem 0 0 2rem;
    gap: 1rem;
    align-items: center;
    font-size: 15px;
`

export const CardVotesBar = styled.div`
    position: absolute;
    width: 100%;
    bottom: 0;
    display: grid;
    margin: 0;
    grid-template-columns: ${props => props.positive}% ${props => props.negative}%;
    font-size: 1.2rem;
    color: ${props => props.theme.white};
    
    & > div:nth-child(1) {
        display: flex;
        justify-content: flex-start;
        padding-left: 5px;
        background-color: rgba(${props => props.theme.greenPositive}, .6);
    }

    & > div:nth-child(2) {
        display: flex;
        justify-content: flex-end;
        padding-right: 5px;
        background-color: rgba(${props => props.theme.yellowNegative}, .6);
    }
`