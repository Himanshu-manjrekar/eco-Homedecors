import React from 'react';
import img1 from "../Assets/Images/images/img1.jpg";
import img2 from "../Assets/Images/images/img2.jpg";
import Info from './Info';

const Popular = () => {
    return (
        <>
            <section className="container">
           <div className="section-title">
                <h2>Popular Products</h2>
                <p>Products</p>
            </div>
               <div className="Info__section container">
        <div className="row">
               <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
               <Info 
               title="Windows" 
               img={img1}
               p="Choose window what you want on our site. Our specialist will come to you at the appointed time to measure windows."/>
               </div>
               <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
               <Info 
               title="Doors" 
               img={img2}
               p="The doors you choose for your personal residence or commercial building make a very large personal fashion statement."/>
               </div>
               </div>
               </div>
           </section>
        </>
    )
}

export default Popular
