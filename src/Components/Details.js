import React from 'react'
import "../Assets/Css/Details.css"
import Datailin from './Datailin'

const Details = () => {
    return (
        <>
            <div className="details">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <Datailin
                                header="About"
                                p="Is too much heat and cold being gained and lost through your home’s old windows and doors? HomeWorks offers beautiful, energy-efficient Renewal by Window Contruction replacement windows. Go no further; you've come to the right place. We are professional, experienced and dedicated to your satisfaction. We value your trust!" />
                        </div>
                        <div className="col-md-4">
                            <Datailin
                                header="Events"
                                p="We are an indispensable attribute of a modern house or office. Our company produces and installs windows and doors for over 12 years. A large number of satisfied customers, years of experience and high-tech production allow us to say that after the installation your home or office will be warm and quiet." />
                        </div>
                        <div className="col-md-4">
                            <Datailin
                                header="Services"
                                p="We offer a great variety of products & services. Putting our clients’ interests first, we work hard to exceed your expectations. Our technicians will come to install your custom window. The production process will take 3-5 working days." />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Details
