import * as TYPE from "../types"
const endpoint = "http://localhost:4000/"
import { GraphQLClient } from 'graphql-request'

export const getBusiness = (location) => async dispatch  =>  {
    try {
        const query = `
            {
                search(location: "${location}"){
                    id
                    name
                    alias
                    rating
                    review_count
                    display_phone
                    image_url
                    location{
                        display_address
                    }
                }
            }
        `;
        const graphQLClient = new GraphQLClient(endpoint, {method: 'POST'})
        const data = await graphQLClient.request(query)
        dispatch({
            type: TYPE.SET_BUSINESS,
            payload: data.search
        })
    } catch (error) {
        console.log(error)
    }
}

export const getReviews = (alias) => async dispatch  =>  {
    try {
        const query = `
            {
                getReviews(alias: "${alias}"){
                    id
                    rating
                    user {
                        id
                        name
                        profile_url
                        image_url
                    }
                    text
                    time_created
                }
            }
        `
        const graphQLClient = new GraphQLClient(endpoint, {method: 'POST'})
        const data = await graphQLClient.request(query)
        dispatch({
            type: TYPE.SET_REVIEWS,
            payload: data.getReviews
        })
    } catch (error) {
        console.log(error)
    }
}

export const initLoading = (loadingToInit) => ({
    type: TYPE.INIT_LOADING,
    loadingToInit
})

export const markAsSeen = id => ({
    type: TYPE.MARK_AS_SEEN,
    id
})