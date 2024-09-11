import { createContext } from "react";

export const ItemContext = createContext()

export const UPLOAD_ITEMS = "UPLOAD_ITEMS"


export const  ItemReducer = (state,actions) => {
    switch (action) {
        case UPLOAD_ITEMS:
            return action.payload
    
        default:
            return state
    }
}