import styled from "styled-components";

import { IconButton } from "./"

export const Dropdown = styled.div`
    width: 9rem;
    color: ${props => props.theme.darkerGray};
    display: none;

    @media all and (min-width: 768px) {
        display: block;
    }
`

export const DropdownHeader = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    border: 2px solid ${props => props.theme.darkerGray};

    span {
        display: flex;
        justify-content: center;
        width: 80%;
        font-size: .8rem;
    }

    button {
        width: 20%;
    }
`

export const DropdownArrow = styled(IconButton)`
    display: grid;
    place-items: center;
    img {
        width: 1rem;
        height: .7rem;
    }
`

export const DropdownList = styled.div`
    position: absolute;
    width: 9.2rem;
    font-size: .8rem;
    z-index: 2;

    & > div {
        border: 2px solid ${props => props.theme.darkerGray};
        border-width: 0 2px 2px 2px;
        display: grid;
        place-items: center;
        padding: 10px;
        background-color: ${props => props.theme.white};
        cursor: pointer;
    }
`