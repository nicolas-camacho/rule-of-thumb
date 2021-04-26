import styled from "styled-components";

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

    @media all and (min-width: 1100px) {
        p {
            font-size: 1rem;
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