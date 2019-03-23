import React, {Component} from 'react';
import './Films.css';
import roma from './roma.jpg';
import bohemian from './bohemian.jpg';
import favourite from './favourite.jpg';
import beale from './beale.jpg';

const Films = (props) => (
    <div className="films">
        <h2 className="title">Films</h2>
        <div className="filmsGrid">

            <img src={roma} />
            <img src={bohemian} />
            <img src={favourite} />
            <img src={beale} />

        </div>
    </div>
);

export default Films;