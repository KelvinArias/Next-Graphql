import React, { useState } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Header from "./Header.jsx";
import Card from "./Card.jsx";
import TitleSearch from "./TitleSearch.jsx"
import Loading from "./Loading"
import Detail from "./Detail"
import { getBusiness, getReviews, initLoading, getDetail } from "../store/actions/homeActions"


const Home = props => {
    const [searchValue, setSearch] = useState("Seattle")
    const [openDetail, setOpen] = useState(false);
    const { isLoading, businesses, viewedBusinesses, businessDetail, isLoadingDetail } = props.data;

    const handleInit = () => {
        props.getBusiness(searchValue)
        props.initLoading({ isLoading: true })
    }

    const handleViewBusiness = ({ alias }) => {
        props.getDetail(alias);
        props.getReviews(alias);
        props.initLoading({ isLoadingReviews: true, isLoadingDetail: true });
        setOpen(true)
    }

    React.useEffect(handleInit, [searchValue]);
    const handleSearch = (newValue) => setSearch(newValue);
    const handleClose = () => setOpen(false)

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
                                viewBusiness={handleViewBusiness}
                                viewed={viewedBusinesses.includes(business.id)}
                            />
                        ))}
                    </div>
                </div>
            )}
            {openDetail && <Detail 
                closeDetail={handleClose} 
                business={businessDetail} 
                isLoading={isLoadingDetail} 
            />}
        </React.Fragment>
    )
} 

Home.propTypes = {
    data: PropTypes.object.isRequired,
    getBusiness: PropTypes.func.isRequired,
    getReviews:  PropTypes.func.isRequired,
    initLoading: PropTypes.func.isRequired,
    getDetail: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    data: state.home
});
  
export default connect(mapStateToProps, { 
    getBusiness, initLoading, getDetail, getReviews
})(Home);
