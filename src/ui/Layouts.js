
import styled from "styled-components";

export const CenteredLayout = styled.div`
    display: contents;

    @media all and (min-width: 1100px) {
        position: relative;
        display: block;
        width: 100vw;
        max-width: 1100px;
        margin-right: auto;
        margin-left: auto;

        & > *,
        & > hr {
            margin-right: 0 !important;
            margin-left: 0 !important;
        }
    }
`

export const ButtonLayout = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 -1rem -1rem;

    & > button {
        width: 50%;
        height: 2.75rem;
    }

    & > button > img {
        max-width: 1.25rem;
    }

    @media all and (min-width: 768px) {
        margin: 0 -1.5rem -2rem;
    }

    @media all and (min-width: 1100px) {
        margin: 0 -1.5rem -2rem;

        & > button {
            height: auto;
        }

        & > button > img {
            max-width: 2rem;
            height: 2rem;
            margin: 1.3rem 0;
        }
    }    
`

export const FooterLayout = styled.footer`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin: 0 1rem 3rem;

    @media all and (min-width: 768px) {
        align-items: flex-start;
    }
`

export const LinksLayout = styled.div`
    li {
        padding: .5rem 0;
        font-size: 1.25rem;
    }

    li a {
        color: ${props => props.theme.darkGray};
        text-decoration: none;
    }

    li a:hover {
        color: ${props => props.theme.darkerGray};
        text-decoration: underline;
    }

    @media all and (min-width: 768px) {
        ul {
            display: flex;
        }

        ul li {
            padding: 0;
            margin-right: 2rem;
            font-size: 1rem;
        }
    }
`

export const SocialLayout = styled.div`
    & > span {
        color: var(--color-darker-gray);
        font-size: 1.25rem;
        text-align: right;
    }

    & > ul {
        display: flex;
        margin-top: 1rem;
    }

    & > ul > li {
        margin-right: 1rem;
    }

    @media all and (min-width: 768px) {
        display: flex;
        align-items: center;

        span {
            margin-right: 1rem;
            color: ${props => props.theme.darkGray};
            font-size: 0.833rem;
        }

        & > ul {
            margin-top: 3px;
        }
    }
`

export const RulingsHeadLayout = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1rem;
`

export const GridLayout = styled.div`
    display: none;
    grid-template-columns: 1fr;
    column-gap: 27px;
    row-gap: 27px;
    margin: 1rem;

    @media all and (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    @media all and (min-width: 1100px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`