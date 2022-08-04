import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {updateNewPostText} from "./redux/state";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar state={props.state.friendsPage}/>

            <div className="app-wrapper-content">
                <Routes>
                    <Route path='/Profile' element={<Profile
                        updateNewPostText={props.updateNewPostText}
                        state={props.state.profilePage}
                        addPost={props.addPost}/>}/>

                    <Route path="/Dialogs/*" element={<Dialogs
                        state={props.state.dialogsPage}/>}/>

                    <Route path='/News' element={<News/>}/>
                    <Route path='/Music' element={<Music/>}/>
                    <Route path='/Settings' element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}


export default App;
