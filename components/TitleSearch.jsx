import React from "react"

const TitleSearch = ({ searchValue }) => {
    return (
        <div className="container p-3">
            <h2 className="mb-0">{`Best Business in ${searchValue}`}</h2>
        </div>      
    )
} 

export default TitleSearch