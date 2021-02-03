import * as TYPES from "../types"
//import dataExample from "./dataExample"

const initialState = {
    businesses: [],
    viewedBusinesses: [],
    isLoading: true, 
    isLoadingReviews:true,
}

export default function historyReducer(state = initialState, action){
    switch (action.type){
        case TYPES.SET_BUSINESS:
            return {
                ...state,
                businesses: action.payload,
                isLoading: false,
            }
        case TYPES.SET_REVIEWS:
            return {
                ...state,
                reviews: action.payload,
                isLoadingReviews: false,
            }
        case TYPES.INIT_LOADING: 
            return {
                ...state,
                ...action.loadingToInit
            }
        case TYPES.MARK_AS_SEEN:
            return {
                ...state,
                viewedBusinesses: [...state.viewedBusinesses, action.id]
            }
        default:
            return state
    }
}