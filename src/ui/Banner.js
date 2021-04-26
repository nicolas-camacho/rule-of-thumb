import styled from "styled-components";

import {IconButton} from "./"

export const Banner = styled.aside`
    position: relative;
    display: flex;
    overflow: hidden;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    background-color: ${props => props.theme.lightGray};

    p {
        margin: 0;
        color: ${props => props.theme.darkGray};
        font-size: 1.25rem;
        font-weight: 300;
        letter-spacing: -.05rem;
    }

    ${IconButton} {
        display: none;
    }

    h2 {
        position: relative;
        margin: 0 0 1rem;
        color: ${props => props.theme.darkGray};
        font-size: 2rem;
        font-weight: 400;
        text-align: center;
    }

    @media all and (min-width: 768px) {
        h2 {
            margin-bottom: 0;
            font-size: 1.5rem;
        }
    }

    @media all and (min-width: 1100px) {
        p {
            font-size: 1rem;
        }

        ${IconButton} {
            display: block;
            margin-left: 2rem;
        }
    }
`

export const BannerLeft = styled.div`
    flex-basis: 40%;
    padding-right: 1rem;

    & > span:first-of-type {
        color: ${props => props.theme.darkGray};
        font-size: 1.25rem;
        font-weight: 300;
        letter-spacing: -.07rem;
    }

    @media all and (min-width: 500px) {
        flex-basis: 30%;
    }

    @media all and (min-width: 768px) {
        flex-basis: 20%;
    }

    @media all and (min-width: 1100px) {
        & > span:first-of-type {
            font-size: 1rem;
        }
    }
`

export const BannerTitle = styled.div`
    display: block;
    color: ${props => props.theme.darkGray};
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: -.05rem;

    @media all and (min-width: 1100px) {
        font-size: 1.5rem;
        letter-spacing: 0;   
    }
`

export const BannerRight = styled.div`
    flex-basis: 60%;

    @media all and (min-width: 500px) {
        flex-basis: 70%;
    }

    @media all and (min-width: 768px) {
        flex-basis: 80%;
    }
`

export const BannerBackground = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    object-fit: cover;
    opacity: .2;
    pointer-events: none;

    @media all and (min-width: 768px) {
        top: -230%;
    }
`

export const BannerButtonContainer = styled.div`
    width: 100%;

    @media all and (min-width: 768px) {
        width: auto;
    }
`