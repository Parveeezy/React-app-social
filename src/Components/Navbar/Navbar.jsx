import {NavLink} from "react-router-dom";
import s from "./Navbar.module.css"

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="#">Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="#">Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="#">News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="#">Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="#">Settings</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;