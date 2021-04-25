import styled from "styled-components";

export const SearchInput = styled.input`
    width: 25vw;
    border: 0;
    border-bottom: 2px solid var(--color-white);
    background-color: transparent;
    border-radius: 0;
    color: var(--color-white);
    font-family: 'Lato', sans-serif;
    font-size: 1.5rem;
    transition: width .2s ease-in;

    &:focus {
        width: 60vw;
        outline: 0 none;
    }

    @media all and (min-width: 1100px) {
        display: none;
    }
`