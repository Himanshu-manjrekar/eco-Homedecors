import React from 'react'
import "../Assets/Css/Details.css"

const Datailin = ({ header, p }) => {
    return (
        <>
            <div className="content">
                <h6>{header}</h6>
                <p>{p}</p>
            </div>
        </>
    )
}

export default Datailin
