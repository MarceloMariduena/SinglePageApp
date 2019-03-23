import React, {Component} from 'react';
import './Actresses.css';
import olivia from "./olivia.jpg";
import regina from "./regina.jpg";

const Actresses = (props) => (
    <div className="actresses">
        <h2 className="title">Actresses</h2>

        <div className="actressesGrid">
            <div>
                <img src={olivia} />
                <h3>Olivia Colman</h3>
                <p>Sarah Caroline Olivia Colman is an English actress. She is the recipient of several awards, including an Academy Award, four BAFTA Awards, two Golden Globe Awards, four British Independent Film Awards, the Volpi Cup for Best Actress and a BFI Fellowship.</p>
            </div>
    
            <div>
                <img src={regina} />
                <h3>Regina King</h3>
                <p>Regina Rene King is an American actress and television director. She is the recipient of various accolades including an Academy Award, a Golden Globe Award, and three Primetime Emmy Awards. King first gained attention in 1985 as Brenda Jenkins in the NBC television series 227.</p>
            </div>
        </div>
    </div>
);

export default Actresses;