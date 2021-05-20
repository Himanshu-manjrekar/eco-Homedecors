import React, { useState } from 'react';
import "../Assets/Css/Product__det.css";
import { FaQuoteRight } from 'react-icons/fa'

const ProductDet = ({ img, title, p, act, btnn, credit, img_class }) => {

    const [btn] = useState(btnn)


    return (
        <>
            <div className="choose">
                <div className="container">
                    <div className={img_class}>
                        <img src={img} alt="" />
                    </div>
                </div>
                <div>
                    <div className="card__title">
                        {btn === "true" ? <h5 className="quote"><FaQuoteRight /></h5> : <h4>{title}</h4>}
                    </div>
                    <div className="card__para">
                        <p>{p}</p>
                    </div>
                    {btn === "true" ? <h5 className="testimonial__credit">- {credit}</h5> : <button type="button" className="btn btn-primary ">{act}</button>}
                </div>
            </div>
        </>
    )
}

export default ProductDet
