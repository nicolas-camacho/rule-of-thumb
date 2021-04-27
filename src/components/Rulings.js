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
    CardVotesBar,
    ListLayout,
    BannerRuling,
    Gradient,
    Photo,
    ComplexBackground,
    ThumbnailList,
    RulingLayoutList,
    RulingBannerInfo,
    BannerVoteSection,
    Slider
} from "../ui";

import arrowDown from "url:../resources/images/arrow-down.svg"
import thumbUp from "url:../resources/images/thumbs-up.svg"
import thumbDown from "url:../resources/images/thumbs-down.svg"


const getGraterVotesThumbnail = (votes, Thumb) => {
    if(votes.positive > votes.negative) {
        return(
            <Thumb backgroundColor={props => props.theme.greenPositive}>
                <img src={`${thumbUp}`} />
            </Thumb>
        )
    }

    return(
        <Thumb backgroundColor={props => props.theme.yellowNegative}>
            <img src={`${thumbDown}`} />
        </Thumb>
    )
}

const calculatePercentages = ({positive, negative}) => {
    let percentPositive = (positive/(positive + negative))*100;
    let percentNegative = (negative/(positive + negative))*100;

    return [percentPositive.toFixed(1), percentNegative.toFixed(1)]
}

const getHumanTime = (date) => {
    let ago = moment.duration(moment().diff(date)).humanize() + " ago";
    return ago
}

const CardSlider = ({ items, thumbSelected, selectThumb, votePublic, resetButton }) => {
    return (
    <Slider>
        {items.length != 0 ?
            items.map((public, index) => {
                let [ positive, negative ] = calculatePercentages(public.votes)
                return (
                    <RulingCard key={index} photo={public.picture}>
                        <RulingCardHeader>
                            {getGraterVotesThumbnail(public.votes, Thumbnail)}
                            <CardTitleText>{public.name}</CardTitleText>
                        </RulingCardHeader>
                        <RulingCardBody>
                            <p>{public.description}</p>
                            {public.voted ? 
                            <span>Thanks for your vote!</span>
                            : <span>{getHumanTime(public.lastUpdated)} in {public.category}</span>}
                            <CardVoteSection>
                                {!public.voted ? (
                                    <>
                                        <ThumbButton 
                                        size={30} 
                                        backgroundColor={props => props.theme.greenPositive}
                                        selected={thumbSelected.id == public.id && thumbSelected.thumb == "up"}
                                        onClick={() => selectThumb(public.id, "up")}
                                        >
                                            <img src={`${thumbUp}`} />
                                        </ThumbButton>
                                        <ThumbButton 
                                            size={30} 
                                            backgroundColor={props => props.theme.yellowNegative}
                                            selected={thumbSelected.id == public.id && thumbSelected.thumb == "down"}
                                            onClick={() => selectThumb(public.id, "down")}
                                        >
                                            <img src={`${thumbDown}`} />
                                        </ThumbButton>
                                    </>
                                ) : null}
                                <VoteButton 
                                    disabled={public.voted ? false : thumbSelected.id != public.id} 
                                    onClick={public.voted ? () => resetButton(public.id) : votePublic}>
                                    {public.voted ? 'Vote Again' : 'Vote Now'}
                                </VoteButton>
                            </CardVoteSection>
                        </RulingCardBody>
                        <CardVotesBar positive={positive} negative={negative}>
                            <div><img src={`${thumbUp}`} />{positive}</div>
                            <div>{negative}<img src={`${thumbDown}`} /></div>
                        </CardVotesBar>
                    </RulingCard>
                )
            })
        : null}
    </Slider>)
}

const GridView = ({ items, thumbSelected, selectThumb, votePublic, resetButton }) => {
    return (
        <GridLayout>
            {items.length != 0 ? 
                items.map((public, index) => {
                    let [ positive, negative ] = calculatePercentages(public.votes)
                    return (
                    <RulingCard key={index} photo={public.picture}>
                        <RulingCardHeader>
                            {getGraterVotesThumbnail(public.votes, Thumbnail)}
                            <CardTitleText>{public.name}</CardTitleText>
                        </RulingCardHeader>
                        <RulingCardBody>
                            <p>{public.description}</p>
                            {public.voted ? 
                            <span>Thanks for your vote!</span>
                            : <span>{getHumanTime(public.lastUpdated)} in {public.category}</span>}
                            <CardVoteSection>
                                {!public.voted ? (
                                    <>
                                        <ThumbButton 
                                        size={30} 
                                        backgroundColor={props => props.theme.greenPositive}
                                        selected={thumbSelected.id == public.id && thumbSelected.thumb == "up"}
                                        onClick={() => selectThumb(public.id, "up")}
                                        >
                                            <img src={`${thumbUp}`} />
                                        </ThumbButton>
                                        <ThumbButton 
                                            size={30} 
                                            backgroundColor={props => props.theme.yellowNegative}
                                            selected={thumbSelected.id == public.id && thumbSelected.thumb == "down"}
                                            onClick={() => selectThumb(public.id, "down")}
                                        >
                                            <img src={`${thumbDown}`} />
                                        </ThumbButton>
                                    </>
                                ) : null}
                                <VoteButton 
                                    disabled={public.voted ? false : thumbSelected.id != public.id} 
                                    onClick={public.voted ? () => resetButton(public.id) : votePublic}>
                                    {public.voted ? 'Vote Again' : 'Vote Now'}
                                </VoteButton>
                            </CardVoteSection>
                        </RulingCardBody>
                        <CardVotesBar positive={positive} negative={negative}>
                            <div><img src={`${thumbUp}`} />{positive}</div>
                            <div>{negative}<img src={`${thumbDown}`} /></div>
                        </CardVotesBar>
                    </RulingCard>
                )})
            : null }
        </GridLayout>
    )
}

const ListView = ({ items, thumbSelected, selectThumb, votePublic, resetButton }) => {
    return (
        <ListLayout>
            {items.map((public, index) => {
                let [ positive, negative ] = calculatePercentages(public.votes)
                return(
                    <BannerRuling key={index}>
                        <ComplexBackground>
                            <Gradient />
                            <Photo photo={public.picture} />
                        </ComplexBackground>
                        {getGraterVotesThumbnail(public.votes, ThumbnailList)}
                        <RulingLayoutList>
                            <div></div>
                            <RulingBannerInfo>
                                <CardTitleText>{public.name}</CardTitleText>
                                <p>{public.description}</p>
                            </RulingBannerInfo>
                            <BannerVoteSection>
                                {public.voted ? 
                                <span>Thanks for your vote!</span>
                                : <span>{getHumanTime(public.lastUpdated)} in {public.category}</span>}
                                <div>
                                    {!public.voted ? <>
                                        <ThumbButton 
                                            size={40} 
                                            backgroundColor={props => props.theme.greenPositive}
                                            selected={thumbSelected.id == public.id && thumbSelected.thumb == "up"}
                                            onClick={() => selectThumb(public.id, "up")}
                                        >
                                            <img src={`${thumbUp}`} />
                                        </ThumbButton>
                                        <ThumbButton 
                                            size={40} 
                                            backgroundColor={props => props.theme.yellowNegative}
                                            selected={thumbSelected.id == public.id && thumbSelected.thumb == "down"}
                                            onClick={() => selectThumb(public.id, "down")}
                                        >
                                            <img src={`${thumbDown}`} />
                                        </ThumbButton>
                                    </> : null}
                                </div>
                                <VoteButton 
                                    disabled={public.voted ? false : thumbSelected.id != public.id} 
                                    onClick={public.voted ? () => resetButton(public.id) : votePublic}>
                                    {public.voted ? 'Vote Again' : 'Vote Now'}
                                </VoteButton>
                            </BannerVoteSection>
                        </RulingLayoutList>
                        <CardVotesBar positive={positive} negative={negative}>
                            <div><img src={`${thumbUp}`} />{positive}</div>
                            <div>{negative}<img src={`${thumbDown}`} /></div>
                        </CardVotesBar>
                    </BannerRuling>
                )
            })}
        </ListLayout>
    )
} 

export const Rulings = () => {
    const [mode, setMode] = useState("Grid");
    const [expand, setExpand] = useState(false);
    const [thumbSelected, setThumbSelected] = useState({
        id: "",
        thumb: ""
    });

    const selectThumb = (id, thumb) => {
        let newThumbSelected = {id, thumb}
        console.log(newThumbSelected);
        setThumbSelected(newThumbSelected);
    }

    const { state, dispatch } = useStore();

    const votePublic = () => {
        dispatch({ type: "voted", payload: thumbSelected});
        setThumbSelected({
            id: "",
            thumb: ""
        })
    };

    const resetButton = id => dispatch({ type: "reset", payload: id })

    const toggleList = () => setExpand(!expand);
    const toggleMode = newMode => {
        setMode(newMode);
        setExpand(false);
    }

    const View = () => {
        switch (mode) {
            case "Grid": 
                return <GridView 
                            items={state.publics}
                            thumbSelected={thumbSelected}
                            selectThumb={selectThumb}
                            votePublic={votePublic}
                            resetButton={resetButton}
                        /> ;
            
            case "List":
                return <ListView 
                            items={state.publics}
                            thumbSelected={thumbSelected}
                            selectThumb={selectThumb}
                            votePublic={votePublic}
                            resetButton={resetButton}
                        />;
        
            default:
                return <span>Error</span>;
        }
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
            {View()}
            <CardSlider 
                items={state.publics}
                thumbSelected={thumbSelected}
                selectThumb={selectThumb}
                votePublic={votePublic}
                resetButton={resetButton}
            />
        </>
    )
}