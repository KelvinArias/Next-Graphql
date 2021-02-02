import React, { useState } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Header from "./Header.jsx";
import Card from "./Card.jsx";
import TitleSearch from "./TitleSearch.jsx"
import { getItems } from "../store/actions/homeActions"


const Home = props => {
    const [searchValue, setSearch] = useState("Seattle")

    const handleInit = () => {
        const query = `
            {
                search(location: "${searchValue}") {
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
        props.getItems(query)
    }

    React.useEffect(handleInit, [searchValue]);
    const handleSearch = (newValue) => setSearch(newValue); 

    return (
        <React.Fragment>
            <Header setSearch={handleSearch} />
            <TitleSearch searchValue={searchValue} />
            <Card />
        </React.Fragment>
    )
} 

Home.propTypes = {
    data: PropTypes.object.isRequired,
    getItems: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    data: state.home
});
  
export default connect(mapStateToProps, { getItems })(Home);
