import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>

            <div className="app-wrapper-content">
                <Routes>
                    <Route path='/Profile' element={<Profile/>}/>
                    <Route path='/Dialogs' element={<Dialogs/>}/>
                </Routes>
            </div>
        </div>
    );
}


export default App;
