import React, { Fragment } from "react"
import style from "../scss/card.module.scss"
import Image from "next/image"

const starsInfo = [
    { id:"star5" , value: 5, htmlFor:"star5" , title:"Awesome" },
    { id:"star4half" , value: 4.5, htmlFor:"star4half" , title:"pretty good" },
    { id:"star4" , value: 4, htmlFor:"star4" , title:"good" },
    { id:"star3half" , value: 3.5, htmlFor:"star3half" , title:"Meh - 3.5 stars" },
    { id:"star3" , value: 3, htmlFor:"star3" , title:"Meh - 3 stars" },
    { id:"star2half" , value: 2.5, htmlFor:"star2half" , title:"Kinda bad - 2.5 stars" },
    { id:"star2" , value: 2, htmlFor:"star2" , title:"Kinda bad - 2 stars" },
    { id:"star1half" , value: 1.5, htmlFor:"star1half" , title:"Suck big time - 1.5 stars" },
    { id:"star1" , value: 1, htmlFor:"star1" , title:"Suck big time - 1 star" }
] 

const Card = props => {
    const { image_url, name, location, display_phone, review_count, rating } = props.business;
    const { viewed } = props;

    return (
        <div className="col-xs-6 col-sm-4 col-md-3 p-3">
            <div className={style.card} onClick={() => props.viewReview(props.business)}>
                <div className={style.header}>
                    <Image
                        src={image_url}
                        alt="local image"
                        width={400}
                        height={400}
                    />
                    <fieldset className={style.rating}>
                        {starsInfo.map(info =>(
                            <Fragment key={info.id}>
                                <label 
                                    className={Number.isInteger(info.value) ? style.full : style.half} 
                                    htmlFor={info.htmlFor} 
                                    title={info.title}
                                    data-rating={rating >= info.value ? "color" : "no-color"}  
                                />
                            </Fragment>
                        ))}
                    </fieldset>
                    <div className={style.mask} />
                    {viewed && (
                        <div className={style.eye}>
                            <Image src={"/image/view.svg"} alt="viewed_eye" width="25px" height="25px" className={style.eye}/>
                        </div>
                    )}
                </div>
                <div className="card-body p-3">
                    <h3 className={viewed ? `m-0 mr-2 ${style.viewed}` : "m-0 mr-2"}>{name}</h3>
                    <div>
                        <div className="d-flex mt-2">
                            <div className="p-0">
                                <Image src={"/image/direction.svg"} alt="viewed_eye" width="25px" height="25px" />
                            </div>
                            <div className="p-1">
                                <p className={`${style.size} ${style.address} m-0`}>{location.display_address.join(", ")}</p>
                            </div>
                        </div>
                        <div className="d-flex mt-2">
                            {display_phone && (
                                <div className="d-flex">
                                    <Image src={"/image/phone-call.svg"} alt="viewed_eye" width="20px" height="20px" />
                                    <p className={`${style.size} p-1 pl-2 m-0`}>{display_phone} | </p>
                                </div>
                            )}
                            <div className="p-1 d-flex">
                                <Image src={"/image/review.svg"} alt="viewed_eye" width="20px" height="20px" />
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