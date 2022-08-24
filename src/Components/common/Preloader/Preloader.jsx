import React from 'react';
import preloader from "../../../assets/images/three-dots.svg";

const Preloader = (props) => {
    return (
        <div>
            <img alt='pre' src={preloader}/>
        </div>
    );
};

export default Preloader;