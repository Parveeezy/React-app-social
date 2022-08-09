import store from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById('root'));

let renderEntireTree = (state) => {
    root.render(
        <BrowserRouter>
            {/*<React.StrictMode>*/}
                <App store={store} dispatch={store.dispatch.bind(store)}/>
            {/*</React.StrictMode>*/}
        </BrowserRouter>
    );
}
renderEntireTree(store.getState());

store.subscribe(renderEntireTree)