import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar state={props.state}/>

            <div className="app-wrapper-content">
                <Routes>
                    <Route path='/Profile' element={<Profile
                        updateNewPostText={props.updateNewPostText}
                        state={props.state}
                        addPost={props.addPost}/>}/>

                    <Route path="/Dialogs/*" element={<Dialogs
                        updateNewMessageText={props.updateNewMessageText}
                        state={props.state.dialogsPage}
                        addMessage={props.addMessage}/>}/>

                    <Route path='/News' element={<News/>}/>
                    <Route path='/Music' element={<Music/>}/>
                    <Route path='/Settings' element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}


export default App;
