import React, { Fragment } from "react";
import style from "../scss/card.module.scss"

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

const Stars = ({ rating }) => {
    return (
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
    )
}

export default Stars