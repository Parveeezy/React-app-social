import {NavLink} from "react-router-dom";
import classes from "./Navbar.module.css"
import Friends from "../Friends/Friends";

const Navbar = (props) => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/Profile" className={({isActive}) => isActive ? classes.active : classes.item}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/Dialogs" className={({isActive}) => isActive ? classes.active : classes.item}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/News" className={({isActive}) => isActive ? classes.active : classes.item}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/Music" className={({isActive}) => isActive ? classes.active : classes.item}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/Settings" className={({isActive}) => isActive ? classes.active : classes.item}>Settings</NavLink>
            </div>
            <Friends state={props.state}/>
        </nav>
    );
};

export default Navbar;