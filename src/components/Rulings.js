import React, { useState } from "react";
import moment from "moment";
import { useStore } from "../store";

import { 
    LightTitleText, 
    RulingsHeadLayout, 
    Dropdown, 
    DropdownHeader, 
    DropdownArrow, 
    DropdownList, 
    GridLayout, 
    RulingCard,
    Thumbnail,
    RulingCardHeader,
    CardTitleText,
    RulingCardBody,
    ThumbButton,
    CardVoteSection,
    VoteButton,
    CardVotesBar
} from "../ui";

import arrowDown from "url:../resources/images/arrow-down.svg"
import thumbUp from "url:../resources/images/thumbs-up.svg"
import thumbDown from "url:../resources/images/thumbs-down.svg"


const GridView = ({ items, calculatePercentages, getGraterVotesThumbnail, getHumanTime }) => {
    return (
        <GridLayout>
            {items.length != 0 ? 
                items.map((public, index) => {
                    let [ positive, negative ] = calculatePercentages(public.votes)
                    return (
                    <RulingCard key={index} photo={public.picture}>
                        <RulingCardHeader>
                            {getGraterVotesThumbnail(public.votes)}
                            <CardTitleText>{public.name}</CardTitleText>
                        </RulingCardHeader>
                        <RulingCardBody>
                            <p>{public.description}</p>
                            {public.voted ? 
                            <span>Thanks for your vote!</span>
                            : <span>{getHumanTime(public.lastUpdated)} in {public.category}</span>}
                            <CardVoteSection>
                                <ThumbButton backgroundColor={props => props.theme.greenPositive}>
                                    <img src={`${thumbUp}`} />
                                </ThumbButton>
                                <ThumbButton backgroundColor={props => props.theme.yellowNegative}>
                                    <img src={`${thumbDown}`} />
                                </ThumbButton>
                                <VoteButton>
                                    Vote Now
                                </VoteButton>
                            </CardVoteSection>
                        </RulingCardBody>
                        <CardVotesBar positive={positive} negative={negative}>
                            <div>{positive}</div>
                            <div>{negative}</div>
                        </CardVotesBar>
                    </RulingCard>
                )})
            : null }
        </GridLayout>
    )
}

export const Rulings = () => {
    const [mode, setMode] = useState("Grid");
    const [expand, setExpand] = useState(false);

    const { state, dispatch } = useStore();

    const toggleList = () => setExpand(!expand);
    const toggleMode = newMode => {
        setMode(newMode);
        setExpand(false);
    }

    const getHumanTime = (date) => {
        let ago = moment.duration(moment().diff(date)).humanize() + " ago";
        return ago
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

    const calculatePercentages = ({positive, negative}) => {
        let percentPositive = (positive/(positive + negative))*100;
        let percentNegative = (negative/(positive + negative))*100;

        return [percentPositive.toFixed(1), percentNegative.toFixed(1)]
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
            <GridView 
                items={state.publics} 
                calculatePercentages={calculatePercentages} 
                getGraterVotesThumbnail={getGraterVotesThumbnail} 
                getHumanTime={getHumanTime}
            />
        </>
    )
}