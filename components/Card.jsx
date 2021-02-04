import React, { Fragment } from "react"
import style from "../scss/card.module.scss"
import Image from "next/image" 
import Stars from "./Stars.jsx"

const Card = props => {
    const { image_url, name, location, display_phone, review_count, rating } = props.business;
    const { viewed } = props;

    return (
        <div className="col-xs-6 col-sm-4 col-md-3 p-3">
            <div className={style.card} onClick={() => props.viewBusiness(props.business)}>
                <div className={style.header}>
                    <Image
                        src={image_url}
                        alt="local image"
                        width={400}
                        height={400}
                    />
                    <Stars rating={rating} />
                    <div className={style.mask} />
                    {viewed && (
                        <div className={style.eye}>
                            <Image src={"/image/view.svg"} alt="viewed_eye" width={25} height={25} className={style.eye}/>
                        </div>
                    )}
                </div>
                <div className="card-body p-3">
                    <h3 className={viewed ? `m-0 mr-2 ${style.viewed}` : "m-0 mr-2"}>{name}</h3>
                    <div>
                        <div className="d-flex mt-2">
                            <div className="p-0">
                                <Image src={"/image/direction.svg"} alt="direction icon" width={20} height={20} />
                            </div>
                            <div className="p-1">
                                <p className={`${style.size} ${style.address} m-0`}>{location.display_address.join(", ")}</p>
                            </div>
                        </div>
                        <div className="d-flex mt-2">
                            {display_phone && (
                                <div className="d-flex">
                                    <Image src={"/image/phone-call.svg"} alt="phone  icon" width={16} height={16} />
                                    <p className={`${style.size} p-1 pl-2 m-0`}>{display_phone} | </p>
                                </div>
                            )}
                            <div className="p-1 d-flex">
                                <Image src={"/image/review.svg"} alt="review icon" width={20} height={20} />
                                <p className={`${style.size} m-0  ml-2`}>{review_count > 1 ? `${review_count} reviews` : `${business.review_count} review` }</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
    )
}

export default Card