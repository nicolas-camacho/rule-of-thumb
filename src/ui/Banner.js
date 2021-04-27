import styled from "styled-components";

import {IconButton, VoteButton, CardVotesBar} from "./"

export const Banner = styled.aside`
    position: relative;
    display: flex;
    overflow: hidden;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    margin: 1rem;
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

export const BannerRuling = styled.div`
    position: relative;
    width: 100%;
    height: 170px;

    ${CardVotesBar} {
        z-index: 4;
    }
`

export const ComplexBackground = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        ${props => props.theme.darkBackground}, 
        ${props => props.theme.darkBackground}
    );
`

export const Photo = styled.div`
    position: absolute;
    width: 30%;
    height: 100%;
    background: linear-gradient(
        ${props => props.theme.darkBackground}, 
        ${props => props.theme.darkBackground}
    ), url('${props => props.photo}');
    background-size: cover;
`

export const Gradient = styled.div`
    z-index: 2;
    position: absolute;
    left: 15%;
    height: 100%;
    width: 85%;
    background: 
        linear-gradient(90deg, rgba(0,0,0,0.01) 0%, 
        rgba(136,136,136,1) 14%, rgba(102,102,102,1) 72%);
`

export const RulingBannerInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    h1 {
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
    
    p {
        color: ${props => props.theme.white};
        font-size: 15px;
        font-weight: 300;
        margin: 0;
    }
`

export const BannerVoteSection = styled.div`
    display: grid;
    grid-template-columns: 30% 50%;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    ${VoteButton} {
        width: 9rem;
    }
    
    span {
        grid-column-start: 1;
        grid-column-end: 3;
        color: ${props => props.theme.white};
        align-self: flex-end; 
        font-size: 12px;
        display: flex;
        justify-content: flex-end;
    }

    div {
        display: flex;
        gap: 1rem;
    }
`