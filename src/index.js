import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";


let dialogsData = [
    {id: 1, name: 'Parviz'},
    {id: 2, name: 'Nisso'},
    {id: 3, name: 'Parisa'},
    {id: 4, name: 'Latif'},
]

let messagesData = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'One'},
    {id: 3, message: 'Hi'},
    {id: 4, message: 'GO'},
]

let postsData = [
    {id: 1, message: 'Hello, how it\'s going?', likesCount: 15},
    {id: 2, message: "hop hey la la ley", likesCount: 35}
]



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
            <App dialogsData={dialogsData} messagesData={messagesData} postsData={postsData}/>
    </BrowserRouter>
  </React.StrictMode>
);

