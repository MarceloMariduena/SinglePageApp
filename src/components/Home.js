import React, {Component} from 'react';
import './Home.css';

const Home = (props) => (
    <div className="home">
        <div className="container">
            <h2>{props.title}</h2>
            <div className="home-image"></div>
            <div className="thumbnail-container">
                <div className="thumbnail-1"></div>
                <div className="thumbnail-2"></div>
                <div className="thumbnail-3"></div>
            </div>
        </div>
    </div>
);

export default Home;
