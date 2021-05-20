import React from 'react'
// import proj_img1 from '../Assets/Images/Projects/work-1.jpg'
import '../Assets/Css/Project.css'

const ProjectIn = ({ h, p, bg_img }) => {
    return (
        <>
            <div className="img-hover-zoom">
                <img src={bg_img} alt="smooth" />
                <div className="centered-text">
                    <h2>{h}</h2>
                    <p>{p}</p>
                </div>
            </div>
        </>
    )
}

export default ProjectIn
