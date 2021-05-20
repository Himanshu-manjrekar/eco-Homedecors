import React from 'react';
import '../../Assets/Css/Choose.css';

const Choose = ({ no, title, p, img }) => {
    return (
        <>
            <div className="choose">
                <div className="container">
                    <div className="card__num">
                        <p className="card__con">{no}</p>

                    </div>
                </div>
                <div >
                    <div className="card__title">
                        <h4>{title}</h4>
                    </div>
                    <div className="card__para">
                        <p>{p}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Choose
