import styled from "styled-components";

export const IconButton = styled.button`
    padding: 0;
    border: 0;
    background-color: transparent;

    & > img {
        width: 100%;
        height: 100%;
    }
`
export const SearchButton = styled(IconButton)`
    width: 24px;
    height: 24px;
    margin-left: .5rem;

    @media all and (min-width: 1100px) {
        width: 2rem;
        height: 2rem;
    }
`

export const Hamburger = styled(IconButton)`
    position: relative;
    top: 2rem;
    right: 1rem;
    width: 25px;
    height: 20px;

    @media all and (min-width: 1100px) {
        display: none;
    }

`