import React from 'react'
import Choose from './reusablecomponents/Choose'

const WhoweAre = () => {
    return (
        <>
            <section className="container">
                <div className="section-title">
                    <h2>Why Choose Us</h2>
                    <p>Who We Are</p>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-2">
                        <Choose />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-2">
                        <Choose />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-2">
                        <Choose />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-2">
                        <Choose />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-2">
                        <Choose />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-2">
                        <Choose />
                        </div>
                    </div>
                </div>
                
            </section>
        </>
    )
}

export default WhoweAre
