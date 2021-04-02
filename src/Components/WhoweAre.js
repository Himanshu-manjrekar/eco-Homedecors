import React from 'react'
import Choose from './reusablecomponents/Choose'

const WhoweAre = () => {
    return (
        <>
            <section className="container-fluid">
                <div className="section-title">
                    <h2>Why Choose Us</h2>
                    <p>Who We Are</p>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-2">
                        <Choose 
                        no="01"
                        title="WHAT WE DO"
                        />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-2">
                        <Choose 
                        no="02"
                        title="MAINTENANCE PROGRAM "
                        />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-2">
                        <Choose 
                        no="03"
                        title="SOME OF THE BENEFITS"
                        />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-2">
                        <Choose 
                        no="04"
                        title="YOU'LL ENJOY THE RESULTS"
                        />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-2">
                        <Choose 
                        no="05"
                        title="CUSTOMER SATISFACTION"
                        />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-2">
                        <Choose 
                        no="06"
                        title="PURE WATER CLEANING"
                        />
                        </div>
                    </div>
                </div>
                
            </section>
        </>
    )
}

export default WhoweAre
