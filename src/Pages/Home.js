import Carousel from '../Components/Carousel';
import React from 'react';
import divider from "../Assets/Images/divider.png";
import Linebreak from '../Components/reusablecomponents/Linebreak';
import Popular from '../Components/Popular';
import Jumbotron from '../Components/Jumbotron';
import WhoweAre from '../Components/WhoweAre';

const Home = () => {
    return (
        <>
           <Carousel />
           <Popular />
           <Linebreak img={divider}/>
           <Jumbotron />
           <Linebreak img={divider}/>
           <WhoweAre />
           <Linebreak img={divider}/>
        </>
    )
}

export default Home
