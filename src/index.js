import './index.css';
import state from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addMessage, addPost, updateNewMessageText, updateNewPostText} from "./redux/state";
import {subscribe} from "./redux/state";


const root = ReactDOM.createRoot(document.getElementById('root'));

let renderEntireTree = () => {
    root.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state}
                     addPost={addPost}
                     updateNewPostText={updateNewPostText}
                     addMessage={addMessage}
                     updateNewMessageText={updateNewMessageText}
                />
            </React.StrictMode>
        </BrowserRouter>
    );
}
renderEntireTree(state);

subscribe(renderEntireTree)