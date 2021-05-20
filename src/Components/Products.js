import React from 'react'
import pro_img1 from '../Assets/Images/products/pro_img1.jpg'
import pro_img2 from '../Assets/Images/products/pro_img2.jpg'
import pro_img3 from '../Assets/Images/products/pro_img3.jpg'
import pro_img4 from '../Assets/Images/products/pro_img4.jpg'
import pro_img5 from '../Assets/Images/products/pro_img5.jpg'
import pro_img6 from '../Assets/Images/products/pro_img6.jpg'
import ProductDet from './ProductDet';

const Products = () => {
    return (
        <>
            <section className="container">
                <div className="section-title">
                    <h2>Popular Products</h2>
                    <p>Products</p>
                </div>
                <div className="container-fluid mb-5 ">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-2">
                            <ProductDet
                                img={pro_img1}
                                title="WHAT WE DO"
                                p="We can perform almost anything: install windows, balconies and doors, escarping, welding and cladding with insulation..."
                                act="Read More"
                                img_class="prod__img"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-2">
                            <ProductDet
                                img={pro_img2}
                                title="FIBERGLASS PREHUNG DOOR"
                                p="We use only original parts at all the stages of the production and installation. Components are certified with the licenses..."
                                act="Read More"
                                img_class="prod__img"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-2">
                            <ProductDet
                                img={pro_img3}
                                title="WOOD PREHUNG DOOR"
                                p="Everyone understands that ordering in one organization is cheaper, quicker and more practical. Warranty for 7 years..."
                                act="Read More"
                                img_class="prod__img"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-2">
                            <ProductDet
                                img={pro_img4}
                                title="PANTRY WOOD GRAIN"
                                p="Windows and doors are an indispensable attribute of a modern house or office. Our company produces..."
                                act="Read More"
                                img_class="prod__img"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-2">
                            <ProductDet
                                img={pro_img5}
                                title="BI-FOLD DOORS"
                                p="High-quality installed windows and doors reduce heat loss up to 70% compared to the usual wood windows..."
                                act="Read More"
                                img_class="prod__img"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-2">
                            <ProductDet
                                img={pro_img6}
                                title="FRENCH DOOR"
                                p="Quality production and original components allow us to give full seven-year warranty on our windows and doors..."
                                act="Read More"
                                img_class="prod__img"
                            />
                        </div>
                    </div>
                </div>


            </section>
            <div className="container d-flex align-items-center justify-content-center">
                <button type="button" className="btn btn-secondary ">See all Products</button>
            </div>
        </>
    )
}

export default Products
