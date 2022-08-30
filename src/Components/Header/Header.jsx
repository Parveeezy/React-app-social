import s from "./Header.module.css"
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img alt="img" src="https://seeklogo.com/images/S/svg-logo-C2C6DE140E-seeklogo.com.png"/>

            <div className={s.loginBlock}>
                {props.isAuth ? props.login: <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    );
};

export default Header;