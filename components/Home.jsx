import React, { useState } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Header from "./Header.jsx";
import Card from "./Card.jsx";
import TitleSearch from "./TitleSearch.jsx"
import { getBusiness, getReviews, initLoading, markAsSeen } from "../store/actions/homeActions"
import Loading from "./Loading"


const Home = props => {
    const [searchValue, setSearch] = useState("Seattle")
    const { isLoading, businesses, viewedBusinesses } = props.data;
    const handleInit = () => {
        props.getBusiness(searchValue)
        props.initLoading({ isLoading: true })
    }

    const handleViewReview = ({ alias, id }) => {
        props.getReviews(alias);
        props.initLoading({ isLoadingReviews: true });
        props.markAsSeen(id)
    }

    React.useEffect(handleInit, [searchValue]);
    const handleSearch = (newValue) => setSearch(newValue);

    return (
        <React.Fragment>
            <Header setSearch={handleSearch} />
            <TitleSearch searchValue={searchValue} />
            {isLoading 
            ? <Loading /> 
            : (
                <div className="container mt-5">
                    <div className="row">
                        {businesses.map(business => (
                            <Card 
                                business={business}
                                key={business.id}
                                viewReview={handleViewReview}
                                viewed={viewedBusinesses.includes(business.id)}
                            />
                        ))}
                    </div>
                </div>
            )}
        </React.Fragment>
    )
} 

Home.propTypes = {
    data: PropTypes.object.isRequired,
    getBusiness: PropTypes.func.isRequired,
    getReviews:  PropTypes.func.isRequired,
    initLoading: PropTypes.func.isRequired,
    markAsSeen: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    data: state.home
});
  
export default connect(mapStateToProps, { 
    getBusiness, initLoading, markAsSeen, getReviews
})(Home);
