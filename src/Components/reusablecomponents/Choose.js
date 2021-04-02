import React from 'react';
import '../../Assets/Css/Choose.css';

const Choose = ({no, title}) => {
    return (
        <>
            <div className="choose">    
                <div className="card__num">
                    <p className="card__con">{no}</p>
                </div>
                <div className="card__title">
                    <h4>{title}</h4>
                </div>
                <div className="card__para">
                    <p></p>
                </div>
            </div>
        </>
    )
}

export default Choose
