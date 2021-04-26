import React, {useContext, useReducer, createContext, useEffect} from "react";
import firebase from "./firebase";

const StoreContext = createContext();

const reducer = (state, action) => {
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
    return{...state, publics: action.payload};
};

const updateMainVote = (state, action) => {
    return {...state, mainVote: action.payload};
}

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, {
        publics: [],
        mainVote: []
    });

    const getPublics = () => {
        let unsubscribe = firebase
        .firestore()
        .collection('publics')
        .onSnapshot( snapshot => {
            const data = snapshot.docs.map( doc => {
                return {
                    id : doc.id,
                    ...doc.data()
                }
            })
            dispatch({ type: "publicsUpdated", payload: data});
        })
    
        return () => unsubscribe()
    }
    
    const getCurrent = () => {
        let unsubscribe = firebase
        .firestore()
        .collection('currentRuling')
        .onSnapshot( snapshot => {
            const data = snapshot.docs.map( doc => {
                return {
                    id : doc.id,
                    ...doc.data()
                }
            })
            dispatch({ type: "mainVoteUpdated", payload: data});
        })
    
        return () => unsubscribe()
    }

    useEffect(() => {
        getPublics();
        getCurrent();
    },[])

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