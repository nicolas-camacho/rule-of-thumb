import styled from 'styled-components';

export const Slider = styled.div`
    display: flex;
    overflow: auto;
    gap: 1rem;
    margin: 1rem;

    & > div {
        min-width: 300px;
    }
    
    &::-webkit-scrollbar {
        display: none;
    }

    @media all and (min-width: 768px) {
        display: none;
    }
`