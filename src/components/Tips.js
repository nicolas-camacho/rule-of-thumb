import React from "react";
import { Banner, BannerLeft, BannerRight, BannerTitle, CenteredLayout } from "../ui";

export const TipTop = () => {
    return (
        <CenteredLayout>
            <Banner>
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
            </Banner>
        </CenteredLayout>
    )
}