import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar/>

            <div className="app-wrapper-content">
                <Routes>
                    <Route path='/profile/' element={<ProfileContainer/>}>
                        <Route path=':userId' element={<ProfileContainer/>}/>
                    </Route>

                    <Route path="/Dialogs/*" element={<DialogsContainer/>}/>


                    <Route path='Users/*' element={<UsersContainer/>}/>

                    <Route path='/News' element={<News/>}/>
                    <Route path='/Music' element={<Music/>}/>
                    <Route path='Settings' element={<Settings/>}/>

                </Routes>
            </div>
        </div>
    );
}


export default App;
