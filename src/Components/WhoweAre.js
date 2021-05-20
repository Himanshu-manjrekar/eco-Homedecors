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
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-2">
                            <Choose
                                no="01"
                                title="WHAT WE DO"
                                p="That’s our difference. You want timely, reliable service from someone who really cares about your satisfaction and who has pride in his work. With Window Cleaning Company, that’s precisely what you’ll get."
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-2">
                            <Choose
                                no="02"
                                title="MAINTENANCE PROGRAM "
                                p="Eliminate the hassle of finding time to clean your gutters or remembering when you had your windows cleaned last. Our new Reoccurring Maintenance Program lets you sit back, relax and let us worry."
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-2">
                            <Choose
                                no="03"
                                title="SOME OF THE BENEFITS"
                                p="We are genuinely pleased to offer the most professional and consistent service in the industry to our clients. Our workers have the pride of ownership, and that pride reflects in our work."
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-2">
                            <Choose
                                no="04"
                                title="YOU'LL ENJOY THE RESULTS"
                                p="We have utilized our expert knowledge in professional cleaning to create a range of simple and effective tools, designed to help you keep your home looking great with minimum effort."
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-2">
                            <Choose
                                no="05"
                                title="CUSTOMER SATISFACTION"
                                p="We take pride in developing innovative and unique tools that improve worker efficiency and building sanitation. We continue to innovate and expand our product lines."
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-2">
                            <Choose
                                no="06"
                                title="PURE WATER CLEANING"
                                p="We will vacuum your window tracks and clean your flyscreens as these are all included in the price, there is no point in cleaning a window when the flyscreens and tracks are left dirty!"
                            />
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default WhoweAre
