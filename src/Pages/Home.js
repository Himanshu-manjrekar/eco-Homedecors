import Carousel from '../Components/Carousel';
import React from 'react';
import divider from "../Assets/Images/divider.png";
import Linebreak from '../Components/reusablecomponents/Linebreak';
import Popular from '../Components/Popular';
import Jumbotron from '../Components/Jumbotron';
import WhoweAre from '../Components/WhoweAre';
import Products from '../Components/Products';
import Projects from '../Components/Projects';
import Details from '../Components/Details';
import Testimonials from '../Components/Testimonials';
import Footer from '../Components/Footer/Footer';

const Home = () => {
    return (
        <>
            <Carousel />
            <Popular />
            <Linebreak img={divider} />
            <Jumbotron />
            <Linebreak img={divider} />
            <WhoweAre />
            <Linebreak img={divider} />
            <Products />
            <Linebreak img={divider} />
            <Projects />
            <Linebreak img={divider} paint="#262626" />
            <Details />
            <Linebreak img={divider} paint="#262626" />
            <Testimonials />
            <Linebreak img={divider} paint="#262626" />
            <Footer />
        </>
    )
}

export default Home
