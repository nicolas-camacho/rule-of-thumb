
import styled from "styled-components";

export const LogoText = styled.h1`
    margin: 2.5rem 0 0;
    color: ${props => props.theme.white};
    font-size: 2rem;
    font-weight: 400;
    line-height: 2.5rem;

    @media all and (min-width: 1100px) {
        margin-top: 3rem;
    }
`