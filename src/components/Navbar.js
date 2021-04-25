//COMPONENT
import React from "react";
//UI
import { Nav, LogoText, CenteredLayout, NavLinks } from "../ui";

export const Navbar = () => {
    return (
        <Nav>
            <CenteredLayout>
                <LogoText>Rule of Thumb.</LogoText>
                <NavLinks>
                    <li>
                        <a>Past Trials</a>
                    </li>
                    <li>
                        <a>How It Works</a>
                    </li>
                    <li>
                        <a>Log In/Sign Up</a>
                    </li>
                    <li></li>
                </NavLinks>
            </CenteredLayout>
        </Nav>
    )
}