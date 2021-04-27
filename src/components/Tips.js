import React from "react";

import { 
    Banner, 
    BannerBackground, 
    BannerButtonContainer, 
    BannerLeft, 
    BannerRight, 
    BannerTitle, 
    BigSubmitButton, 
    CenteredLayout, 
    IconButton 
} from "../ui";

import bgPeople from "url:../resources/images/bg-people.png";
import bgPeople2x from "url:../resources/images/bg-people.@2x.png";

export const TipTop = () => {
    return (
        <Banner aria-label="Speak Out">
            <BannerLeft>
                <span>Speak out. Be heard.</span>
                <BannerTitle>Be counted</BannerTitle>
            </BannerLeft>
            <BannerRight>
                <p>
                    Rule of Thumb is a crowd sourced court of public opinion where 
                    anyone and everyone can speak out and speak freely. It’s easy: 
                    You share your opinion, we analyze and put the data in a public report.
                </p>
            </BannerRight>
            <IconButton>
                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><g stroke="#000" strokeWidth="2" fill="none" fillRule="evenodd"><path d="M1 19L19 1M1 1l18 18"/></g></svg>
            </IconButton>
        </Banner>
    )
}

export const TipBottom = () => {
    return (
        <Banner aria-label="Submit a name">
            <BannerBackground 
                srcSet={`${bgPeople} 750w, ${bgPeople2x} 1440w`}
                sizes="(min-width: 750px) 1440px, 100vw"
                src={`${bgPeople}`}
            />
            <div>
                <h2>Is there anyone else you would want us to add?</h2>
            </div>
            <BannerButtonContainer>
                <BigSubmitButton aria-label="close">
                    Submit a name
                </BigSubmitButton>
            </BannerButtonContainer>
        </Banner>
    )
}