
import styled from "styled-components";

export const LogoText = styled.h1`
    margin: 2.5rem 0 0;
    color: ${props => props.theme.white};
    font-size: 36px;
    font-weight: 400;
    line-height: 2.5rem;

    @media all and (min-width: 1100px) {
        margin-top: 3rem;
    }
`

export const LightText = styled.p`
    margin: 0;
    font-weight: 300;
    white-space: nowrap;
`

export const LightTitleText = styled.div`
    margin: 0;
    font-weight: 300;
    font-size: 2rem;
    color: ${props => props.theme.darkGray}

    @media all and (min-width: 1100px) {
        font-size: 3rem;
    }
`

export const TitleText = styled.h2`
    margin: 0;
    font-size: 3rem;
    font-weight: 400;
    line-height: 1;
`

export const MainCardParagraph = styled.p`
    display: -webkit-box;
    overflow: hidden;
    max-height: 10.5rem;
    margin: 1rem 0;
    -webkit-box-orient: vertical;
    font-size: 1.25rem;
    font-weight: 300;
    -webkit-line-clamp: 6;
    text-overflow: ellipsis;

    @media all and (min-width: 1100px) {
        max-width: 85%;
        margin: 2rem 0 1rem;
    }
`

export const MoreInfoText = styled.p`
    display: none;

    @media all and (min-width: 768px) {
        display: inline-block;
        margin: 0;
        font-weight: 300;
    }
`

export const BoldText = styled.p`
    font-weight: 700;

    @media all and (min-width: 1100px) {
        margin: 1rem 0 2rem;
        font-size: 1.5rem;
    }
`

export const TitleTextHeroFooter = styled.span`
    @media all and (min-width: 1100px) {
        font-size: 1.25rem;
    }
`

export const TextHeroFooter = styled.span`
    color: ${props => props.theme.darkGray};
    font-size: 1.5rem;
    font-weight: 400;  

    @media all and (min-width: 1100px) {
        font-size: 2rem;
    }
`

export const TextHeroFooterLight = styled(TextHeroFooter)`
    font-weight: 300;  
`

export const CardTitleText = styled.h1`
    margin: 2.5rem 0 0;
    color: ${props => props.theme.white};
    font-size: 36px;
    font-weight: 400;
    line-height: 1.8rem;

    @media all and (min-width: 1100px) {
        margin-top: 3rem;
    }
`