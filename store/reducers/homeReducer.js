import * as types from "../types"

const initialState = {
    businesses: [],
    isLoadingBusiness: true
}

export default function historyReducer(state = initialState, action){
    switch (action.type){
        case "SET_BUSINESS":
            return {
                ...state,
                businesses: action.payload,
                isLoadingBusiness: false,
            }
        default:
            return state
    }
}