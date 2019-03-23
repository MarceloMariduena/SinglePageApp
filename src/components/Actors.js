import React, {Component} from 'react';
import './Actors.css';
import rami from './rami.jpg';
import mahershala from './mahershala.jpg';

const Actors = (props) => (
    <div className="actors">
        <h2 className="title">Actors</h2>

         <div className="actorsGrid">
            <div>
                <img src={rami} />
                <h3>Rami Malek</h3>
                <p>Rami Said Malek is an American actor. His breakthrough role was as computer hacker Elliot Alderson in the USA Network television series Mr. Robot, for which he received several accolades, including the 2016 Primetime Emmy Award for Outstanding Lead Actor in a Drama Series.</p>
            </div>

            <div>
                <img src={mahershala} />
                <h3>Mahershala Ali</h3>
                <p>Mahershalalhashbaz Ali, known professionally as Mahershala Ali, is an American actor. Ali began his career as a regular on television series before his breakthrough role as Richard Tyler in the science fiction series The 4400.</p>
            </div>

        </div>
    </div>
);

export default Actors;