import React, { useState } from "react";
import { useStore } from "../store"

import { 
    LightTitleText, 
    RulingsHeadLayout, 
    Dropdown, 
    DropdownHeader, 
    DropdownArrow, 
    DropdownList, 
    GridLayout, 
    RulingCard,
    LogoText,
    Thumbnail,
    RulingCardHeader,
    CardTitleText
} from "../ui";

import arrowDown from "url:../resources/images/arrow-down.svg"
import thumbUp from "url:../resources/images/thumbs-up.svg"
import thumbDown from "url:../resources/images/thumbs-down.svg"

export const Rulings = () => {
    const [mode, setMode] = useState("Grid");
    const [expand, setExpand] = useState(false);

    const { state, dispatch } = useStore();

    const toggleList = () => setExpand(!expand);
    const toggleMode = newMode => {
        setMode(newMode);
        setExpand(false);
    }

    const getGraterVotesThumbnail = (votes) => {
        if(votes.positive > votes.negative) {
            return(
                <Thumbnail backgroundColor={props => props.theme.greenPositive}>
                    <img src={`${thumbUp}`} />
                </Thumbnail>
            )
        }

        return(
            <Thumbnail backgroundColor={props => props.theme.yellowNegative}>
                <img src={`${thumbDown}`} />
            </Thumbnail>
        )
    } 

    return (
        <>
            <RulingsHeadLayout>
                <LightTitleText>Previous Rulings</LightTitleText>
                <Dropdown>
                    <DropdownHeader>
                        <span>{mode}</span>
                        <DropdownArrow onClick={toggleList}>
                            <img src={`${arrowDown}`}/>
                        </DropdownArrow>
                    </DropdownHeader>
                    {expand ? 
                        <DropdownList>
                            <div onClick={() => toggleMode("Grid")}>Grid</div>
                            <div onClick={() => toggleMode("List")}>List</div>
                        </DropdownList> 
                    : null}
                </Dropdown>
            </RulingsHeadLayout>
            <GridLayout>
                {state.publics.length != 0 ? 
                    state.publics.map((public, index) => (
                        <RulingCard key={index} photo={public.picture}>
                            <RulingCardHeader>
                                {getGraterVotesThumbnail(public.votes)}
                                <CardTitleText>{public.name}</CardTitleText>
                            </RulingCardHeader>
                        </RulingCard>
                    ))
                : null }
            </GridLayout>
        </>
    )
}