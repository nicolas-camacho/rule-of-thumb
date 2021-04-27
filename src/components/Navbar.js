//COMPONENT
import React from "react";
//UI
import { 
    Nav, 
    LogoText, 
    CenteredLayout, 
    NavLinks, 
    SearchInput ,
    SearchButton,
    Hamburger
} from "../ui";
//RESOURCES
import search from "url:../resources/images/search.svg";
import hamburger from "url:../resources/images/hamburger.svg";

export const Navbar = () => {
    return (
        <Nav>
            <CenteredLayout>
                <LogoText>Rule of thumb.</LogoText>
                <Hamburger>
                    <img src={`${hamburger}`} alt="Hamburger" />
                </Hamburger>
                <NavLinks>
                    <li>
                        <a href="#">Past Trials</a>
                    </li>
                    <li>
                        <a href="#">How It Works</a>
                    </li>
                    <li>
                        <a href="#">Login / Sign Up</a>
                    </li>
                    <li>
                        <form>
                            <SearchInput />
                            <SearchButton>
                                <img src={`${search}`} alt="Search"></img>
                            </SearchButton>
                        </form>
                    </li>
                </NavLinks>
            </CenteredLayout>
        </Nav>
    )
}