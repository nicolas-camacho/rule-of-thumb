import styled from "styled-components";

export const IconButton = styled.button`
    padding: 0;
    border: 0;
    background-color: transparent;
    cursor: pointer;

    & > img {
        width: 100%;
        height: 100%;
    }
`

export const Thumbnail = styled.div`
    background-color: rgb(${props => props.backgroundColor});
    padding: 0;
    border: 0;
    width: 30px;
    height: 30px;
    display: grid;
    place-items: center;
    margin-right: 6px;

    & > img {
        width: 60%;
        height: 60%;
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

export const ColoredButton = styled(IconButton)`
    background-color: rgba(${props => props.backgroundColor}, .8);

    &:hover {
        background-color: rgba(${props => props.backgroundColor}, 1);
    }
`

export const BigSubmitButton = styled.button`
    position: relative;
    display: block;
    width: 100%;
    padding: 1rem 0;
    border: 2px solid ${props => props.theme.darkerBackground};
    background: transparent;
    color: ${props => props.theme.darkerGray};
    font-size: 1.5rem;

    @media all and (min-width: 768px) {
        width: 16rem;
    }

    @media all and (min-width: 1100px) {
        width: 20rem;
    }
`