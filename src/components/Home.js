import React, {Component} from 'react';
import './Home.css';    
import img0 from './oscars.jpg';
import img1 from './oscarWinners1.jpg';
import img2 from './oscarWinners2.jpg';
import img3 from './oscarWinners3.jpg';

const Home = (props) => (
    <div className="home">
        <h2 className="title">{props.title}</h2>

        <ul className="container">
            <img class="defaultImage" src={img0}/>

            <li><img class="smallImage" src={img1}/>
            <img class="bigImage" src={img1}/></li>

            <li><img class="smallImage" src={img2}/>
            <img class="bigImage" src={img2}/></li>

            <li><img class="smallImage" src={img3}/>
            <img class="bigImage" src={img3}/></li>
        </ul>

    </div>
);

export default Home;

