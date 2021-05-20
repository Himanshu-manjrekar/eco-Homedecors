import React from 'react'
import '../Assets/Css/Testimonials.css'
import ProductDet from './ProductDet'
import testi1 from "../Assets/Images/Testimonials/testi1.jpg"
import testi2 from "../Assets/Images/Testimonials/testi2.jpg"
import testi3 from "../Assets/Images/Testimonials/testi3.jpg"

const Testimonials = () => {
    return (
        <>
            <div className="testimonials">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <ProductDet
                                img={testi1}
                                title="WHAT WE DO"
                                p="We can perform almost anything: install windows, balconies and doors, escarping, welding and cladding with insulation..."
                                btnn="true"
                                credit="Maria Griffin"
                                img_class="testi_img"
                            />
                        </div>
                        <div className="col-md-4">
                            <ProductDet
                                img={testi2}
                                title="WHAT WE DO"
                                p="We can perform almost anything: install windows, balconies and doors, escarping, welding and cladding with insulation..."
                                btnn="true"
                                credit="Jospeh Simmons"
                                img_class="testi_img"
                            />
                        </div>
                        <div className="col-md-4">
                            <ProductDet
                                img={testi3}
                                title="WHAT WE DO"
                                p="We can perform almost anything: install windows, balconies and doors, escarping, welding and cladding with insulation..."
                                btnn="true"
                                credit="Robert Rivera"
                                img_class="testi_img"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonials
