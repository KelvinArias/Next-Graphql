import React from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Header from "./Header.jsx";
import Card from "./Card";
// import '../scss/main.module.scss';
// import { GraphQLClient } from 'graphql-request'
// import { getItems } from "../store/actions/historyActions"


const Home = props => {


    // const handleInit = () => {
    //     // const corsHeroku = "https://cors-anywhere.herokuapp.com/";
    //     // const query = `
    //     //     {
    //     //         search(term: "burrito", location: "san francisco", limit: 5) {
    //     //             total
    //     //             business {
    //     //                 name
    //     //                 url
    //     //             }
    //     //         }
    //     //     }
    //     // `;
    //     // const endpoint = "https://api.yelp.com/v3/graphql"
    //     // const graphQLClient = new GraphQLClient(endpoint, {
    //     //     method: 'POST',
    //     //     headers: {
    //     //         'Authorization': `Bearer ${API_KEY}`,
    //     //         'Content-Type': "application/graphql",
    //     //     },
    //     // })
    //     //const data = await graphQLClient.request(query)
    //     // const endpoint = "https://api.yelp.com/v3/businesses/search?term=restaurants&limit=5";
    //     // const api = corsHeroku + endpoint;
    //     // const API_KEY = "c0WHmI0f51Njg9KZgMbCDYFNj7P6OkfPyszhpv9R_sCaD0yw9k4EMTdELnHRi0UMNPw_TnuPxqJpqarTIUOeaPZ7GJ-mBXsldj6akz62TN5ToG6o7MGbuaqWjikTYHYx";
    //     // fetch(endpoint,{
    //     //     headers: { 
    //     //         "Authorization": `Bearer ${API_KEY}`,
    //     //     },
    //     // }).then(res => console.log(res.data))
    //     // console.log(endpoint)
    // }

    // React.useEffect(handleInit, []);


    return (
        <React.Fragment>
            <Header />
            <Card />
        </React.Fragment>
    )
} 

Home.propTypes = {
    data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    data: state.home
});
  
export default connect(mapStateToProps, {  })(Home);
