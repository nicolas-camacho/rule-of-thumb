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

export const HeroFooter = styled.div`
    position: absolute;
    bottom: 0;
    display: flex;
    width: 100%;
    height: 3rem;
    background-color: ${props => props.theme.lightBackground};
`

export const HeroFooterLeft = styled.div`
    position: relative;
    display: flex;
    width: 30%;
    align-items: center;
    justify-content: flex-end;
    padding: 0 .25rem 0 0;
    background-color: ${props => props.theme.darkBackground};
    color: ${props => props.theme.white};
    font-weight: 300;
    text-transform: uppercase;

    &:after {
        position: absolute;
        right: -.5rem;
        display: block;
        width: 0;
        height: 0;
        border-top: 0.25rem solid transparent;
        border-bottom: 0.25rem solid transparent;
        border-left: 0.5rem solid ${props => props.theme.darkBackground};
        content: ' ';
    }

    @media all and (min-width: 1100px) {
        padding-right: 1rem;

        &:after {
            border-top-width: 0.33rem;
            border-bottom-width: 0.33rem;
        }
    }    
`

export const HeroFooterRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 0 0 .75rem;

    @media all and (min-width: 1100px) {
        padding-left: 1rem;
    }
`