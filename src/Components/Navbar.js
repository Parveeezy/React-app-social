import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="nav">
            <div>
                <NavLink to="#">Profile</NavLink>
            </div>
            <div>
                <NavLink to="#">Messages</NavLink>
            </div>
            <div>
                <NavLink to="#">News</NavLink>
            </div>
            <div>
                <NavLink to="#">Music</NavLink>
            </div>
            <div>
                <NavLink to="#">Settings</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;