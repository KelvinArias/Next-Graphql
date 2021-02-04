import React, { Fragment } from "react"
import style from "../scss/detail.module.scss"
import Stars from "./Stars.jsx"
import Image from "next/image" 
import Loading from "./Loading"
import { connect } from "react-redux"
import PropTypes from "prop-types";

const Content = props => {
    const { image_url, name, location,
        display_phone, review_count,
        rating, price, hours, is_closed
    } = props.data.businessDetail;
    const reviews = props.data.businessReview
    const hoursTable = hours ? hours[0].open : [];

    const mapInfo = [
        {title: "Address:", content: location.display_address.join(", ")},
        {title: "Phone:", content: display_phone},
        {title: "Total Reviews:", content: review_count},
        {title: "Price:", content: price},
    ]
    const days = {
        0: "Monday",
        1: "Tuesday",
        2: "Wednesday",
        3: "Thursday",
        4: "Friday",
        5:"Saturday",
        6: "Sunday"
    }

    const suitHour = (hour, ext) => {
        //If it is greater than 3 then the time goes past 9 and the time is set differently
        const newHour = hour.toString();
        const beforeThanNineAM = 3;
        return newHour.length === beforeThanNineAM
        ? `${newHour.charAt(0)}:${newHour.slice(1,3)} ${ext}`
        : `${newHour.slice(0,2)}:${newHour.slice(2,4)} ${ext}`
    }
    
    return (
        <Fragment>
            <div className={style.left}>
                {is_closed === "false" 
                    ? <div className={style.openOrClosed}><Image src="/image/open.svg" width={50} height={50} alt="is open" /></div> 
                    : <div className={style.openOrClosed}><Image src="/image/closed.svg" width={50} height={50} alt="is closed" /></div>
                }
                <Image
                    src={image_url}
                    alt="local image"
                    width={400}
                    height={400}
                />
                <div className={style.mask} />
                <Stars rating={rating} />
                <h3 className={style.title}>{name}</h3>
            </div>
            <div className={style.right}>
                {mapInfo.map(info => (
                    <div className="d-flex pb-2 info" key={info.title}>
                        <p className={`${style.text} mr-2`}><strong>{info.title}</strong></p>
                        <p className={style.text}>{info.content}</p>
                    </div>
                ))}
                {hoursTable.length !== 0 && (
                    <table className="rwd-table">
                        <thead>
                            <tr>
                                <th align="left" className={style.text}><strong>Hours</strong></th>
                                <th align="left" className={style.text}><strong>Closed</strong></th>
                            </tr>
                        </thead>
                        <tbody>
                            {hoursTable.map(hour => (
                                <tr key={days[hour.day]}>
                                    <td className={style.text}>{days[hour.day]}</td>
                                    <td className={style.text}>{`${suitHour(hour.start, "AM")} - ${suitHour(hour.end, "PM")}`}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
                <div className={style.reviews}>
                    <p className={`${style.text} mr-2 pt-2 pb-2`}><strong>Reviews</strong></p>
                    {props.data.isLoadingReviews ? <Loading /> : (
                        reviews.map(review => (
                            <div className="row pb-3 position-relative" key={review.id}>
                                <div className="col-xs-2 p-0">
                                    {review.user.image_url
                                        ? <Image className={style.image} src={review.user.image_url} alt="user" width={50} height={50} /> 
                                        : <Image className={style.image} src={"/image/user.svg"} alt="user" width={50} height={50} />   
                                    }
                                </div>
                                <div className="col-xs-10 p-0">
                                    <div className={style.box}>
                                        <p className={style.text}><strong>{review.user.name}</strong></p>
                                        <Stars rating={review.rating} />
                                    </div>
                                    <p className={style.text}>{review.text}</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </Fragment>
    )
}

Content.prototype = {
    data: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    data: state.home
});

const ContentDetail = connect(mapStateToProps, { })(Content);

const Detail = props => {
    return (
        <div className={style.modal}>
            <div className={style.close} onClick={() => props.closeDetail()}>
                <Image src="/image/buttonClose.svg" alt="Button close" width={20} height={20} />
            </div>
            <div className={style.content}>
                {props.isLoading ? <Loading/> : <ContentDetail />}
            </div>
        </div>
    )
}

export default Detail