const endpoint = "http://localhost:4000/"
import { GraphQLClient } from 'graphql-request'

export const getItems = query => async dispatch  =>  {
    try {
        const graphQLClient = new GraphQLClient(endpoint, {method: 'POST'})
        const data = await graphQLClient.request(query)
        dispatch({
            type: "SET_BUSINESS",
            payload: data.search
        })
    } catch (error) {
        console.log(error)
    }
}