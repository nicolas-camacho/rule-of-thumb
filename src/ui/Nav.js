import styled from 'styled-components';

export const Nav = styled.nav`
    position: fixed;
    z-index: 2;
    top: 0;
    display: flex;
    width: calc(100vw - 2rem);
    min-height: 10rem;
    justify-content: space-between;
    padding: 0 1rem;
    background: linear-gradient(
        to bottom, 
        rgba(0, 0, 0, .8) 0%, 
        rgba(0, 0, 0, 0) 80%
    );

    @media all and (min-width: 1100px) {
        min-height: 22vh;
    }
`

export const NavLinks = styled.ul`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    width: 100vw;
    height: calc(100vh - 4rem);
    flex-direction: column;
    padding: 4rem 0 2rem;
    background-color: ${props => props.theme.darkerBackground};
    transform: translateX(100vw);
    list-style: none;
    margin: 0;

    li {
        width: 100%;
        margin: 3rem 0;
        font-size: 2rem;
        text-align: center;
        cursor: pointer;
    }

    a {
        color: ${props => props.theme.white};
        text-decoration: none;
    }

    @media all and (min-width: 1100px) {
        position: absolute;
        top: 3rem;
        right: 0;
        left: auto;
        width: 40vw;
        height: auto;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        padding: 0;
        background-color: transparent;
        transform: translateX(0);

        li {
            width: fit-content;
            margin: 0 1rem 0 0;
            font-size: 1rem;
            font-weight: 300;
            text-align: right;
        }

        li:last-child {
            order: 0;
        }
    }
`