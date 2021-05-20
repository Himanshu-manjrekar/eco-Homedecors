import React from 'react';
import '../Assets/Css/Info.css';

const Info = ({ p, img }) => {
    return (
        <>
            <div className="Info">
                <div className="image-box">
                    <img src={img} alt="Product" width="540" height="548" />
                </div>
                <span className="info_text">
                    <p>{p}</p>
                </span>
                <div className="container d-flex align-items-center justify-content-center">
                    <button type="button" className="btn btn-primary ">SEE ALL COLLECTION</button>
                </div>
            </div>

        </>
    )
}

export default Info
