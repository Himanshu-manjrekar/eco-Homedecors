import React from 'react'
import ProjectIn from './ProjectIn'
import '../Assets/Css/Project.css'
import proj_img1 from '../Assets/Images/Projects/work_1.jpg'
import proj_img2 from '../Assets/Images/Projects/work_2.jpg'
import proj_img3 from '../Assets/Images/Projects/work_3.jpg'
import proj_img4 from '../Assets/Images/Projects/work_41.jpg'

const Projects = () => {
    return (
        <>
            <div className="container-fluid projects" style={{ backgroundColor: "#262626" }}>
                <div className="row no-gutters">
                    <div className="col-md-6 p-0 m-0">
                        <ProjectIn
                            h="choose Window"
                            bg_img={proj_img1}
                            p="We have cleaning schedules and invoicing solutions which
                         will fit your needs - or if not, we might be able to create
                         a new one just for you! "/>
                        {/* header, para, bg_img:- props */}
                    </div>
                    <div className="col-md-6 p-0 m-0">
                        <ProjectIn
                            h="manufacturing"
                            bg_img={proj_img2}
                            p="On our website you can ask questions you have about
                            window cleaning technology or our schedules,
                             and get in touch with us. " />
                    </div>
                    <div className="col-md-6 p-0 m-0">
                        <ProjectIn
                            h="Installation"
                            bg_img={proj_img3}
                            p="Feel free to browse! We offer an exceptional service
                            to residential and commercial customers. Specialists
                            in traditional methods of cleaning." />
                    </div>
                    <div className="col-md-6 p-0 m-0">
                        <ProjectIn
                            h="Gutter cleaning"
                            bg_img={proj_img4}
                            p="Our company is a very friendly, professional, and efficient
                             team with high standards of OH&S practices, security
                             practices, as well as being fully insured for you." />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects
