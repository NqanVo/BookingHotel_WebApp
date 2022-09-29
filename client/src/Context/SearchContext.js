import { useReducer } from "react"
import { createContext } from "react"
import { useLocation } from "react-router-dom"

const INITAL_STATE = {
    keyWord: undefined,
    dateRange: [{ startDate: new Date(), endDate: new Date(), key: "selection" }],
    options: {
        adult: 1,
        children: 0,
        room: 1,
    }
}

export const SearchContext = createContext(INITAL_STATE)

const SearchReducer = (state, action) => {
    switch (action.type) {
        case "NEW_SEARCH": return action.payload
        case "RESET_SEARCH": return INITAL_STATE
        default: return state
    }
}

export const SearchContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(SearchReducer, INITAL_STATE)
    return (
        <SearchContext.Provider value={{ keyWord: state.keyWord, dateRange: state.dateRange, options: state.options, dispatch }}>
            {children}
        </SearchContext.Provider>
    )
}