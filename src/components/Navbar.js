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
                <LogoText>Rule of Thumb.</LogoText>
                <Hamburger>
                    <img src={`${hamburger}`} />
                </Hamburger>
                <NavLinks>
                    <li>
                        <a href="#">Past Trials</a>
                    </li>
                    <li>
                        <a href="#">How It Works</a>
                    </li>
                    <li>
                        <a href="#">Log In/Sign Up</a>
                    </li>
                    <li>
                        <form>
                            <SearchInput />
                            <SearchButton>
                                <img src={`${search}`}></img>
                            </SearchButton>
                        </form>
                    </li>
                </NavLinks>
            </CenteredLayout>
        </Nav>
    )
}