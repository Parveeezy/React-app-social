import './App.css';
import {NavLink} from "react-router-dom";


const App = (props) => {
    return (
        <div className="App-wrapper">
            <header className="header">
                <img src="https://seeklogo.com/images/S/svg-logo-C2C6DE140E-seeklogo.com.png"/>
            </header>

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

            <div className="content">
                <div>
                    <img src="https://nissi-beach.com/wp-content/uploads/2016/11/NissiBeach-21-1620x600.jpg"/>
                </div>
                <div>
                    ava + description
                </div>
                <div>
                    My Posts
                    <div>
                        New Post
                    </div>
                </div>
                <div>
                    Post 1
                </div>
                <div>
                    Post 2
                </div>
            </div>
        </div>
    );
}


export default App;
