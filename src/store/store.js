import React, {useContext, useReducer, createContext} from "react";

import initial from "../resources/data/data.json";

const initialState = {
    publics: localStorage.getItem("publics") ? 
        localStorage.getItem("publics") : 
        initial.data.map((person, index) => ({...person, "id":index+1, "voted":false})),
    mainVote: localStorage.getItem("vote") ? localStorage.getItem("vote") : "none"
};

const StoreContext = createContext(initialState);

const actions = (state, action) => {
    switch (action.type) {
        case "publicsUpdated":
            return updatePublics(state, action);
        case "mainVoteUpdated":
            return updateMainVote(state, action);
        default:
            console.log("Default")
    }
}

const updatePublics = (state, action) => {
    localStorage.setItem("publics", action.payload);
    return{...state, publics: action.payload};
};

const updateMainVote = (state, action) => {
    localStorage.setItem("vote", action.payload);
    return {...state, mainVote: action.payload};
}

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(actions, initialState);
    return (
        <StoreContext.Provider value={{state, dispatch}}>
            {children}
        </StoreContext.Provider>
    )
}

export const useStore = store => {
    const {state, dispatch} = useContext(StoreContext);
    return {state, dispatch}
}