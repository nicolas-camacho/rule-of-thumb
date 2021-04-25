
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

        & > * {
            margin-right: 0;
            margin-left: 0;
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